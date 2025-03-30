"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const link = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "About",
      href: "/about",
    },
    // {
    //   id: 3,
    //   name: "Contact",
    //   href: "/contact",
    // },
    {
      id: 4,
      name: "Products",
      href: "/products",
    },
    {
      id: 5,
      name: "Blog",
      href: "/blog",
    },
    {
      id: 6,
      name: "Login",
      href: "/login",
    },
  ];

  const pathname = usePathname();

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
            {link?.map((item) => {
              const isActive =
                item.href === pathname ||
                (pathname.startsWith(item.href) && item.href !== "/");

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`  ${
                    isActive ? " bg-indigo-500 text-white " : ""
                  }  py-2 px-3  rounded-xl font-semibold `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
