"use client";

import React from "react";

function AddToCart() {
  return (
    <div className=" mt-3 flex justify-center">
      <button
        className="p-3 bg-gray-900 w-100  text-white rounded-lg"
        onClick={() => console.log("submit btn click ")}
      >
        Submit
      </button>
    </div>
  );
}

export default AddToCart;
