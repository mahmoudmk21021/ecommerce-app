import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/Cart.context";
import { wishlistContext } from "../../Context/Wishlist.context";

export default function ProductCard({ productInfo }) {
  const { images, price, ratingsAverage, category, title, id } = productInfo;
  const { addProductToCart } = useContext(cartContext);
  const { addWishlistToCart } = useContext(wishlistContext);
  return (
    <>
      <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 shadow-lg rounded-md overflow-hidden ">
        <div className="relative">
          {" "}
          <img src={images[0]} className="w-full " alt="" />
          <div className="layer opacity-0 hover:opacity-100 transition-opacity duration-300 flex gap-2 items-center justify-center absolute w-full h-full left-0 top-0 bg-black bg-opacity-15">
            <div
              onClick={() => {
                addWishlistToCart({ id });
              }}
              className="icon cursor-pointer hover:scale-110 transition-transform duration-300 hover:rotate-6 w-10 h-10 rounded-full text-sm text-white flex justify-center items-center bg-primary"
            >
              <i className="fa-solid fa-heart"></i>
            </div>

            <div
              onClick={() => {
                addProductToCart({ id });
              }}
              className="icon cursor-pointer hover:scale-110 transition-transform duration-300 hover:rotate-6 w-10 h-10 rounded-full text-sm text-white flex justify-center items-center bg-primary"
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </div>

            <Link
              to={`/product/${id}`}
              className="icon cursor-pointer hover:scale-110 transition-transform duration-300 hover:rotate-6 w-10 h-10 rounded-full text-sm text-white flex justify-center items-center bg-primary"
            >
              <i className="fa-solid fa-eye"></i>
            </Link>
          </div>
        </div>

        <div className="p-3">
          <h3 className="text-primary">{category.name} </h3>
          <h2 className="text-lg font-semi line-clamp-2">{title} </h2>
          <div className="flex justify-between items-center mt-4">
            <span>{price} L.E</span>
            <div className="flex gap-1 items-center">
              <i className="fa-solid fa-star text-yellow-500 "></i>
              <span>{ratingsAverage}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
