"use client";

import { log } from "console";
import { Linden_Hill } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import React from "react";

const page = () => {
  return (
    <div className="  container  ">
      <p className="mt-5">
        <Link className="" href="/">
          Home
        </Link>
      </p>
      <h1 className="text-4xl text-center ">Login Page</h1>
      <form></form>

      <p className="text-center  mt-8">
        <Link href="/register"> Sign Up </Link> <br />
      </p>

      <p className="text-center  mt-8">
        Script Component : To Execute Script but for this specific Page only not
        for all so it is implemented through Script Component
      </p>

      <div>
        {/* Note script component does not work for Typescript it will treat as meme file and wheere the script component is used should in in client side rendering */}
        <Script
          src="/FeatureScript.js"
          onLoad={() => {
            console.log("Script Component Executed!");
          }}
          async
        />
      </div>
    </div>
  );
};

export default page;
