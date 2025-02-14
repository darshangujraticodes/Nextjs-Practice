import Link from "next/link";
import React from "react";

const NewUserLogin = () => {
  return (
    <>
      <div>
        <h2 className=" capitalize font-medium text-3xl text-center mt-5">
          New User Login Authentication Page
        </h2>

        <div className="navBtnWrap  flex justify-center  mt-5 items-center ">
          <Link
            href="/"
            className=" bg-stone-800 text-white p-3 rounded-lg mx-3 font-semibold text-xl "
          >
            Return Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewUserLogin;
