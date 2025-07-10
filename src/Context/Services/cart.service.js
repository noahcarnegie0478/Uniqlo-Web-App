import axios from "axios";
export const CartHandle = async (user_id, token, setCart) => {
  try {
    const newCart = await axios.post(
      `${import.meta.env.VITE_PUBLISH_SERVER}api/users/getcartbyid`,
      {
        user_id: user_id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (newCart) {
      if (newCart.data.cart == null) setCart([]);
      else {
        setCart(newCart.data.cart);
      }

      localStorage.setItem("cart", JSON.stringify(newCart.data.cart));
    }
  } catch (error) {
    console.log(error);
  }
};

export const cartFilter = (cart_item, cart) => {
  for (const itm of cart) {
    if (itm.id == cart_item.id) {
      if (cart_item.color != itm.color || cart_item.size != itm.size) {
        return [...cart, cart_item];
      }
      itm.quatity = itm.quatity + cart_item.quatity;
      console.log("combine them");
      return cart;
    }
  }
  console.log("add new Item");
  return [...cart, cart_item];
};

export const cartUpdate = async (cart_item, user, setCart, cart) => {
  try {
    const token = await JSON.parse(localStorage.getItem("token"));
    const officialUser = user;
    const newArray = await cartFilter(cart_item, cart);
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
      CartHandle(user.id, token, setCart);
    }
  } catch (error) {
    console.log(error);
  }
};
export const guestCartUpdate = async (cart_item, setCart, cart) => {
  try {
    const newArray = await cartFilter(cart_item, cart);
    setCart(newArray);
    localStorage.setItem("cart", JSON.stringify(newArray));
  } catch (error) {
    console.log(error);
  }
};
