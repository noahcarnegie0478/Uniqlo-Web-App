import axios from "axios";

export const wishListHandler = async (
  user_id,
  token,
  setfavouriteID,
  setFavourite
) => {
  try {
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
    if (newFavoutite) {
      if (newFavoutite.data.favourite == null) {
        setfavouriteID([]);
        setFavourite([]);
      } else {
        const result =
          newFavoutite.data.favourite.length > 1
            ? await axios.post(
                `${import.meta.env.VITE_PUBLISH_SERVER}api/item/fulltext`,
                {
                  input: newFavoutite.data.favourite.join(" | "),
                }
              )
            : await axios.post(
                `${import.meta.env.VITE_PUBLISH_SERVER}api/item/fulltext`,
                {
                  input: newFavoutite.data.favourite.join(),
                }
              );
        setfavouriteID(newFavoutite.data.favourite);
        setFavourite(result.data);
        localStorage.setItem("favourite", JSON.stringify(result.data));
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const favouriteUpdate = async (
  item_id,
  user,
  favouriteID,
  setfavouriteID,
  setFavourite
) => {
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
        wishListHandler(user.id, token, setfavouriteID, setFavourite);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

//create a function that handle favourite without user !
export const guestFavouriteUpdate = async (
  item_id,
  favouriteID,
  setfavouriteID,
  setFavourite
) => {
  {
    if (favouriteID.includes(item_id)) {
      console.log("nothing changes");
    } else {
      const newArray = [...favouriteID, item_id];
      const result =
        newArray.length > 1
          ? await axios.post(
              `${import.meta.env.VITE_PUBLISH_SERVER}api/item/fulltext`,
              {
                input: newArray.join(" | "),
              }
            )
          : await axios.post(
              `${import.meta.env.VITE_PUBLISH_SERVER}api/item/fulltext`,
              {
                input: newArray.join(),
              }
            );
      if (result) {
        setfavouriteID(newArray);
        setFavourite(result.data);
        localStorage.setItem("favourite", JSON.stringify(result.data));
      }
    }
  }
};
