import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mt-8">
      <h1 className="text-4xl text-center ">API Routes Handling in NextJS </h1>

      <div>
        <Link href="/userdata/api"> GET Request - all user </Link>
        <Link href="/userdata/3"> GET Request - 5th user </Link>
      </div>
    </div>
  );
};

export default page;
