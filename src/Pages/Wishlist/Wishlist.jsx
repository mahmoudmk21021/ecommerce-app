import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { wishlistContext } from "../../Context/Wishlist.context";
import Loading from "../../Component/Loading/Loading";
import { cartContext } from "../../Context/Cart.context";

export default function Wishlist() {
  const { getWishlistInfo, wishlistInfo, removeWishlistFromCart } =
    useContext(wishlistContext);

  const { addProductToCart } = useContext(cartContext);

  useEffect(() => {
    getWishlistInfo();
  }, []);

  return (
    <>
      {wishlistInfo === null ? (
        <Loading />
      ) : (
        <section className="bg-slate-100 p-5">
          <h2 className="text-lg font-bold mb-2">
            <span> Wish List</span>
          </h2>

          {wishlistInfo.data.length == 0 ? (
            <div className="py-16 flex justify-center items-center flex-col ">
              <h3>There are not items yet.</h3>
              <Link to="/" className="bg-primary mt-2 text-sm rounded ">
                ADD YOUR FRIST PRODUCT TO wishlist
              </Link>
            </div>
          ) : (
            <>
              {wishlistInfo.data.map((product) => (
                <div
                  key={product.id}
                  className="wishlist grid grid-cols-12 gap-5"
                >
                  <div className="col-span-1">
                    <img src={product.imageCover} className="w-full" />
                  </div>

                  <div className="col-span-11 flex justify-between items-center p-3">
                    <div>
                      <h3 className="font-semibold">{product.title}</h3>
                      <h4 className="text-primary">{product.price} L.E</h4>
                      <button
                        onClick={() => {
                          removeWishlistFromCart({ id: product.id });
                        }}
                        className="btn-primary bg-red-500 text-sm mt-3"
                      >
                        <i className="fa-solid fa-trash-can mr-3 mt-2 "></i>
                        remove
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          addProductToCart({ id: product.id });
                        }}
                        className="btn-primary"
                      >
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </section>
      )}
    </>
  );
}
