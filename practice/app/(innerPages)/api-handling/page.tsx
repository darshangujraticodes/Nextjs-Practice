import ClientApiCall from "@/app/Components/ClientApiCall";
import ServerApiCall from "@/app/Components/ServerApiCall";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mt-8 container">
      <h1 className="text-4xl text-center ">API Routes Handling in NextJS </h1>

      <div>
        <Link href="/userdata/api"> GET Request - all user </Link> <br />
        <Link href="/userdata/3"> GET Request - 5th user </Link>
      </div>

      <div className="mt-5">
        Clint Side API Calling : <br />
        <ClientApiCall />
      </div>

      <div className="mt-5">
        Server Side API Calling : <br />
        <ServerApiCall />
      </div>
    </div>
  );
};

export default page;
