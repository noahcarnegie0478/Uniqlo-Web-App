import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { itemsContext } from "./ItemProvider";

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
  const [login, setLogin] = useState(false);
  const [favourite, setFavourite] = useState([]);

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
  useEffect(() => {
    if (login) {
      handleWishlist(user);
    }
  }, [user]);
  const handleWishlist = async user => {
    if (user && user.favourite?.length > 0) {
      const result = await axios.post(
        "http://localhost:3000/api/item/fulltext",
        {
          input: user.favourite.join(" | "),
        }
      );
      console.log("result of the 1st: ", result);
      setFavourite(result.data);
    } else {
      const result = await axios.post(
        "http://localhost:3000/api/item/fulltext",
        {
          input: user.favourite.join(),
        }
      );
      console.log("result: ", result);
      setFavourite(result.data);
      console.log("favourite change after fetch: ", favourite);
    }
  };
  ////
  //
  //
  ///
  //
  const updateFavourite = async () => {
    try {
      const token = await JSON.parse(localStorage.getItem("token"));
      const officialUser = JSON.parse(localStorage.getItem("user"));
      console.log("token after fetch: ", token),
        console.log("favourite before fetch:", await favouriteID);
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
  //
  //
  //
  useEffect(() => {
    if (updated) {
      navigateUserToProfile();
      setUpdated(false);
    }
  }, [updated]);
  const LoginUser = async () => {
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("token", JSON.stringify(response.data.token));
      setLogin(true);
      localStorage.setItem("login", true.toString());

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
      setUser(await JSON.parse(localStorage.getItem("user")));
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
        login,
        setLogin,
        updated,
        setUpdated,
        favourite,
        setFavourite,
        handleWishlist,
      }}
    >
      {" "}
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
