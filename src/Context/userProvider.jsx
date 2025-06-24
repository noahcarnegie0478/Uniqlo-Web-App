import React, { createContext, useState, useEffect } from "react";
import { Login, LogoutUser } from "./Services/login.service";
import { CartHandle, cartUpdate } from "./Services/cart.service";
import { favouriteUpdate, wishListHandler } from "./Services/favourite.service";
export const userContext = createContext();
export const UserProvider = ({ children }) => {
  // const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [favouriteID, setfavouriteID] = useState([]);
  const [error, setError] = useState("");
  const [isValid, SetValid] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [updated, setUpdated] = useState(false);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });
  console.log(localStorage.getItem("favourite"));
  console.log(localStorage.getItem("cart"));
  const [favourite, setFavourite] = useState(() => {
    const saved = localStorage.getItem("favourite");
    return saved ? JSON.parse(saved) : [];
  });
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

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
  const handleWishlist = async (user_id, token) => {
    await wishListHandler(user_id, token, setfavouriteID, setFavourite);
  };
  const handleCartList = async (user_id, token) => {
    await CartHandle(user_id, token, setCart);
  };

  const updateFavourite = async item_id => {
    await favouriteUpdate(
      item_id,
      user,
      favouriteID,
      setfavouriteID,
      setFavourite
    );
  };
  const LoginUser = async () => {
    await Login(
      email,
      password,
      setLogin,
      SetValid,
      handleWishlist,
      handleCartList,
      setUser
    );
  };
  const Logout = async () => {
    await LogoutUser(setUser);
  };
  const updateToCart = async cart_item => {
    await cartUpdate(cart_item, user, setCart, cart);
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
        updateToCart,
        cart,
        setCart,
        Logout,
      }}
    >
      {" "}
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
