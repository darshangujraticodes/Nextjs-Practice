import React from "react";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideFromLeft,
  slideFromRight,
  zoomIn,
} from "../useables/variants";
import Heading from "../useables/Heading";
import PrimaryButton from "../useables/PrimaryButton";
import Image from "next/image";

const HomeOverview: React.FC = () => {
  return (
    <>
      <section className="padding3 relative bg-amenity-background overflow-hidden">
        {/* <div className="noise-bg w-full h-full absolute top-0 left-0">
                </div> */}
        <div className="cust-container-12">
          <div className=" flex items-end justify-center flex-wrap gap-[0.9vw]">
            <div className="relative order-3 md:order-1  lg:order-1">
              <motion.div
                variants={slideFromRight(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
                className="mx-auto"
              >
                <Image
                  src={"/images/AboutUs/overview.png"}
                  alt={"img"}
                  width={822}
                  className="w-[100%] h-[100%] md:w-[37.604vw] md:h-[38.646vw]  lg:w-[37.604vw] lg:h-[38.646vw] text-center w-100"
                  height={742}
                  priority
                />
              </motion.div>
            </div>
            <div>
              <div className="order-2 md:order-2 lg:order-2 overview-center">
                <motion.div
                  variants={zoomIn("up", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <Image
                    src={"/images/AboutUs/overview-center.png"}
                    alt={"img"}
                    width={313}
                    className="w-[40vw] h-[40vw] md:w-[16.302vw] md:h-[24.792vw] lg:w-[16.302vw] lg:h-[24.792vw] mt-[-8vw] md:mt-[0vw] lg:mt-0"
                    height={476}
                    priority
                  />
                </motion.div>
              </div>
            </div>
            <div className="order-1 md:order-3 lg:order-3 w-[100%] lg:w-[37.604vw] h-[100%] lg:h-[46.51vw] md:w-[37.604vw] md:h-[46.51vw] flex justify-start items-center bg-[#420516]">
              <div className="px-[5.271vw] py-[23.49vw] pt-[8vw] md:px-[10.271vw] md:py-[3.49vw] lg:px-[10.271vw] lg:py-[3.49vw]">
                <motion.div
                  variants={slideFromLeft(0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.5 }}
                >
                  {/* <Heading
                    align="start"
                    theme="dark"
                    heading="About Us"
                    subHeading=""
                    linewidth="25%"
                  /> */}

                  <div className="text-center">
                    <h2 className="font-normal ValkyRegular text-[30px] lg:text-[4.167vw] text-left text-[#fff] w-[100%] lg:w-[45.313vw] mb-[2vw] lg:mb-[0vw]">
                      About Us
                    </h2>

                    <div className="underline33 text-left margin-inherit"></div>
                  </div>

                  <div className="my-[10px] md:my-[10px]">
                    <p className=" text-start text-[#fff] mont-regular text-[12px] md:text-[1.1vw] lg:text-[0.833vw] leading-[5vw] md:leading-[1.863vw] lg:leading-[1.563vw] tracking-[0.025vw] w-[100%] md:w-[23.646vw] lg:w-[23.646vw]">
                      Sharvani Ventures and Avenues goes beyond being a real
                      estate company. We specialize in crafting residences that
                      embody your dreams and aspirations. Our mission revolves
                      around redefining contemporary living by meticulously
                      designing residential projects that seamlessly integrate
                      comfort, elegance, and convenience. We recognize the
                      significance of accessibility, which is why we
                      meticulously select locations that provide effortless
                      connectivity to essential hubs such as educational
                      institutions, healthcare facilities, shopping centers, and
                      transportation nodes.
                    </p>
                  </div>

                  {/* <PrimaryButton
                                    text="Read More"
                                    text2={''}
                                    link={''}
                                    dark={false}
                                /> */}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeOverview;
