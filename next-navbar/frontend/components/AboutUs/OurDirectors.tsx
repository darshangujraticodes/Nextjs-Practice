import React from "react";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideFromLeft,
  slideFromRight,
  zoomIn,
} from "../useables/variants";
import Heading from "../useables/Heading";
import Image from "next/image";

const OurDirectors: React.FC = () => {
  return (
    <section className="padding3 bg-[#420516] overflow-hidden">
      <div className="cust-container-11">
        <div className="flex justify-center items-center mb-10">
          {/* <Heading
            align="center"
            theme="dark"
            heading="Our Director's Message"
            subHeading=""
            linewidth="25%"
          /> */}
          <div className="text-center">
            <h2 className="font-normal ValkyRegular text-[30px] lg:text-[4.167vw] text-left text-[#fff] w-[100%] lg:w-[45.313vw] mb-[2vw] lg:mb-[0vw]">
              Our Director&apos;s Message
            </h2>

            <div className="underline33"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center flex-row flex-wrap gap-[1.042vw] mt-[3.017vw]">
          <div className="w-full h-[auto] md:h-[100%] lg:h-[38.646vw] bg-[#420516] flex justify-center mb-[6vw] md:mb-[0vw] lg:mb-[0vw]">
            <div className="px-[4.552vw] py-[10.281vw] md:px-[4.552vw] md:py-[4.281vw] lg:px-[2.552vw] lg:py-[3.281vw] border border-[#FFBB6D]">
              <motion.div
                variants={slideFromLeft(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
              >
                <h3 className="text-[#fff] ValkyRegular text-[20px] lg:text-[1.458vw] font-normal leading-[3.125vw] tracking-[0.029vw] mb-[3vw] md:mb-[1vw] lg:mb-[0vw] ">
                  BANDI RAMESH
                </h3>
                <div className="dirunderline"></div>
                <div className="mt-[1.2vw]">
                  <p className="text-start text-[#fff] mont-regular text-[12px] lg:text-[0.833vw] font-normal leading-[5vw] md:leading-[3vw] lg:leading-[1.563vw] tracking-[normal] md:tracking-[normal] lg:tracking-[0.025vw]">
                    Sharvani Ventures and Avenues is a place where dreams come
                    true and aspirations find their home. As the director of
                    Sharvani Ventures and Avenues, I have witnessed the
                    transformation of dreams into reality and watched
                    aspirations find their true home. It has been an incredible
                    journey from our first project to completing ten luxurious
                    ventures in the vibrant city of Hyderabad, a city that has
                    welcomed dreamers from far and wide. Our story embodies
                    relentless determination and the pursuit of excellence. We
                    see homes as sanctuaries, where memories are created and
                    futures are conceived, driving our vision to exceed
                    expectations. Our passion is evident in the spaces we
                    create. Through cutting-edge technology and our expert team,
                    we strive to harmonize living with nature. We’re not just
                    builders; we’re architects of modern living. Our projects
                    reflect our commitment and tireless efforts. Our journey is
                    an exciting one, filled with the promise of endless
                    possibilities. With each project we undertake, we strive to
                    redefine modern living. From our first project, our focus
                    has been beyond construction – it’s about shaping lifestyles
                    and nurturing dreams, creating communities for those
                    aspiring to reach new heights in Hyderabad.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="relative w-full md:w-[100%] h-[100%] lg:h-[38.646vw]">
            <motion.div
              variants={slideFromRight(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
            >
              <Image
                src={"/images/AboutUs/bandi-ramesh.png"}
                alt={"img"}
                width={822}
                height={742}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDirectors;
