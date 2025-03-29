import Image from "next/image";
import React from "react";
import {
  fadeIn,
  slideFromLeft,
  slideFromRight,
  zoomIn,
} from "../useables/variants";
import { motion } from "framer-motion";

const newsData = [
  {
    id: 1,
    image: "/images/project-listing/1.jpg",
    category: "Category",
    heading: "Lorem ipsum dolor",
    subheading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    minsread: "5 min read",
    btntext: "Read More",
  },
  {
    id: 2,
    image: "/images/project-listing/1.jpg",
    category: "Category",
    heading: "Lorem ipsum dolor",
    subheading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    minsread: "5 min read",
    btntext: "Read More",
  },
  {
    id: 3,
    image: "/images/project-listing/1.jpg",
    category: "Category",
    heading: "Lorem ipsum dolor",
    subheading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    minsread: "5 min read",
    btntext: "Read More",
  },
  {
    id: 4,
    image: "/images/project-listing/1.jpg",
    category: "Category",
    heading: "Lorem ipsum dolor",
    subheading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    minsread: "5 min read",
    btntext: "Read More",
  },
  {
    id: 5,
    image: "/images/project-listing/1.jpg",
    category: "Category",
    heading: "Lorem ipsum dolor",
    subheading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    minsread: "5 min read",
    btntext: "Read More",
  },
  {
    id: 6,
    image: "/images/project-listing/1.jpg",
    category: "Category",
    heading: "Lorem ipsum dolor",
    subheading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    minsread: "5 min read",
    btntext: "Read More",
  },
];

const NewsBoxes: React.FC = () => {
  return (
    <>
      <section className="padding3 bg-amenity-background">
        <div className="cust-container-6">
          <div className="text-center">
            <motion.div
              variants={zoomIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="mx-auto"
            >
              <h2 className="font-normal ValkyRegular text-[30px] lg:text-[4.1667vw] text-center text-[#420516] ">
                News and events
              </h2>
            </motion.div>
            <div className="underline5 text-center"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[1.092vw] mt-[3.5vw]">
            {newsData.length > 0 &&
              newsData.map((item, index) => (
                <div
                  className="relative group overflow-hidden w-[100%] lg:w-[30.792vw] mb-[2vw]"
                  key={index}
                >
                  <Image
                    src={item?.image}
                    width={572}
                    height={363}
                    alt="news"
                    className="w-[100%] h-[auto] md:h-[30vw] lg:h-[18.893vw] lg:w-[30.792vw]"
                  />
                  <div className="bg-[#420516] px-[4vw] md:px-[3vw] lg:px-[2vw] py-[6vw] md:py-[3vw] lg:py-[2vw]">
                    <div className="flex justify-between items-center mb-[1.094vw]">
                      <div className="text-white mont-regular font-normal text-[14px] lg:text-[0.732vw] text-left">
                        {item?.category}
                      </div>
                      <div className="text-white mont-regular font-normal text-[14px] lg:text-[0.732vw] text-right">
                        {item?.minsread}
                      </div>
                    </div>
                    <div className="">
                      <h3 className="text-[#E7A963DB] ValkyRegular text-[14px] lg:text-[1.458vw] font-normal tracking-[0.058vw] mb-[0.625vw]">
                        {item?.heading}
                      </h3>
                      <p className="text-white mont-regular text-[14px] lg:text-[0.732vw] font-normal mb-[1.2vw]">
                        {item?.subheading}
                      </p>
                      <button className=" border border-white w-[26vw] h-[9vw] md:w-[14.154vw] md:h-[4.927vw] lg:w-[8.154vw] lg:h-[2.927vw] px-[2vw] py-[3vw] md:px-[0.732vw] md:py-[0.784vw] lg:px-[0.732vw] lg:py-[0.784vw] ValkyRegular text-[14px] lg:text-[0.941vw] mt-[2vw] lg:mt-0 text-white font-normal leading-[1.359vw] tracking-[0.038vw]">
                        {item?.btntext}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsBoxes;
