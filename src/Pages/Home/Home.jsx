import React, { useEffect, useState } from "react";
import ProductCard from "../../Component/ProductCard/ProductCard";
import axios from "axios";
import Loading from "../../Component/Loading/Loading";
import HomeSlider from "../../Component/HomeSlider/HomeSlider";
import CategorySlider from "../../Component/CategorySlider/CategorySlider";
import { useQuery } from "@tanstack/react-query";
// import Loading from './../../Component/Loading/Loading';

export default function Home() {
  const [products, setProducts] = useState(null);
  async function getProducts() {
    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/products",
      method: "GET",
    };
    const { data } = await axios.request(options);
    // console.log(data);
    setProducts(data.data);
  }
  useEffect(() => {
    getProducts();
  }, []);

  // let {data, isLoading, isFetching, isError} = useQuery({

  //   queryKey : ["products"],
  //   queryFn : getProducts
  // })

  // console.log(data.data.data);

  // if(isLoading){
  //   return <Loading/>
  // }

  return (
    <>
      <HomeSlider />
      <CategorySlider />

      {products ? (
        <div className="grid grid-cols-12 gap-4">
          {products.map((product) => (
            <ProductCard productInfo={product} key={product._id} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
