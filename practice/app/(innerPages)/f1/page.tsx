import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mt-8">
      <h1 className="text-4xl text-center ">F1 Folder</h1>
      <div className="">
        <div className="text-center">
          <p className="text-center mt-4">
            <Link href="/f1/f2"> F2 Page </Link>
          </p>

          <p className="text-center mt-4">
            <Link href="/f3"> F3 Page </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
