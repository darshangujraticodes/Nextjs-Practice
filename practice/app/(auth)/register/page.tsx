import Link from "next/link";
import React from "react";

export const metadata = {
  title: " Register Page | Next JS Static Metadata Export ",
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
      <h1 className="text-4xl text-center ">Register Page</h1>
      <form></form>

      <p className="text-center  mt-8">
        <Link href="/login"> Sign In </Link> <br />
      </p>
    </div>
  );
};

export default page;
