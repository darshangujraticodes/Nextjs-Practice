"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ClickNavigation = () => {
  const router = useRouter();

  const handleClick = (type: String) => {
    console.log("Place Order Successfully");
    if (type === "push") router.push("/order-success");
    else if (type === "replace") router.replace("/order-success");
    else router.push("/");
  };

  return (
    <section>
      <div className="container">
        <h2 className="text-center text-3xl mt-5 ">
          onCLick Navigation : Programtical Navigation
        </h2>
        <p className="text-center">(useRouter() hook)</p>
        <div className="mt-3  flex justify-center  ">
          <button
            onClick={() => handleClick("push")}
            className="bg-indigo-500 text-xl text-white px-3 py-2  rounded-xl  "
          >
            Place My Order pushType
          </button>

          <button
            onClick={() => handleClick("replace")}
            className="bg-indigo-500 text-xl text-white px-3 py-2  rounded-xl  ml-4 "
          >
            Place My Order replaceType
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClickNavigation;
