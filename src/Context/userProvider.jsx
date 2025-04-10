import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const userContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [favouriteID, setfavouriteID] = useState([]);
  const [error, setError] = useState("");
  const [isValid, SetValid] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [updated, setUpdated] = useState(false);

  // account Valid cheking
  const checkAccount = () => {
    console.log("running");
    if (email == null) {
      setError("This could not leave empty");
    } else if (!emailRegex.test(email)) {
      setError("Your email is not valid, please try again");
    } else if (password == null) {
      setError("This could not leave empty");
    } else if (password.length < 8) {
      setError("Your password is not valid, please try again");
    } else {
      setError("");
      SetValid(true);
    }
  };

  const updateFavourite = async () => {
    try {
      const token = await JSON.parse(localStorage.getItem("token"));
      const officialUser = JSON.parse(localStorage.getItem("user"));
      console.log("token after fetch: ", token),
        console.log("user after fetch: ", officialUser);

      const response = await axios.put(
        `http://localhost:3000/api/users/update/${officialUser.id}`,
        { favourite: favouriteID },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUpdated(true);
      console.log(response.data);
      console.log("succesfully set up favourite:", favouriteID);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (updated) {
      navigateUserToProfile();
      const officialUser = JSON.parse(localStorage.getItem("user"));
      setfavouriteID(officialUser.favourite);
    }
  }, [updated]);
  const LoginUser = async () => {
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("token", JSON.stringify(response.data.token));
      await navigateUserToProfile();
      SetValid(false);
    } catch (error) {
      console.log(error);
      SetValid(false);
    }
  };
  const navigateUserToProfile = async () => {
    try {
      const token = await JSON.parse(localStorage.getItem("token"));
      const response = await axios.get(
        "http://localhost:3000/",

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      localStorage.setItem("user", JSON.stringify(response.data));
      setUser(JSON.parse(localStorage.getItem("user")));

      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isValid) {
      LoginUser();
    }
  }, [isValid]);

  return (
    <userContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        error,
        setError,
        isValid,
        SetValid,
        checkAccount,
        LoginUser,
        user,
        setUser,

        favouriteID,
        setfavouriteID,
        updateFavourite,
      }}
    >
      {" "}
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
