import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideFromLeft,
  slideFromRight,
  zoomIn,
} from "../useables/variants";

type TabNames = "Ongoing" | "Completed" | "Upcoming";

const allImages: Record<
  TabNames,
  { image: string; location: string; name: string }[]
> = {
  Ongoing: [
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 1",
      name: "Project Name 1",
    },
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 2",
      name: "Project Name 2",
    },
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 3",
      name: "Project Name 3",
    },
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 4",
      name: "Project Name 4",
    },
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 5",
      name: "Project Name 5",
    },
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 6",
      name: "Project Name 6",
    },
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 7",
      name: "Project Name 7",
    },
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 8",
      name: "Project Name 8",
    },
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 9",
      name: "Project Name 9",
    },
  ],
  Completed: [
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 1",
      name: "Project Name 1",
    },
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 2",
      name: "Project Name 2",
    },
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 3",
      name: "Project Name 3",
    },
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 4",
      name: "Project Name 4",
    },
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 5",
      name: "Project Name 5",
    },
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 6",
      name: "Project Name 6",
    },
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 7",
      name: "Project Name 7",
    },
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 8",
      name: "Project Name 8",
    },
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 9",
      name: "Project Name 9",
    },
  ],
  Upcoming: [
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 1",
      name: "Project Name 1",
    },
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 2",
      name: "Project Name 2",
    },
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 3",
      name: "Project Name 3",
    },
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 4",
      name: "Project Name 4",
    },
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 5",
      name: "Project Name 5",
    },
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 6",
      name: "Project Name 6",
    },
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 7",
      name: "Project Name 7",
    },
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 8",
      name: "Project Name 8",
    },
    {
      image: "/images/project-listing/1.jpg",
      location: "Location 9",
      name: "Project Name 9",
    },
  ],
};

const ListingProject: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabNames>("Ongoing");
  const images = allImages[activeTab];
  const tabs: TabNames[] = ["Ongoing", "Completed", "Upcoming"];

  return (
    <>
      <section className="padding3">
        <div className="cust-container-5">
          <div className="flex justify-between  md:justify-center md:items-center lg:items-center flex-col md:flex-row lg:flex-row">
            <div className="text-center">
              <motion.div
                variants={slideFromLeft(0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
                className="mx-auto"
              >
                <h2 className="font-normal ValkyRegular text-[30px] lg:text-[4.1667vw] text-left text-[#420516] w-[100%] md:w-[24.583vw] lg:w-[24.583vw]">
                  Our Projects
                </h2>
              </motion.div>
              <div className="underline3"></div>
            </div>

            <div className="w-full flex justify-start md:justify-end lg:justify-end gap-[4vw] md:gap-[2.3vw] lg:gap-[1.3vw]">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`border-[1px] w-[22vw] h-[8vw] md:w-[12.135vw] md:h-[3.917vw] lg:w-[7.135vw] lg:h-[2.917vw] ValkyRegular text-[12px] lg:text-[0.833vw] mt-[4vw] md:mt-0 lg:mt-0 font-normal leading-[2.083vw] ${
                    activeTab === tab
                      ? "bg-[#420516] text-white border-[#420516]"
                      : "bg-[rgba(255, 246, 231, 1)] text-[#420516] border-[#420516]"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[4.479vw] mt-8">
            {images.map((project, index) => (
              <div key={index} className="relative group overflow-hidden ">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#420516] bg-opacity-65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
                  <p className="text-white text-[14px] lg:text-[1.042vw] uppercase mont-regular font-normal mb-[3vw] md:mb-[1.2vw] lg:mb-[0.625vw]">
                    {project.location}
                  </p>
                  <h3 className="text-white ValkyRegular text-[14px] lg:text-[1.458vw] capitalize font-normal mb-[2vw] md:mb-[0.625vw] lg:mb-[0.625vw]">
                    {project.name}
                  </h3>
                  <div className="w-[30%] h-px bg-white mb-[2vw] lg:mb-[0.95vw]"></div>
                  <Link href="/projects/sharvani">
                    <button className="text-[#fff] border px-[0.732vw] py-[0.784vw] text-[14px] lg:text-[0.941vw] w-[30vw] h-[9vw] mt-[3vw] md:mt-[1vw] lg:mt-[0vw] md:w-[13.154vw] md:h-[4.927vw] lg:w-[8.154vw] lg:h-[2.927vw] capitalize font-normal hover:bg-red-500 hover:text-white transition-colors duration-300 leading-[1.359vw]">
                      View More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ListingProject;
