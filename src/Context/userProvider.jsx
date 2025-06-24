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
  const [login, setLogin] = useState(false);
  const [favourite, setFavourite] = useState([]);
  const [cartID, setCartID] = useState([]);
  const [cart, setCart] = useState([]);

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
    const newFavoutite = await axios.post(
      `${import.meta.env.VITE_PUBLISH_SERVER}api/users/getfavouritebyid`,
      {
        user_id: user_id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (newFavoutite.data.favourite.length > 1) {
      const result = await axios.post(
        `${import.meta.env.VITE_PUBLISH_SERVER}api/item/fulltext`,
        {
          input: newFavoutite.data.favourite.join(" | "),
        }
      );
      setfavouriteID(newFavoutite.data.favourite);
      setFavourite(result.data);
    } else {
      const result = await axios.post(
        `${import.meta.env.VITE_PUBLISH_SERVER}api/item/fulltext`,
        {
          input: newFavoutite.data.favourite.join(),
        }
      );
      setfavouriteID(newFavoutite.data.favourite);
      setFavourite(result.data);
    }
  };
  const handleCartList = async user => {
    if (user && user.cart?.length > 0) {
      setCart(user.cart);
    }
  };

  const updateFavourite = async item_id => {
    try {
      const token = await JSON.parse(localStorage.getItem("token"));
      const officialUser = user;
      if (favouriteID.includes(item_id)) console.log("nothing changes");
      else {
        const newArray = [...favouriteID, item_id];
        const response = await axios.put(
          `${import.meta.env.VITE_PUBLISH_SERVER}api/users/update/${
            officialUser.id
          }`,
          { favourite: newArray },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response) {
          handleWishlist(user.id, token);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (updated) {
      navigateUserToProfile();
    }
  }, [updated]);
  const LoginUser = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_PUBLISH_SERVER}users/login`,
        {
          email: email,
          password: password,
        }
      );
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
        `${import.meta.env.VITE_PUBLISH_SERVER}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response) {
        // console.log(response.data.id);
        handleWishlist(response.data.id, token);
        handleCartList(response.data.id);
        localStorage.setItem("user", JSON.stringify(response.data));
        setfavouriteID(response.data.favourite);
        setCartID(response.data.cart);
        setUser(await JSON.parse(localStorage.getItem("user")));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const Logout = async () => {
    const result = await axios.post(
      `${import.meta.env.VITE_PUBLISH_SERVER}logout`
    );

    if (result) {
      setUser([]);
      alert("You have loged-out!");
    }
  };

  const updateToCart = async item_id => {
    try {
      const token = await JSON.parse(localStorage.getItem("token"));
      const officialUser = JSON.parse(localStorage.getItem("user"));
      const newArray = [...cartID, item_id];
      console.log("new Cart: ", newArray);
      const response = await axios.put(
        `${import.meta.env.VITE_PUBLISH_SERVER}api/users/updatecart/${
          officialUser.id
        }`,
        { cart: newArray },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response) {
        setCartID(newArray);
        if (user) {
          const newUser = await axios.post(
            `${import.meta.env.VITE_PUBLISH_SERVER}api/users/getsbyid`,
            {
              user_id: officialUser.id,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(newUser);
          setUser(newUser.data);
          setCart(newUser.data[0].cart);
        }
      }
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
