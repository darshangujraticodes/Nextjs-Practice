import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";



interface Image {
  src: string;
  title: string;
  description: string;
}

const images: Image[] = [
  {
    src: "/images/AboutUs/mission.jpg",
    title: "Our Vision",
    description:
      "To become the most trusted, innovative, and seamless digital platform, transforming the real estate experience for buyers, sellers, and investors.",
  },
  {
    src: "/images/AboutUs/mission.jpg",
    title: "Our Mission",
    description: "Our mission description goes here.",
  },
  {
    src: "/images/AboutUs/mission.jpg",
    title: "Our Values",
    description: "Our values description goes here.",
  },
];

const AboutMission: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const smallImageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const centerImageRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let gsap;
    let ScrollTriggerPlugin;

    (async () => {
      gsap = (await import("gsap")).default;
      ScrollTriggerPlugin = (await import("gsap/ScrollTrigger")).ScrollTrigger;
      gsap.registerPlugin(ScrollTriggerPlugin);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom+=200%",
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const newIndex = Math.min(
              Math.floor(progress * (images.length - 1)),
              images.length - 1
            );
            if (newIndex !== activeIndex) {
              setActiveIndex(newIndex);
            }
          },
        },
      });

      images.forEach((image, index) => {
        tl.to(
          centerImageRef.current,
          {
            backgroundImage: `url(${image.src})`,
            scale: 1,
            x: 0,
            y: 0,
            duration: 1,
            ease: "power4.out",
          },
          index
        );
      });
    })();
  }, []);

  useEffect(() => {
    smallImageRefs.current.forEach((el, i) => {
      if (el) {
        el.classList.toggle("ring-4", i === activeIndex);
        el.classList.toggle("ring-offset-2", i === activeIndex);
      }
    });
    lineRefs.current.forEach((el, i) => {
      if (el) {
        el.classList.toggle("w-16", i === activeIndex);
        el.classList.toggle("bg-black", i === activeIndex);
      }
    });
  }, [activeIndex]);

  return (
    <section
      className="relative flex h-[200vh] bg-gray-100 p-10vw overflow-hidden"
      ref={sectionRef}
    >
      {/* Left Side Panel */}
      <div className="fixed top-1/4 left-5 space-y-6">
        {images.map((image, index) => (
          <div key={index} className="flex  space-x-4">
            <div
              ref={(el) => {smallImageRefs.current[index] = el}}
              className="w-12 h-12 bg-cover bg-center rounded-md transition-transform duration-500"
              style={{ backgroundImage: `url(${image.src})` }}
            ></div>
            <div
              ref={(el) => {lineRefs.current[index] = el}}
              className="h-[2px] w-8 bg-gray-300 transition-all duration-500"
            ></div>
          </div>
        ))}
      </div>

      {/* Center Image and Content */}
      <div className="flex flex-row justify-center items-center w-full h-[100%] p-10">
        <div
          ref={centerImageRef}
          className="w-[70%] h-[100vh] bg-cover bg-center rounded-lg transition-transform duration-700"
          style={{ backgroundImage: `url(${images[activeIndex].src})` }}
        ></div>
        <div className="text-center ml-10">
          <h2 className="text-4xl font-bold">{images[activeIndex].title}</h2>
          <p className="text-lg mt-4">{images[activeIndex].description}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
