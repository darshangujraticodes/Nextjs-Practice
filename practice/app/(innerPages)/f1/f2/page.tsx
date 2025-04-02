import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mt-8">
      <h1 className="text-4xl text-center ">F2 Folder</h1>
      <div className="text-center">
        <p className="text-center mt-4">
          <Link href="/f4"> F4 </Link>
        </p>

        <p className="text-center mt-4">
          <Link href="/f5"> F5 </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
