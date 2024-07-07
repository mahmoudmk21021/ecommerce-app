import axios from "axios";
import { createContext, useContext, useState } from "react";
import { userContext } from "./User.Context";
import toast from "react-hot-toast";

export const wishlistContext = createContext(null);
export default function WishlistProvider({ children }) {
  const [wishlistInfo, setWishlistInfo] = useState(null);
  const { token } = useContext(userContext);

  async function getWishlistInfo() {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/wishlist",
        method: "GET",
        headers: { token },
      };
      let { data } = await axios.request(options);
      console.log(data);
      // setWishlistInfo(data);

      if (data.length == 0) {
        setWishlistInfo([]);
      } else {
        setWishlistInfo(data);
      }
    } catch (error) {
      console.log(error);
      if (
        error.data.message.incloudes(
          "Product removed successfully to your wishlist"
        )
      ) {
        setWishlistInfo([]);
      }
    }
  }

  async function addWishlistToCart({ id }) {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/wishlist",
        method: "POST",
        headers: {
          token,
        },
        data: {
          productId: id,
        },
      };
      let { data } = await axios.request(options);
      toast.success("Product added successfully to your wishlist");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function removeWishlistFromCart({ id }) {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
        method: "DELETE",
        headers: {
          token,
        },
      };
      let { data } = await axios.request(options);
      setWishlistInfo(data);
      toast.success("Product remove from your wishlist");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <wishlistContext.Provider
      value={{
        addWishlistToCart,
        getWishlistInfo,
        wishlistInfo,
        removeWishlistFromCart,
      }}
    >
      {children}
    </wishlistContext.Provider>
  );
}
