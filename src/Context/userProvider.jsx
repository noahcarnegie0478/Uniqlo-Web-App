import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const userContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [isValid, SetValid] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   console.log(user);
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

  const LoginUser = async () => {
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        email: email,
        password: password,
      });
      console.log("email: ", email);
      console.log("password:", password);
      const token = await response.data.token;
      console.log(token);
      await navigateUserToProfile(token);
      SetValid(false);
    } catch (error) {
      console.log(error);
      SetValid(false);
    }
  };
  const navigateUserToProfile = async token => {
    try {
      const response = await axios.get("http://localhost:3000/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      setUser(response.data);

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
      }}
    >
      {" "}
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
