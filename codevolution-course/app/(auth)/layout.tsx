"use client";
import React, { useState } from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [ltInputData, setLtInputData] = useState("");

  return (
    <section className="container">
      <div>{children}</div>
      <div>
        <form action="">
          <input
            type="text"
            onChange={(e) => setLtInputData(e.target.value)}
            value={ltInputData}
            className="border rounded-md mt-5 px-3 py-2 w-[370px]  "
            placeholder="layout.tsx input tag Enter Value "
          />
        </form>
      </div>
    </section>
  );
};

export default layout;
