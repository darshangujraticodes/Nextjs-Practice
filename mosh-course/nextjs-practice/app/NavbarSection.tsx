import Link from "next/link";
import React from "react";

const NavbarSection = () => {
  return (
    <nav className="pr-5 bg-slate-800 sticky top-0">
      <div className="flex">
        <Link href="/" className="text-2xl text-white p-3 rounded-lg  mx-3 ">
          Home
        </Link>
        <Link
          href="/users"
          className="text-2xl text-white p-3 rounded-lg  mx-3 "
        >
          User
        </Link>

        <Link
          href="/admin"
          className="text-2xl text-white p-3 rounded-lg  mx-3 "
        >
          Admin
        </Link>

        <Link
          href="/products"
          className="text-2xl text-white p-3 rounded-lg  mx-3 "
        >
          Products
        </Link>

        <Link
          href="/users/login"
          className="text-2xl text-white p-3 rounded-lg  mx-3 "
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default NavbarSection;
