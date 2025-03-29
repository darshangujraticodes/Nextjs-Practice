import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import Svg from "../useables/Svg";
import Heading from "../useables/Heading";

const HomeAchive: React.FC = () => {
  const sectionRef = useRef(null);
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  useLayoutEffect(() => {
    let ScrollTrigger: any;
    (async () => {
      try {
        // Dynamically import ScrollTrigger
        const scrollTriggerModule = await import("gsap/ScrollTrigger");
        ScrollTrigger = scrollTriggerModule.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        console.log("ScrollTrigger imported and registered:", ScrollTrigger);

        // Create GSAP timeline with smoother animations
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=200%",
            scrub: 1, // Smooth scrub effect
            pin: true, // Pin the section
            markers: false,
          },
        });

        // Text animation: Animate from right to left with smooth easing
        tl.fromTo(
          ref.current,
          { y: "100%", opacity: 0 },
          { y: 0, opacity: 1, duration: 1.5, ease: "power1.out" }
        )
          .fromTo(
            ref1.current,
            { y: "100%", opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: "power1.out" },
            "-=1" // Overlap the animations slightly
          )
          .fromTo(
            ref2.current,
            { y: "100%", opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: "power1.out" },
            "-=1" // Overlap the animations slightly
          )
          .fromTo(
            ref3.current,
            { y: "100%", opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: "power1.out" },
            "-=1"
          )
          .fromTo(
            ref4.current,
            { y: "100%", opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: "power1.out" },
            "-=1"
          );
      } catch (error) {
        console.error("Failed to import ScrollTrigger:", error);
      }
    })();

    // Cleanup function to kill animations on component unmount
    return () => {
      if (ScrollTrigger && typeof ScrollTrigger.kill === "function") {
        ScrollTrigger.kill();
        console.log("ScrollTrigger killed successfully.");
      } else {
        console.error(
          "ScrollTrigger.kill is not a function or ScrollTrigger is not defined."
        );
      }
    };
  }, []);

  return (
    <>
      <section
        className="sec-padding bg-[#420516] overflow-hidden h-[100vh]"
        ref={sectionRef}
      >
        <div className="flex justify-center items-center">
          <Heading
            align="center"
            theme="dark"
            heading="Achievements"
            subHeading=""
            linewidth="25%"
          />
        </div>

        <div className="xl:w-[80%] lg:w-[90%] m-auto flex justify-center mt-[50px] relative achive-div lg:h-auto md:h-[80%] h-[85%]">
          <div
            className="div1 absolute top-0 left-[5%]  sm:w-[25%] w-[50%]"
            ref={ref1}
          >
            <div className="flex items-center gap-4 justify-start">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="24"
                  height="24"
                  rx="12"
                  fill="#FFBB6D"
                  fill-opacity="0.23"
                />
                <circle cx="12" cy="12" r="6" fill="#E7A963" />
              </svg>
              <h2 className="ValkyRegular tracking-wide text-[#FFBB6D]">
                17 Years
              </h2>
            </div>
            <p className="tracking-wide mont-regular text-[#FEF8F1] ps-[35px]">
              OF EXCELLENCE
            </p>
          </div>

          <div
            className="div2 absolute sm:bottom-[30%] bottom-0 left-[5%] sm:w-[25%] w-[50%]"
            ref={ref2}
          >
            <div className="flex items-center gap-4 justify-start">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="24"
                  height="24"
                  rx="12"
                  fill="#FFBB6D"
                  fill-opacity="0.23"
                />
                <circle cx="12" cy="12" r="6" fill="#E7A963" />
              </svg>
              <h2 className="ValkyRegular tracking-wide text-[#FFBB6D]">
                35.13 Million
              </h2>
            </div>
            <p className="tracking-wide mont-regular text-[#FEF8F1] ps-[35px]">
              SQFT PORTFOLIO
            </p>
          </div>

          <div
            className="div3 absolute sm:bottom-[15%] bottom-0 right-0 sm:w-[25%] w-[50%]"
            ref={ref3}
          >
            <div className="flex items-center gap-4 justify-start">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="24"
                  height="24"
                  rx="12"
                  fill="#FFBB6D"
                  fill-opacity="0.23"
                />
                <circle cx="12" cy="12" r="6" fill="#E7A963" />
              </svg>
              <h2 className="ValkyRegular tracking-wide text-[#FFBB6D]">
                12000
              </h2>
            </div>
            <p className="tracking-wide mont-regular text-[#FEF8F1] ps-[35px]">
              HAPPY RESIDENTS
            </p>
          </div>

          <div
            className="div4 absolute sm:top-[20%] top-0 right-0 sm:w-[25%] w-[50%]"
            ref={ref4}
          >
            <div className="flex items-center gap-4 justify-start">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="24"
                  height="24"
                  rx="12"
                  fill="#FFBB6D"
                  fill-opacity="0.23"
                />
                <circle cx="12" cy="12" r="6" fill="#E7A963" />
              </svg>
              <h2 className="ValkyRegular tracking-wide text-[#FFBB6D]">15</h2>
            </div>
            <p className="tracking-wide mont-regular text-[#FEF8F1] ps-[35px]">
              PROJECTS
            </p>
          </div>
          <div className="flex md:items-center  items-center h-full" ref={ref}>
            <Svg />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAchive;
