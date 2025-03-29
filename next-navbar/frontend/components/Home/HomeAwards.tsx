import React, { useState } from "react";

import Heading from "../useables/Heading";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideFromBottom,
  slideFromLeft,
  slideFromRight,
  zoomIn,
} from "../useables/variants";
import SwiperButton1 from "../useables/SwiperButton1";

const HomeAwards: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const awards = [
    {
      name: "Award 1",
      date: "2 JAN",
      des: "Lorem ipsum dolor sit amet consectetur. Duis aliquet morbi eu velit in amet diam",
      img: "/images/Home/awards/awards1.webp",
    },
    {
      name: "Award 2",
      date: "2 FEB",
      des: "Lorem ipsum dolor sit amet consectetur. Duis aliquet morbi eu velit in amet diam",
      img: "/images/Home/awards/awards1.webp",
    },
    {
      name: "Award 3",
      date: "2 MAR",
      des: "Lorem ipsum dolor sit amet consectetur. Duis aliquet morbi eu velit in amet diam",
      img: "/images/Home/awards/awards1.webp",
    },
    {
      name: "Award 4",
      date: "2 APR",
      des: "Lorem ipsum dolor sit amet consectetur. Duis aliquet morbi eu velit in amet diam",
      img: "/images/Home/awards/awards1.webp",
    },
  ];

  const toggleDescription = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="padding3 relative bg-[#fff] overflow-hidden">
      {/* <div className="noise-bg w-full h-full absolute top-0 left-0"></div> */}
      <div className="md:w-[90%] w-[95%] relative z-[4] m-auto">
        <div className="flex h-full w-full items-center justify-between flex-wrap">
          <div className="xl:w-5/12 lg:w-5/12 md:w-6/12 w-full md:mb-0 mb-[30px]">
            <motion.div
              variants={slideFromLeft(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
            >
              <Heading
                align="start"
                theme="light"
                heading="Awards"
                linewidth="25%"
                // subHeading="Lorem ipsum dolor sit amet consectetur. Duis aliquet morbi."
              />
              <p className="subehadingaward text-[#4F4F4F] mont-regular text-[1.042vw] capitalize mt-[2vw]">
                Lorem ipsum dolor sit amet consectetur. Duis aliquet morbI
              </p>
            </motion.div>
          </div>
          <div className="xl:w-5/12 lg:w-5/12 md:w-6/12 w-full md:mb-0 mb-[30px] md:block hidden">
            <motion.div
              variants={slideFromRight(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="w-full flex justify-end items-center h-full"
            >
              <SwiperButton1
                next={"cust-swiper-button-next1"}
                prev={"cust-swiper-button-prev1"}
              />
            </motion.div>
          </div>
        </div>

        <div className="w-full md:mt-[50px] mt-[20px]">
          <Swiper
            slidesPerView={3}
            spaceBetween={25}
            keyboard={{ enabled: true }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={1200}
            navigation={{
              nextEl: ".cust-swiper-button-next1",
              prevEl: ".cust-swiper-button-prev1",
            }}
            modules={[Keyboard, Autoplay, Navigation]}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1200: { slidesPerView: 3, spaceBetween: 25 },
            }}
            className="mySwiper"
          >
            {awards.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="award-card relative">
                  <div className="absolute top-0 left-0 h-[30%] w-full"></div>
                  <motion.div
                    variants={slideFromBottom(0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.5 }}
                    className="absolute bottom-0 left-0 h-[70%] w-full bg-[#420516]"
                  ></motion.div>
                  <motion.div
                    variants={slideFromBottom(0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.5 }}
                    className="flex flex-col h-full w-full relative z-[2]"
                  >
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={300}
                      height={200}
                      className="max-w-full text-center m-auto object-contain w-[40%]"
                    />
                    <div className="flex items-center justify-between px-[20px]">
                      <h3 className="ValkyRegular title text-[#fff]">
                        {item.name}
                      </h3>
                      <p className="ValkyRegular date text-[#D6B750] p-tag">
                        {item.date}
                      </p>
                    </div>
                    <div className="px-[20px] py-[20px]">
                      <p className="p-tag text-[#fff]">
                        {openIndex === index
                          ? item.des
                          : `${item.des.substring(0, 50)}...`}
                      </p>
                      <button
                        className="text-[#D6B750] underline"
                        onClick={() => toggleDescription(index)}
                      >
                        {openIndex === index ? "Read Less" : "Read More"}
                      </button>
                    </div>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full md:hidden block mt-[50px]">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="w-full flex justify-center items-center h-full"
          >
            <SwiperButton1
              next={"cust-swiper-button-next1"}
              prev={"cust-swiper-button-prev1"}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeAwards;
