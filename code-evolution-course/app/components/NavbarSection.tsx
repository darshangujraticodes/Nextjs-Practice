import Link from "next/link";
import React from "react";

const NavbarSection = () => {
  return (
    <nav className=" py-4  sticky top-0  ">
      <div className="container ">
        <div className="flex  justify-between items-center ">
          <div></div>
          <div className="flex items-center ">
            <Link href="/" className="ml-3">
              Home
            </Link>
            <Link href="/about" className="ml-3">
              About
            </Link>
            <Link href="/products/kerala/" className="ml-3">
              Products
            </Link>
            <Link
              href="/products/kerala/review/awesome-place-must-visit"
              className="ml-3"
            >
              Review
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSection;
