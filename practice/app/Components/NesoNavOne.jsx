"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const NesoNavOne = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Computer Science");
  const menuRef = useRef(null);

  const courseSections = [
    {
      name: "Computer Science",
      links: [
        "Algorithms",
        "Data Structures",
        "Operating Systems",
        "dsdas",
        "dsdsdas",
        "dasdsa dee",
        "ds334234",
        "ds sdkjb d fdsfkdh",
      ],
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="text-black bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <Link href="/">
            {/* <span className="text-2xl font-bold text-blue-600">Mega Menu</span> */}
          </Link>

          <div className="hidden md:flex space-x-6 items-center">
            <div className="relative" ref={menuRef}>
              <button
                className="flex items-center hover:text-blue-600"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Courses <span className="ml-1">▼</span>
              </button>
              {dropdownOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white shadow-lg rounded-md p-4 flex border">
                  {/* Left Side - Menu Topics */}
                  <div className="w-1/4 border-r pr-4">
                    {courseSections.map((section, index) => (
                      <div
                        key={index}
                        className={`cursor-pointer py-2 px-4 ${
                          activeSection === section.name ? "bg-blue-100" : ""
                        }`}
                        onClick={() => setActiveSection(section.name)}
                      >
                        {section.name}
                      </div>
                    ))}
                  </div>

                  {/* Right Side - Submenu based on selection */}
                  <div className="w-3/4 pl-4">
                    <h3 className="font-semibold text-gray-700 border-b pb-1 mb-2">
                      {activeSection}
                    </h3>
                    <ul>
                      {courseSections
                        .find((section) => section.name === activeSection)
                        ?.links.map((link, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={`/courses/${link
                                .toLowerCase()
                                .replace(/ /g, "-")}`}
                              className="block py-1 text-gray-600 hover:text-blue-600 whitespace-nowrap"
                            >
                              {link}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
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
        </div>
      </div>
    </nav>
  );
};

export default NesoNavOne;
