import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

const HomeBanner: React.FC = () => {
  const pageBanner = {
    webBanner: "/images/Home/banner/about-us.mp4",
    mobileBanner: "/images/Home/banner/about-us.mp4",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet consectetur. Eros ipsum interdum amet vitae. Et aliquam viverra ac duis sit curabitur lacus. Feugiat adipiscing aliquet in suspendisse. ",
  };

  return (
    <div className="home_banner relative overflow-x-hidden">
      <div className="md:block hidden">
        <div className="relative z-[10]">
          <ReactPlayer
            className="banner_video"
            loop
            muted
            playbackRate={1}
            playing={true}
            url={pageBanner.webBanner}
            width={1920}
            height={1080}
          ></ReactPlayer>
          {/* <video
                src={pageBanner.webBanner}
                alt={"Slide"}
                width={1920}
                className="banner-img object-fit-contain"
                height={1080}
                priority
              /> */}
          <div className="absolute bottom-0 left-0 w-full h-full z-[5] flex items-end banner-bg">
            <div className=" lg:mb-[80px] md:mb-[50px]  md:w-[90%] w-[95%] m-auto">
              <div className=" 2xl:w-[60%] xl:w-[60%]  lg:w-[70%] w-[100%]">
                <h2 className="text-[#fff] ValkyRegular banner-heading">
                  {pageBanner.title}
                </h2>
                <p className="banner-text text-[#fff] mont-regular tracking-wide leading-8">
                  {pageBanner.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden block">
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
          className="mySwiper "
        >
          <SwiperSlide>
            <div className="relative z-[10]">
              <Image
                src={pageBanner.mobileBanner}
                alt={"Slide"}
                width={1920}
                className="banner-img object-fit-contain h-[100vh] object-cover"
                height={1080}
                priority
              />
              <div className="absolute bottom-0 left-0 w-full h-full z-[5] flex items-end banner-bg">
                <div className=" lg:mb-[80px] md:mb-[50px] mb-[20px]  md:w-[90%] w-[95%] m-auto">
                  <div className=" 2xl:w-[60%] xl:w-[60%] lg:w-[70%] w-[100%]">
                    <h2 className="text-[#fff] ValkyRegular banner-heading">
                      {pageBanner.title}
                    </h2>
                    <p className="banner-text text-[#fff] mont-regular tracking-wide leading-8">
                      {pageBanner.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeBanner;
