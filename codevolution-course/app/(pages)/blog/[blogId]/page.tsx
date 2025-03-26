"use client";

import Capitalize from "@/app/components/Capitalize";
import React from "react";
import { use } from "react";
// note to use useHook use() it can only be used in client side rendering

const blogInfoPage = ({
  params,
  searchParams,
}: {
  params: Promise<{ blogId: String }>;
  searchParams: Promise<{ lang?: "en" | "sp" | "fr" }>;
}) => {
  // usehook

  const { blogId } = use(params);
  const { lang } = use(searchParams);

  return (
    <div>
      <div className="container">
        <h1 className="text-center   text-3xl ">Single Blog Info Page </h1>
        <h2 className="text-2xl"> Blog Info {Capitalize(String(blogId))} </h2>
        <h2 className="text-xl"> Blog search Params {lang} </h2>
      </div>
    </div>
  );
};

export default blogInfoPage;
