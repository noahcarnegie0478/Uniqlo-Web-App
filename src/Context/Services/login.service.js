import axios from "axios";

export const Login = async (
  email,
  password,
  setLogin,
  SetValid,
  handleWishlist,
  handleCartList,
  setUser
) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_PUBLISH_SERVER}users/login`,
      {
        email: email,
        password: password,
      }
    );
    const loginDate = new Date();
    localStorage.setItem("token", JSON.stringify(response.data.token));
    setLogin(true);
    localStorage.setItem("login", true.toString());
    localStorage.setItem("loginTime", loginDate.toISOString());
    await navigateUserToProfile(handleWishlist, handleCartList, setUser);
    SetValid(false);
  } catch (error) {
    console.log(error);
    SetValid(false);
  }
};

export const navigateUserToProfile = async (
  handleWishlist,
  handleCartList,
  setUser
) => {
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
      handleWishlist(response.data.id, token);
      handleCartList(response.data.id, token);
      localStorage.setItem("user", JSON.stringify(response.data));
      setUser(await JSON.parse(localStorage.getItem("user")));
    }
  } catch (error) {
    console.log(error);
  }
};

export const LogoutUser = async (setUser, setFavourite, setCart) => {
  const result = await axios.post(
    `${import.meta.env.VITE_PUBLISH_SERVER}logout`
  );
  if (result) {
    setUser(null);
    setFavourite([]);
    setCart([]);
    localStorage.removeItem("user");
    localStorage.removeItem("login");
    localStorage.removeItem("loginTime");
    localStorage.removeItem("cart");
    localStorage.removeItem("favourite");
    localStorage.removeItem("token");
    alert("You have loged-out!");
  }
};
export const checkLogout = (setUser, setFavourite, setCart) => {
  const loginTime = new Date(localStorage.getItem("loginTime"));
  console.log(loginTime);
  if (!loginTime) return;
  if (loginTime) {
    const currentDate = new Date();
    const result = (currentDate - loginTime.getTime()) / 1000;
    console.log("you have ", result, "seconds left!");
    if (result >= 15 * 60 * 1000) {
      console.log("suppose to logout!");
      LogoutUser(setUser, setFavourite, setCart);
    }
  }
};
