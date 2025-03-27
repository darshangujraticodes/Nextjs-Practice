import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="py-3">
      <div className="container">
        <div className="navbarWrap  flex justify-between items-center ">
          <div className="logoWrap">
            <Link href="/" className="">
              <h3 className="text-2xl">Logo</h3>
            </Link>
          </div>
          <div className="menuWrap flex ">
            <Link href="/" className=" py-2 px-3 ">
              Home
            </Link>
            <Link href="/about" className=" py-2 px-3 ">
              About
            </Link>
            <Link href="/contact" className="py-2 px-3">
              Contact
            </Link>
            <Link href="/products" className="py-2 px-3">
              Products
            </Link>
            <Link href="/blog" className="py-2 px-3">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
