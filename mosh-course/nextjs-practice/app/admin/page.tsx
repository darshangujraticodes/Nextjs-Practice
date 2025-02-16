import { Metadata } from "next";

import React from "react";

export const metadata = {
  title: "Admin Home Page ",
  description: "Learn more about Admin Page",
  openGraph: {
    title: "Admin Page - Next Js Practical",
    description: "Learn more about our Admin Page.",
    type: "website",
  },
};

const page = () => {
  return (
    <>
      <div>
        <h1 className="mt-5 text-3xl ">Admin Panel Main Section</h1>
      </div>
    </>
  );
};

export default page;
