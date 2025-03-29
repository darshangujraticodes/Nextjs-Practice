import { Linden_Hill } from "next/font/google";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: " Login Page | Next JS Static Metadata Export ",
  description:
    "  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. A animi voluptatibus quaerat culpa ab quasi. ",
};

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
    </div>
  );
};

export default page;
