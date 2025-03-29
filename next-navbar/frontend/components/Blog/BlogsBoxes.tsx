import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideFromLeft,
  slideFromRight,
  zoomIn,
} from "../useables/variants";

const blogsData = [
  {
    date: "02 May",
    image: "/images/Blog/blog1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Risus odiplacing in est loareet gravida vel purus nulla at maecenas ac. Mattis posuere augue eu euismod.",
  },
  {
    date: "02 May",
    image: "/images/Blog/blog1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Risus odiplacing in est loareet gravida vel purus nulla at maecenas ac. Mattis posuere augue eu euismod.",
  },
  {
    date: "02 May",
    image: "/images/Blog/blog1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Risus odiplacing in est loareet gravida vel purus nulla at maecenas ac. Mattis posuere augue eu euismod.",
  },
  {
    date: "02 May",
    image: "/images/Blog/blog1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Risus odiplacing in est loareet gravida vel purus nulla at maecenas ac. Mattis posuere augue eu euismod.",
  },
  {
    date: "02 May",
    image: "/images/Blog/blog1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Risus odiplacing in est loareet gravida vel purus nulla at maecenas ac. Mattis posuere augue eu euismod.",
  },
  {
    date: "02 May",
    image: "/images/Blog/blog1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Risus odiplacing in est loareet gravida vel purus nulla at maecenas ac. Mattis posuere augue eu euismod.",
  },
  {
    date: "02 May",
    image: "/images/Blog/blog1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Risus odiplacing in est loareet gravida vel purus nulla at maecenas ac. Mattis posuere augue eu euismod.",
  },
  {
    date: "02 May",
    image: "/images/Blog/blog1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Risus odiplacing in est loareet gravida vel purus nulla at maecenas ac. Mattis posuere augue eu euismod.",
  },
  {
    date: "02 May",
    image: "/images/Blog/blog1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Risus odiplacing in est loareet gravida vel purus nulla at maecenas ac. Mattis posuere augue eu euismod.",
  },
];

function BlogsBoxes() {
  return (
    <>
      <section className="padding3 bg-amenity-background">
        <div className="cust-container-7 mx-auto">
          <div className="text-center">
            <motion.div
              variants={zoomIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="mx-auto"
            >
              <h2 className="font-normal ValkyRegular text-[30px] lg:text-[4.1667vw] text-center text-[#420516] ">
                Our Blogs
              </h2>
            </motion.div>
            <div className="underline5 text-center"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3.073vw] mt-[3.5vw]">
            {blogsData.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden bg-[#420516] text-white w-[100%] md:w-[41.5vw] lg:w-[25.2vw] p-[1.25vw] md:p-[1.25vw] lg:p-[1.25vw] pb-[1.865vw]"
              >
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={572}
                    height={363}
                    className="w-[100%] h-[100%] md:w-[40.229vw] md:h-[22.708vw] lg:w-[23.229vw] lg:h-[22.708vw] object-cover "
                  />
                  <div className="absolute bottom-[1.3vw] left-[1.3vw] bg-white text-[#420516] text-center w-[16.229vw] h-[10.706vw] md:w-[3.229vw] md:h-[3.706vw] lg:w-[3.229vw] lg:h-[3.706vw] px-[0.635vw] py-[0.794vw] flex justify-center items-center flex-col text-[14px] md:text-[1vw] lg:text-[0.833vw] poppins-regular leading-[1.335vw] gap-[0.529vw]">
                    {item.date}
                  </div>
                </div>
                <div className="p-[3vw] px-[4vw] md:p-[1vw] md:px-[1vw] lg:p-0">
                  <h3 className="text-[14px] md:text-[1.758vw] lg:text-[1.458vw] font-normal w-[100%] md:w-[100%] lg:w-[23.333vw] ValkyRegular leading-[1.771vw] mt-[3.302vw] md:mt-[1.302vw] lg:mt-[1.302vw] mb-[3.3vw] md:mb-[1.8vw] lg:mb-[1.3vw]">
                    {item.title}
                  </h3>
                  <p className="text-[12px] md:text-[1.3vw] lg:text-[0.833vw] font-normal poppins-regular leading-normal mb-[3.3vw] md:mb-[1.8vw] lg:mb-[1.3vw]">
                    {item.description}
                  </p>
                  <button className="border border-white w-[26vw] h-[9vw] md:w-[14.154vw] md:h-[4.527vw] lg:w-[8.154vw] lg:h-[2.927vw] px-[2vw] py-[3vw] md:px-[0.732vw] md:py-[0.784vw] lg:px-[0.732vw] lg:py-[0.784vw] ValkyRegular text-[14px] lg:text-[0.941vw] font-normal leading-[1.359vw] tracking-[0.038vw] capitalize hover:bg-white hover:text-[#420516] transition duration-300">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogsBoxes;
