import React from "react";
import Heading from "../useables/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import {
  fadeIn,
  slideFromBottom,
  slideFromLeft,
  slideFromRight,
  zoomIn,
} from "../useables/variants";
import SwiperButton2 from "../useables/SwiperButton2";
import { useRouter } from "next/router";
import SwiperButton1 from "../useables/SwiperButton1";
import SwiperButton3 from "../useables/SwiperButton3";

const HomeTestimonial: React.FC = () => {
  const router = useRouter();
  const isHomePage = router.pathname === "/"; // Check if it's the home page

  const testi = [
    {
      name: "Swapna Katar",
      text: "I own a villa by y Constructions. Excellently designed common areas and very well made layout and ﬂoor plan. So there is no wastage of space in the property and have rooms for all my needs like home theater, multiple terrace library and all.",
    },
    {
      name: "Swapna Katar1",
      text: "I own a villa by y Constructions. Excellently designed common areas and very well made layout and ﬂoor plan. So there is no wastage of space in the property and have rooms for all my needs like home theater, multiple terrace library and all.",
    },

    {
      name: "Swapna Katar1",
      text: "I own a villa by y Constructions. Excellently designed common areas and very well made layout and ﬂoor plan. So there is no wastage of space in the property and have rooms for all my needs like home theater, multiple terrace library and all.",
    },
    {
      name: "Swapna Katar1",
      text: "I own a villa by y Constructions. Excellently designed common areas and very well made layout and ﬂoor plan. So there is no wastage of space in the property and have rooms for all my needs like home theater, multiple terrace library and all.",
    },

    // { src: '/images/Home/overview/overview.webp', alt: 'Overview Image 3' },
  ];

  return (
    <>
      <section
        className={`padding3 overflow-hidden ${
          isHomePage ? "bg-[#420516]" : "testimonialbg"
        }`}
      >
        <div className="flex justify-center items-center">
          <Heading
            align="center"
            theme="dark"
            heading="TESTIMONIALS"
            subHeading=""
            linewidth="25%"
          />
        </div>

        <div className="container m-auto h-full flex flex-col items-center exsc testimonial-head22  relative">
          <div className=" w-full ">
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
                nextEl: ".cust-swiper-button-next2",
                prevEl: ".cust-swiper-button-prev2",
              }}
              pagination={{
                type: "bullets",
                clickable: true,
                renderBullet: (index, className) =>
                  `<span class="${className} custom-bullet33"></span>`,
              }}
              modules={[Keyboard, Autoplay, Navigation, Pagination]}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 1, spaceBetween: 20 },
                1200: { slidesPerView: 1, spaceBetween: 20 },
              }}
              className="mySwiper !py-[80px]"
            >
              {testi.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className=" testi-card border-[#FFBB6D] border  ">
                    <div className="flex items-center justify-center flex-col lg:w-[60%] m-auto py-[40px] lg:px-0 px-4">
                      <div className="text-center py-[40px] ">
                        <svg
                          width="37"
                          height="29"
                          viewBox="0 0 37 29"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.6 0.880006C12.4667 0.880006 14.0533 1.72001 15.36 3.40001C16.6667 5.08001 17.46 7.04001 17.74 9.28001C17.74 9.46667 17.7867 9.65334 17.88 9.84001C17.88 10.12 17.88 10.3533 17.88 10.54C17.88 13.8067 16.5267 17.12 13.82 20.48C11.1133 23.9333 7.84666 26.5 4.02 28.18C3.83333 28.2733 3.64667 28.32 3.46 28.32C3.27333 28.4133 3.08666 28.46 2.9 28.46C2.24666 28.46 1.78 28.2267 1.5 27.76C1.12666 27.3867 0.939997 26.9667 0.939997 26.5C0.939997 25.8467 1.22 25.2867 1.78 24.82C3.55333 23.6067 5.23333 22.0667 6.82 20.2C8.31333 18.3333 9.29333 16.56 9.76 14.88C9.57333 14.7867 9.15333 14.6467 8.5 14.46C7.84666 14.2733 7.47333 14.0867 7.38 13.9C6.63333 13.2467 5.88666 12.36 5.14 11.24C4.3 10.12 3.88 8.81334 3.88 7.32001C3.88 5.26667 4.53333 3.68 5.84 2.56C7.05333 1.44 8.64 0.880006 10.6 0.880006ZM28.8 0.880006C30.6667 0.880006 32.2533 1.72001 33.56 3.40001C34.8667 5.08001 35.66 7.04001 35.94 9.28001C35.94 9.46667 35.9867 9.65334 36.08 9.84001C36.08 10.12 36.08 10.3533 36.08 10.54C36.08 13.8067 34.7267 17.12 32.02 20.48C29.3133 23.9333 26.0467 26.5 22.22 28.18C22.0333 28.2733 21.8467 28.32 21.66 28.32C21.4733 28.4133 21.2867 28.46 21.1 28.46C20.4467 28.46 19.98 28.2267 19.7 27.76C19.3267 27.3867 19.14 26.9667 19.14 26.5C19.14 25.8467 19.42 25.2867 19.98 24.82C21.7533 23.6067 23.4333 22.0667 25.02 20.2C26.5133 18.3333 27.4933 16.56 27.96 14.88C27.7733 14.7867 27.3533 14.6467 26.7 14.46C26.0467 14.2733 25.6733 14.0867 25.58 13.9C24.8333 13.2467 24.0867 12.36 23.34 11.24C22.5 10.12 22.08 8.81334 22.08 7.32001C22.08 5.26667 22.7333 3.68 24.04 2.56C25.2533 1.44 26.84 0.880006 28.8 0.880006Z"
                            fill="#FFBB6D"
                          />
                        </svg>
                      </div>
                      <p className="mont-regular text-[#fff] text-center des">
                        {item?.text}
                      </p>
                      <p className="ValkyRegular text-[#FFBB6D] text-center name mt-5">
                        {item?.name}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-full  ">
            <div className="w-full flex justify-center items-center h-full">
              <SwiperButton3
                next={"cust-swiper-button-next2"}
                prev={"cust-swiper-button-prev2"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeTestimonial;
