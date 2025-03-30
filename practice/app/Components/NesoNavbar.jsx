"use client";

import { useState } from "react";
import Link from "next/link";

const NesoNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(null);

  const courseSections = [
    {
      name: "Computer Science",
      links: ["Algorithms", "Data Structures", "Operating Systems"],
    },
    { name: "Programming Languages", links: ["C", "C++", "Python", "Java"] },
    {
      name: "Electrical Engineering",
      links: ["Digital Logic", "Microprocessors", "Circuits"],
    },
    {
      name: "Mathematics",
      links: ["Discrete Math", "Linear Algebra", "Probability"],
    },
    { name: "GATE Preparation", links: ["CS", "ECE", "EEE"] },
  ];

  return (
    <nav className="bg-white  text-black  shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <span className="text-2xl font-bold text-blue-600">
              Neso Academy
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center hover:text-blue-600"
              >
                Courses <span className="ml-1">▼</span>
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-md rounded-md py-2">
                  {courseSections.map((section, index) => (
                    <div key={index} className="group">
                      <button
                        onClick={() =>
                          setSubMenuOpen(subMenuOpen === index ? null : index)
                        }
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between"
                      >
                        {section.name} <span className="ml-1">▶</span>
                      </button>
                      {subMenuOpen === index && (
                        <div className="ml-4 bg-gray-50 border-l border-gray-200 py-1">
                          {section.links.map((link, subIndex) => (
                            <Link
                              key={subIndex}
                              href={`/courses/${link
                                .toLowerCase()
                                .replace(/ /g, "-")}`}
                              className="block px-4 py-1 hover:bg-gray-200"
                            >
                              {link}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
            <Link href="/blog" className="hover:text-blue-600">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-sm p-4 transition-all duration-300 ease-in-out">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center w-full py-2 hover:text-blue-600"
            >
              Courses <span className="ml-1">▼</span>
            </button>
            {dropdownOpen && (
              <div className="mt-2 bg-white shadow-md rounded-md py-2">
                {courseSections.map((section, index) => (
                  <div key={index}>
                    <button
                      onClick={() =>
                        setSubMenuOpen(subMenuOpen === index ? null : index)
                      }
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between"
                    >
                      {section.name} <span className="ml-1">▶</span>
                    </button>
                    {subMenuOpen === index && (
                      <div className="ml-4 bg-gray-50 border-l border-gray-200 py-1">
                        {section.links.map((link, subIndex) => (
                          <Link
                            key={subIndex}
                            href={`/courses/${link
                              .toLowerCase()
                              .replace(/ /g, "-")}`}
                            className="block px-4 py-1 hover:bg-gray-200"
                          >
                            {link}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link href="/about" className="block py-2 hover:text-blue-600">
            About
          </Link>
          <Link href="/blog" className="block py-2 hover:text-blue-600">
            Blog
          </Link>
          <Link href="/contact" className="block py-2 hover:text-blue-600">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NesoNavbar;
