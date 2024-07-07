import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../Component/Loading/Loading";

export default function Categories() {
  const [Categories, setCategories] = useState(null);
  const [SubCategories, setSubCategories] = useState(null);
  const [catName, setCatName] = useState("");

  async function getCategories() {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/categories",
        method: "GET",
      };
      let { data } = await axios.request(options);
      // console.log(data.data);
      setCategories(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  // getCategories();
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      {Categories ? (
        <section>
          <h2 className="font-bold text-3xl text-center text-primary">
            Categories
          </h2>
          <div className="grid grid-cols-12 gap-2  ">
            {Categories.map((category) => (
              <div
                key={Categories._id}
                className=" mt-4 bg-green-300 border-red-500   col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-md shadow-lg hover:shadow-green-300"
              >
                <img
                  src={category.image}
                  alt=""
                  className="w-full object-cover h-96  "
                />

                <h3 className="font-bold text-center p-3 cursor-pointer ">
                  {category.name}{" "}
                </h3>
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
