"use client";

import { log } from "console";
import { usePathname } from "next/navigation";
import React from "react";

const ReviewPageNotFound = () => {
  const path = usePathname();

  const productData = path.split("/")[2];
  const reviewData = path.split("/")[4];

  console.log(productData, reviewData);

  return (
    <section>
      <div className="container mt-8">
        <h1 className="text-4xl text-center capitalize ">
          {reviewData} Review is Not Found for Product {productData}
        </h1>
        <p className="text-center">custom review not Found Page</p>
      </div>
    </section>
  );
};

export default ReviewPageNotFound;
