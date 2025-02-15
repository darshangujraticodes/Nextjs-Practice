import { log } from "node:console";
import React from "react";
import AddToCart from "./AddToCart";
import ProductCard from "./ProductCard";

const ProductCardInfo = () => {
  return (
    <>
      <div className="mt-5 border p-3 rounded-lg w-[250px] ">
        <p className="text-3xl text-center">Title</p>

        <p className="text-center">Description</p>

        <form action="" className="hidden ">
          <div className="mt-2">
            <input
              type="text"
              className=" p-2 text-2xl border"
              placeholder="Enter username"
            />
          </div>

          <div className="mt-2">
            <input
              type="text"
              className="p-2 text-2xl border"
              placeholder="Enter Password"
            />
          </div>
        </form>

        <AddToCart />
      </div>

      {/* <ProductCard /> */}
    </>
  );
};

export default ProductCardInfo;
