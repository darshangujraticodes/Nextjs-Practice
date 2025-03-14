"use client";

import { usePathname } from "next/navigation";
import React from "react";

const reviewNotFoundPage = () => {
  /*
  Note : notFound() does take props wo we cannot be able to print custom error message on 404 page
  to Solve this we can display custom error message using usePathname() hook
   

  chapter 4 : video : 42:49

  */
  const pathName = usePathname();
  const productId = pathName.split("/")[2];
  const reviewId = pathName.split("/")[4];

  return (
    <section className="">
      <div className="flex  h-[100vh] justify-center items-center ">
        <div>
          <h1 className="text-center  mb-3 text-3xl">
            404 | Review {reviewId} is not found for Product {productId}
          </h1>
          {/* <p className="text-center">Requested Page Does Not Exist!</p> */}
        </div>
      </div>
    </section>
  );
};

export default reviewNotFoundPage;
