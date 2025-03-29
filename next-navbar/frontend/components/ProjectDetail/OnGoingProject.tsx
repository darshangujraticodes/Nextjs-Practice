import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
  Keyboard,
  Controller,
  EffectFade,
} from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperButton1 from "../useables/SwiperButton1";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideFromLeft,
  slideFromRight,
  zoomIn,
} from "../useables/variants";
import PrimaryButton from "../useables/PrimaryButton";
import Heading2 from "../useables/Heading2";

interface ProjectData {
  image: string;
  bhk: string;
  onwards: string;
  desc: string;
}

interface OnGoingProjectProps {
  subtitle?: string;
  title?: string;
}

const OnGoingProject: React.FC<OnGoingProjectProps> = ({
  subtitle = "Project",
  title = "Ongoing Project",
}) => {
  const projectData: ProjectData[] = [
    {
      image: "/images/project-detail/ongoing-project/01.png",
      bhk: "1 BHK",
      onwards: "2 BHK - 576 SFT onwards",
      desc: "Lorem ipsum dolor sit amet consectetur. Vivamus sollicitudin ante ultrices lobortis tortor nunc. Diam risus sed egestas accumsan quis. Nisl fermentum",
    },
    {
      image: "/images/project-detail/ongoing-project/01.png",
      bhk: "2 BHK",
      onwards: "3 BHK - 676 SFT onwards",
      desc: "Lorem ipsum dolor sit amet consectetur. Vivamus sollicitudin ante ultrices lobortis tortor nunc. Diam risus sed egestas accumsan quis. Nisl fermentum",
    },
    {
      image: "/images/project-detail/ongoing-project/01.png",
      bhk: "3 BHK",
      onwards: "4 BHK - 876 SFT onwards",
      desc: "Lorem ipsum dolor sit amet consectetur. Vivamus sollicitudin ante ultrices lobortis tortor nunc. Diam risus sed egestas accumsan quis. Nisl fermentum",
    },
  ];

  return (
    <section className="sec-padding-ongoing bg-[#420516] overflow-hidden h-[100vhs] ongoing-project-sec">
      <div className="cust-container-2">
        <div className="position-relative">
          <Swiper
            slidesPerView={1}
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
                `<span class="${className} custom-bullet"></span>`,
            }}
            modules={[Keyboard, Autoplay, Navigation, Pagination]}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 1, spaceBetween: 20 },
              1200: { slidesPerView: 1, spaceBetween: 20 },
            }}
            className="mySwiper"
          >
            {projectData &&
              projectData.map((item, index) => {
                return (
                  <SwiperSlide key={`countextitem${index}`}>
                    <div className="flex items-center justify-center flex-wrap">
                      <div className="xl:w-6/12 lg:w-6/12  w-[100%] h-[100%] md:w-[100%] md:h-[100%]  lg:h-[43.802vw]  md:mb-[3vw] lg:mb-[0vw] mb-[30px] bg-[#420516]">
                        <motion.div
                          variants={slideFromRight(0.2)}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: false, amount: 0.5 }}
                          className="xl:w-[45.552vw] lg:w-[45.552vw] md:w-[100%]"
                        >
                          <Image
                            src={item.image}
                            alt={"img"}
                            width={822}
                            className="text-center w-[100%] h-[100%] md:w-[100%] md:h-[100%] lg:w-[47.552vw] lg:h-[43.802vw]"
                            height={742}
                            priority
                          />
                        </motion.div>
                      </div>
                      <div className="xl:w-6/12 lg:w-6/12  w-[100%] h-[90vw] md:w-[100%] md:h-[50vw]  lg:h-[43.802vw] text-[#fff] flex items-center justify-center relative border-[#FFBB6D] border">
                        <div className="project-details text-center w-[100%] md:w-[100%] lg:w-[29.479vw]">
                          <Heading2
                            align="center"
                            theme="dark"
                            heading={item.bhk}
                            subHeading=""
                            linewidth="25%"
                          />
                          <div className="onwards bg-white p-5 text-[#420516] mb-[3.508vw] lg:mb-[1.508vw] w-[60vw] h-[4.063vw] md:w-[35vw] md:h-[4.063vw] lg:w-[22.083vw] lg:h-[4.063vw] flex justify-center items-center mx-auto">
                            <p className="text-[14px] lg:text-[1.146vw] mont-regular leading-normal lg:leading-[1.354vw] font-medium">
                              {item.onwards}
                            </p>
                          </div>
                          <div className="desc">
                            <p className="w-[100%] md:w-[90%] lg:w-[29.479vw] block mx-auto text-[14px] lg:text-[0.833vw] leading-normal lg:leading-[1.771vw] mb-[3.508vw] lg:mb-[1.508vw] font-normal mont-regular">
                              {item.desc}
                            </p>
                          </div>
                          <div className="flex justify-center">
                            <PrimaryButton
                              text="Know More"
                              text2={""}
                              link={""}
                              dark={true}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OnGoingProject;
