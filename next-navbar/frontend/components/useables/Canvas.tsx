import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface MenuItem {
  name: string;
  image: string;
  href?: string;
  subcategory?: MenuItem[];
}

const Canvas: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [currentSubMenu, setCurrentSubMenu] = useState<number | null>(null);
  const [subMenuOpen, setSubMenuOpen] = useState<boolean>(false);

  const menuitems: MenuItem[] = [
    { name: "Home", image: "/ui-ux-services/Images/2.jpg", href: "/" },
    {
      name: "About Us",
      image: "/ui-ux-services/Images/b2.jpeg",
      href: "/about-us",
    },
    {
      name: "Projects",
      image: "/ui-ux-services/Images/b3.jpeg",
      href: "/projects",
    },
    { name: "Blogs", image: "/ui-ux-services/Images/3.jpg", href: "/blogs" },
    { name: "Career", image: "/ui-ux-services/Images/3.jpg", href: "/career" },
    { name: "News", image: "/ui-ux-services/Images/3.jpg", href: "/news" },
    { name: "Nri", image: "/ui-ux-services/Images/3.jpg", href: "/nri" },
    {
      name: "Contact Us",
      image: "/ui-ux-services/Images/3.jpg",
      href: "/contact",
    },
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setSubMenuOpen(false);
    setCurrentSubMenu(null);
  };

  const handleSubMenuOpen = (index: number) => {
    setSubMenuOpen(true);
    setCurrentSubMenu(index);
  };

  const handleGoBack = () => {
    setSubMenuOpen(false);
    setCurrentSubMenu(null);
  };

  const handleMenuItemClick = () => {
    // Close the menu when a menu item is clicked
    setIsOpen(false);
    setSubMenuOpen(false);
    setCurrentSubMenu(null);
  };

  useEffect(() => {
    const handleCloseCanvas = () => {
      if (isOpen) {
        setIsOpen(false);
        setSubMenuOpen(false);
        setCurrentSubMenu(null);
      }
    };

    if (isOpen) {
      window.addEventListener("scroll", handleCloseCanvas);
    }

    return () => {
      window.removeEventListener("scroll", handleCloseCanvas);
    };
  }, [isOpen]);

  const variants = {
    open: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    closed: {
      clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const slideFromTop = (delay: number) => ({
    open: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut", delay },
    },
    closed: {
      x: 255,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  });

  return (
    <div id="canvas" className="h-full flex items-center">
      {/* Toggle Button */}
      <div onClick={handleToggle} className="relative z-20">
        <div
          className={`toggle-btn cursor-pointer ${isOpen ? "active" : ""}`}
          onClick={handleToggle}
        >
          <button aria-label="Menu" className="menu-burger"></button>
          <p className="mont-regular menu-text uppercase text-[#420516] md:block hidden">
            Menu
          </p>
        </div>
      </div>

      {/* Canvas Menu */}
      <motion.div
        className="fixed top-0 w-full h-full bg-[#420516] backdrop-blur-sm backdrop-blur-lg overlay left-0 z-10 h-screen "
        variants={variants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <div className="p-4 text-white h-[100vh] z-20 flex item-start justify-start flex-col">
          <div className="relative mt-[100px] ms-[10%]">
            {subMenuOpen ? (
              <div>
                <motion.button
                  className="flex items-center text-white mb-4"
                  onClick={handleGoBack}
                  variants={slideFromTop(0.1)}
                  initial="closed"
                  animate={isOpen ? "open" : "closed"}
                >
                  <span className="mr-2">&larr;</span> Go Back
                </motion.button>
                {menuitems[currentSubMenu!]?.subcategory?.map(
                  (subItem, subIndex) => (
                    <motion.div
                      key={subIndex}
                      className="py-2"
                      variants={slideFromTop(0.1 * subIndex)}
                      initial="closed"
                      animate={isOpen ? "open" : "closed"}
                      onClick={handleMenuItemClick} // Close menu on click
                    >
                      <Link
                        href={subItem.href!}
                        className=" text-start canvas-text leading-tight ValkyRegular"
                      >
                        {subItem.name}
                      </Link>
                    </motion.div>
                  )
                )}
              </div>
            ) : (
              menuitems.map((item, index) => (
                <motion.div
                  key={index}
                  className="py-2"
                  variants={slideFromTop(0.1 * index)}
                  initial="closed"
                  animate={isOpen ? "open" : "closed"}
                  onClick={() => {
                    if (item.subcategory) handleSubMenuOpen(index);
                    else handleMenuItemClick(); // Close menu if no submenu
                  }}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="ValkyRegular canvas-text text-start leading-tight"
                      onClick={handleMenuItemClick} // Close menu on click
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span>{item.name}</span>
                  )}
                </motion.div>
              ))
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Canvas;
