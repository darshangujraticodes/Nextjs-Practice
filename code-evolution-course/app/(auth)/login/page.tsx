import FormBox from "@/app/components/FormBox";
import Link from "next/link";
import React from "react";

const loginPage = () => {
  return (
    <div className="mt-5">
      <h1 className="text-3xl  text-center ">Login Page</h1>
      <div className="container">
        <div>
          <FormBox type="login" />
        </div>
        <div className="mt-3">
          <Link className="" href="/login">
            Register
          </Link>
        </div>

        <div className="mt-3">
          <Link className="mt-3" href="/">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
