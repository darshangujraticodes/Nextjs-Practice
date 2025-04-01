"use client";

import React from "react";

const ErrorButton = () => {
  const throwErrorHandle = () => {
    throw new Error("API Content Loading Issue");
  };
  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={throwErrorHandle}
        className="  bg-indigo-500 hover:bg-indigo-700 text-xl text-white  px-3 py-2 rounded-xl "
      >
        Throw Error
      </button>
    </div>
  );
};

export default ErrorButton;
