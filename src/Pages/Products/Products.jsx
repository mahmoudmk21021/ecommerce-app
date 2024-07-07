import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../Component/Loading/Loading";
import ProductCard from "./../../Component/ProductCard/ProductCard";

export default function Products() {
  const [products, setProducts] = useState(null);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  console.log(search);

  async function getAllProducts() {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/products",
        method: "GET",
      };
      let { data } = await axios.request(options);
      //   console.log(data.data);
      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllProducts();
  }, []);

  const filteredProducts =
    products && products.length > 0
      ? products.filter(
          (product) =>
            product &&
            product.name &&
            product.name.toLowerCase().includes(input.toLowerCase())
        )
      : [];

  return (
    <>
      <div className="products">
        <h2 className="font-bold text-3xl text-center text-primary mb-3">
          Products
        </h2>

        <div className="search flex justify-center items-center">
          <input
            className="form-control w-full"
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div className="grid grid-cols-12 gap-5 pt-10 mb-12 border-b-8">
          {products ? (
            products
              .filter((value) =>
                value?.title?.toLowerCase().includes(search.toLowerCase())
              )
              .map((product, index) => (
                <ProductCard key={index} productInfo={product} />
              ))
          ) : error ? (
            <div className="text-center">
              <h2>Error occurred while loading data</h2>
              <p>{error}</p>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>

      {/* {products == null ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-12 gap-5 pt-10">
          {products.map((product, index) => (
            <ProductCard key={index} productInfo={product} />
          ))}
        </div>
      )} */}
    </>
  );
}
