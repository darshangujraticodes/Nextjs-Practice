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

const OurTeam: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const awards = [
    {
      name: "Yash More",
      designation: "Designation",
      img: "/images/AboutUs/our-team/yash-more.png",
    },
    {
      name: "Sejal Shinde",
      designation: "Designation",
      img: "/images/AboutUs/our-team/sejal-shinde.png",
    },
    {
      name: "Rahul Sharma",
      designation: "Designation",
      img: "/images/AboutUs/our-team/rahul-sharma.png",
    },
    {
      name: "Ruby Dsouza",
      designation: "Designation",
      img: "/images/AboutUs/our-team/ruby-dsouza.png",
    },
  ];

  const toggleDescription = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="padding3 relative bg-amenity-background overflow-hidden">
      <div className="md:w-[90%] w-[95%] relative z-[4] m-auto">
        <div className="flex h-full w-full items-center justify-between flex-wrap">
          <div className="xl:w-5/12 lg:w-5/12 md:w-6/12 w-full md:mb-0 mb-[15px] lg:mb-[30px]">
            <motion.div
              variants={slideFromLeft(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
            >
              <div className="text-center">
                <h2 className="font-normal ValkyRegular text-[30px] lg:text-[4.167vw] text-left text-[#420516] w-[100%] lg:w-[45.313vw] mb-[2vw] lg:mb-[0vw]">
                  Our Leadership Team
                </h2>
                <p className="text-[#4F4F4F] mont-regular text-[14px] lg:text-[1.042vw] text-left font-light leading-[normal] lg:leading-[3.125vw] tracking-[0.021vw] capitalize mb-[4.042vw] lg:mb-[1.042vw]">
                  Lorem ipsum dolor sit amet consectetur. Duis aliquet morbi
                </p>
                <div className="underline3"></div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="w-full ">
          <Swiper
            slidesPerView={4}
            spaceBetween={25}
            keyboard={{ enabled: true }}
            loop={true}
            navigation={{
              nextEl: ".cust-swiper-button-next1",
              prevEl: ".cust-swiper-button-prev1",
            }}
            modules={[Keyboard, Autoplay, Navigation]}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1200: { slidesPerView: 4, spaceBetween: 25 },
            }}
            className="mySwiper"
          >
            {awards.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="our-team relative">
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
                      width={423}
                      height={446}
                      className="max-w-full text-center m-auto object-contain w-[100%]"
                    />
                    <div className="flex items-center justify-between flex-col p-[20px]">
                      <h3 className="ValkyRegular title text-[#fff] mb-[1.5vw] lg:mb-[0.5vw]">
                        {item.name}
                      </h3>
                      <p className="mont-regular date text-[#fff] p-tag">
                        {item.designation}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
