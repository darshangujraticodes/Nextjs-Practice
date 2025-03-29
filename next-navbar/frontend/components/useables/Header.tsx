import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Canvas from "./Canvas";
// import Canvas from "./Canvas";

const Header: React.FC = () => {
  const [scrollingUp, setScrollingUp] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const handleScroll = (): void => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 500) {
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollingUp(false); // Scrolling down
      } else {
        setScrollingUp(true); // Scrolling up
      }
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 w-full h-auto transition-all duration-300 z-50 shadow-md header bg-[#FFFFFF] backdrop-blur-lg ${
          scrollingUp ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ opacity: 0.83 }}
      >
        <div className="mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex justify-center items-center w-full py-3 relative">
              <div className="absolute top-0 left-0 h-full w-fit ">
                <Canvas />
              </div>

              <div className="xl:w-12/12 lg:w-12/12 md:w-12/12 sm:w-12/12 text-center logo-div">
                <Link
                  href="/"
                  className="mt-2 text-center dark-div w-full m-auto md:block hidden"
                >
                  <Image
                    height={100}
                    width={150}
                    src="/images/logo.webp"
                    alt="logo"
                    className="max-w-full h-auto text-center m-auto "
                  />
                </Link>
                <Link
                  href="/"
                  className="mt-2 text-center dark-div w-full m-auto md:hidden block"
                >
                  <Image
                    height={80}
                    width={100}
                    src="/images/logo.webp"
                    alt="logo"
                    className="max-w-full h-auto text-center m-auto "
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
