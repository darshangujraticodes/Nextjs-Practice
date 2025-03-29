import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const CareerBanner: React.FC = () => {
  const pageBanner = {
    webBanner: "/images/Career/banner.jpg",
    mobileBanner: "/images/Career/banner.jpg",
    // title: "Lorem ipsum dolor sit amet",
    // text: "Lorem ipsum dolor sit amet consectetur. Eros ipsum interdum amet vitae. Et aliquam viverra ac duis sit curabitur lacus. Feugiat adipiscing aliquet in suspendisse. ",
  };

  return (
    <>
      <div className="home_banner relative">
        <div className="banner-bg absolute inset-0 z-[5]"></div>
        <div className="">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            keyboard={{ enabled: true }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={false}
            modules={[Keyboard, Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="relative z-[10]">
                <Image
                  src={pageBanner.webBanner}
                  alt={"Slide"}
                  width={1920}
                  className="banner-img object-fit-contain w-[100%] h-[auto] md:block hidden"
                  height={1080}
                  priority
                />
                <Image
                  src={pageBanner.mobileBanner}
                  alt={"Slide"}
                  width={1920}
                  className="banner-img object-fit-contain h-[100vh] object-cover md:hidden block"
                  height={1080}
                  priority
                />

                {/* <div className="absolute bottom-[10vw] sm:bottom-[10vw] left-[7vw] sm:left-[3vw] w-full h-full z-[5] flex items-end ">
                  <div className=" 2xl:w-[49.167vw] xl:w-[49.167vw]  lg:w-[49.167vw] w-[90%]">
                    <h2 className="text-white ValkyRegular text-[25px] sm:text-[3.333vw] font-normal leading-[25px] sm:leading-[1.375] tracking-[0.133vw] capitalize">
                      {pageBanner.title}
                    </h2>
                    <p className="banner-text text-[#fff] mont-regular text-[14px] sm:text-[0.833vw] md:text-[2vw] lg:text-[0.833vw] leading-[20px] sm:leading-[1.823vw] md:leading-[3vw] lg:leading-[1.823vw] tracking-[auto] sm:tracking-[0.033vw] mt-[3vw] sm:mt-[0.6vw]">
                      {pageBanner.text}
                    </p>
                  </div>
                </div> */}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CareerBanner;
