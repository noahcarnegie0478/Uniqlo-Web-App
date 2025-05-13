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

  const handleWishlist = async user => {
    console.log(user.favourite.join(" | "));
    if (user && user.favourite?.length > 0) {
      console.log("run");
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
  const handleCartList = async user => {
    if (user && user.cart?.length > 0) {
      console.log("run");
      const result = await axios.post(
        "http://localhost:3000/api/item/fulltext",
        {
          input: user.cart.map(array => array.id).join(" | "),
        }
      );
      console.log("result of the 1st: ", result);
      setCart(result.data);
    } else {
      const result = await axios.post(
        "http://localhost:3000/api/item/fulltext",
        {
          input: user.cart.map(array => array.id).join(),
        }
      );
      console.log("result: ", result);
      setCart(result.data);
      console.log("favourite change after fetch: ", favourite);
    }
  };

  const updateFavourite = async item_id => {
    try {
      const token = await JSON.parse(localStorage.getItem("token"));
      const officialUser = JSON.parse(localStorage.getItem("user"));

      //if includes, so no action. else ...
      if (favouriteID.includes(item_id)) {
        console.log("nothing changes");
      } else {
        const newArray = [...favouriteID, item_id];
        console.log("new Array: ", newArray);
        const response = await axios.put(
          `http://localhost:3000/api/users/update/${officialUser.id}`,
          { favourite: newArray },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response) {
          setfavouriteID(newArray);
          if (user && newArray.length > 1) {
            const result = await axios.post(
              "http://localhost:3000/api/item/fulltext",
              {
                input: newArray.join(" | "),
              }
            );
            console.log("result of the 1st: ", result);
            setFavourite(result.data);
            const newUser = await axios.post(
              "http://localhost:3000/api/users/getsbyid",
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
          } else {
            const result = await axios.post(
              "http://localhost:3000/api/item/fulltext",
              {
                input: newArray.join(),
              }
            );
            console.log("result of the 1st: ", result);
            setFavourite(result.data);
            const newUser = await axios.post(
              "http://localhost:3000/api/users/getsbyid",
              {
                user_id: officialUser.id,
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            setUser(newUser);
          }
        }

        // console.log("favouriteId: ", favouriteID);
      }
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
    }
  }, [updated]);
  useEffect(() => {
    console.log("user after changed:", user);
  }, [user]);
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
      if (response) {
        handleWishlist(response.data);
        handleCartList(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        setfavouriteID(response.data.favourite);
        setCartID(response.data.cart);
        setUser(await JSON.parse(localStorage.getItem("user")));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateToCart = async item_id => {
    try {
      const token = await JSON.parse(localStorage.getItem("token"));
      const officialUser = JSON.parse(localStorage.getItem("user"));
      const newArray = [...cartID, item_id];
      console.log("new Cart: ", newArray);
      const response = await axios.put(
        `http://localhost:3000/api/users/updatecart/${officialUser.id}`,
        { cart: newArray },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response) {
        setCartID(newArray);
        if (user && newArray.length > 1) {
          const result = await axios.post(
            "http://localhost:3000/api/item/fulltext",
            {
              input: newArray.map(array => array.id).join(" | "),
            }
          );
          console.log("result cart ", result);
          setCart(result.data);
          const newUser = await axios.post(
            "http://localhost:3000/api/users/getsbyid",
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
        } else {
          const result = await axios.post(
            "http://localhost:3000/api/item/fulltext",
            {
              input: newArray.map(array => array.id).join(),
            }
          );
          console.log("result of cart: ", result);
          setCart(result.data);
          const newUser = await axios.post(
            "http://localhost:3000/api/users/getsbyid",
            {
              user_id: officialUser.id,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUser(newUser);
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
      }}
    >
      {" "}
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
