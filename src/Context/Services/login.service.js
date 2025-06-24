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
    localStorage.setItem("token", JSON.stringify(response.data.token));
    setLogin(true);
    localStorage.setItem("login", true.toString());
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

export const LogoutUser = async setUser => {
  const result = await axios.post(
    `${import.meta.env.VITE_PUBLISH_SERVER}logout`
  );

  if (result) {
    setUser([]);
    alert("You have loged-out!");
  }
};
