"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { log } from "console";

const navLinkData = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  { id: 2, name: "About", url: "/about" },
  {
    id: 3,
    name: "Products",
    url: "/products",
  },
  {
    id: 4,
    name: "Review",
    url: "/products/kerala/review/awesome-place-must-visit",
  },
  { id: 5, name: "Blog", url: "/blog" },
  { id: 6, name: "Register", url: "/register" },
];

const NavbarSection = () => {
  const pathname = usePathname();
  // const isActive = pathname ===

  return (
    <header className=" py-4 bg-white sticky top-0  ">
      <nav>
        <div className="container ">
          <div className="flex  justify-between items-center ">
            <div></div>
            <div className="flex items-center ">
              {navLinkData.map((item, index) => {
                const isActive = pathname === item.url;

                return (
                  <Link
                    href={item.url}
                    key={item.id}
                    className={` ${
                      isActive
                        ? " bg-indigo-700 rounded-md text-white  "
                        : "   "
                    }  px-3 py-2   ml-3  font-medium
                        `}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarSection;
