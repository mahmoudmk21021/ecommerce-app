import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../Component/Loading/Loading";

export default function Brands() {
  const [brands, setBrands] = useState(null);
  async function getBrands() {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/brands",
        method: "GET",
      };
      let { data } = await axios.request(options);
      // console.log(data.data);
      setBrands(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getBrands();
  }, []);

  return (
    <>
      {brands ? (
        <section>
          <h2 className="font-bold text-3xl text-center text-primary">
            All Brands
          </h2>

          <div className="grid grid-cols-12 gap-5 pt-10 ">
            {brands.map((brands) => (
              <div
                key={brands._id}
                className=" mt-4 bg-green-300 border-red-500   col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-md shadow-lg hover:shadow-green-300"
              >
                <img src={brands.image} alt="" className="w-full " />
                <div>
                  <h4>{brands.name} </h4>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}
