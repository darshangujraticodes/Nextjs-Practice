"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const NewUserLogin = () => {
  const router = useRouter();

  return (
    <>
      <div>
        {/* <h2 className=" capitalize font-medium text-3xl text-center mt-5">
          New User Login Authentication Page
        </h2> */}

        <div className="navBtnWrap  flex justify-center  mt-5 items-center ">
          <div>
            <button
              className="btn btn-neutral"
              onClick={() => router.push("/users")}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewUserLogin;
