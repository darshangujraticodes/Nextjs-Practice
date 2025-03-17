import FormBox from "@/app/components/FormBox";
import Link from "next/link";
import React from "react";

const registerPage = () => {
  return (
    <div className="mt-5">
      <h1 className="text-3xl  text-center ">Register Page</h1>
      <div className="container">
        <div>
          <FormBox type="register" />
        </div>
        <div className="mt-3">
          <Link className="" href="/login">
            {" "}
            Already a Member{" "}
          </Link>

          <div className="mt-3">
            <Link className="mt-3" href="/">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default registerPage;
