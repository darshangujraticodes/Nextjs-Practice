import React from "react";
import Heading from "../useables/Heading";
import PrimaryButton from "../useables/PrimaryButton";
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
const HomeNews: React.FC = () => {
  const awards = [
    {
      title: "Lorem ipsum dolor",
      cat: "category",
      des: "Lorem ipsum dolor sit amet consectetur. Duis aliquet morbi eu velit in amet diam",
      img: "/images/Home/news/demo.webp",
    },
    {
      title: "Lorem ipsum dolor",
      cat: "category",
      des: "Lorem ipsum dolor sit amet consectetur. Duis aliquet morbi eu velit in amet diam",
      img: "/images/Home/news/demo.webp",
    },
    {
      title: "Lorem ipsum dolor",
      cat: "category",
      des: "Lorem ipsum dolor sit amet consectetur. Duis aliquet morbi eu velit in amet diam",
      img: "/images/Home/news/demo.webp",
    },
    {
      title: "Lorem ipsum dolor",
      cat: "category",
      des: "Lorem ipsum dolor sit amet consectetur. Duis aliquet morbi eu velit in amet diam",
      img: "/images/Home/news/demo.webp",
    },
  ];

  return (
    <>
      <section className="padding3 relative bg-[#fff] overflow-hidden">
        {/* <div className="noise-bg w-full h-full absolute top-0 left-0">
                </div> */}
        <div className=" md:w-[90%] w-[95%] relative z-[4] m-auto">
          <div className="flex h-full w-full items-center justify-between flex-wrap">
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full md:mb-0 mb-[30px] md:hidden block">
              <motion.div
                variants={slideFromLeft(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
              >
                <Heading
                  align="start"
                  theme="light"
                  heading="Latest news"
                  subHeading="Lorem ipsum dolor sit amet consectetur. Duis aliquet morbI"
                  linewidth="25%"
                />
              </motion.div>
            </div>

            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full md:mb-0 mb-[30px] md:block hidden">
              <motion.div
                variants={slideFromLeft(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
              >
                <Heading
                  align="start"
                  theme="light"
                  heading="Latest news"
                  subHeading=""
                  linewidth="25%"
                />
              </motion.div>
            </div>
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full md:mb-0 mb-[30px] text-end md:block hidden">
              <Heading
                align="end"
                theme="light"
                heading=""
                subHeading="Lorem ipsum dolor sit amet consectetur. Duis aliquet morbI"
                linewidth="0%"
              />
            </div>
          </div>

          <div className="w-full py-[50px] news-head">
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
                768: { slidesPerView: 1, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 25 },
              }}
              className="mySwiper"
            >
              {awards.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="news-card bg-[#420516]">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={300}
                      height={200}
                      sizes="100%"
                      className="max-w-full text-center m-auto object-cover w-full h-[300px]"
                    />
                    <div className="p-[20px]">
                      <div className="flex items-center w-full justify-between">
                        <p className="p-tag mont-regular text-[#fff]">
                          {item?.cat}
                        </p>
                        <p className="p-tag mont-regular text-[#fff]">
                          5 min read
                        </p>
                      </div>
                      <div className="mt-[20px]">
                        <h2 className="title ValkyRegular text-[#D6B750]">
                          {item?.title}
                        </h2>
                        <p className="p-tag mont-regular text-[#fff] mt-3">
                          {item?.des}
                        </p>
                      </div>
                      <div className="pt-[30px]">
                        <PrimaryButton
                          text="Read More"
                          text2={""}
                          link={""}
                          dark={true}
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeNews;
