"use client";

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-8">
      <h1 className="text-4xl text-center ">Counter : {count}</h1>

      <div className="  flex justify-center mt-4 ">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-indigo-500  mx-3  font-semibold  text-white px-3 py-2 rounded "
        >
          Click to Add 1
        </button>

        <button
          onClick={() => setCount(0)}
          className="bg-indigo-500  font-semibold  text-white px-3 py-2 rounded "
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
