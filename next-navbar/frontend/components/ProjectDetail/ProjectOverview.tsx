import React from "react";
import Heading from "../useables/Heading";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideFromLeft,
  slideFromRight,
  zoomIn,
} from "../useables/variants";
import Image from "next/image";
import PrimaryButton from "../useables/PrimaryButton";
const ProjectOverview = () => {
  return (
    <>
      <section className="sec-padding-2 bg-[#fff] overflow-hidden ">
        <div className="flex justify-center items-center">
          <Heading
            align="center"
            theme="light"
            heading="PROJECT OVERVIEW"
            subHeading=""
            linewidth="25%"
          />
        </div>
        <div className="cust-container m-auto h-full flex flex-col items-center testimonial-head  relative">
          <div className="flex justify-center items-center mt-[4vw] mb-[0.5vw]">
            <div className="t-first">
              <motion.div
                variants={slideFromRight(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
              >
                <Image
                  src={"/images/project-detail/project-overview/02.png"}
                  alt={"img"}
                  width={362}
                  className=" text-center w-[25.854vw] h-[25.833vw] md:w-[25.854vw] md:h-[25.833vw] lg:w-[18.854vw] lg:h-[15.833vw]"
                  height={304}
                  priority
                />
              </motion.div>
            </div>
            <div className="t-second">
              <motion.div
                variants={zoomIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
              >
                <Image
                  src={"/images/project-detail/project-overview/01.png"}
                  alt={"img"}
                  width={734}
                  className=" w-[45.229vw] h-[27vw] md:w-[45.229vw] md:h-[27vw] lg:w-[38.229vw] lg:h-[20vw]  text-center"
                  height={384}
                  priority
                />
              </motion.div>
            </div>
            <div className="t-third">
              <motion.div
                variants={slideFromLeft(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
              >
                <Image
                  src={"/images/project-detail/project-overview/02.png"}
                  alt={"img"}
                  width={362}
                  className=" text-center w-[25.854vw] h-[25.833vw] md:w-[25.854vw] md:h-[25.833vw] lg:w-[18.854vw] lg:h-[15.833vw]"
                  height={304}
                  priority
                />
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div className="my-[30px]">
              <p className=" text-start text-[#292929] text-[12px] lg:text-[0.833vw] mont-regular leading-[5vw] md:leading-[2.563vw] lg:leading-[1.563vw] tracking-[0.025vw]">
                SREE HEMADURGA PARADISE is taking shape in the much-coveted
                locality of Miyapur, which is attaining prime status as it lies
                in the heart of Hyderabad’s fastest developing area. Here, in 8
                acres of verdant landscape, 6 majestic towers will rise, housing
                2 & 3 BHK apartments, which families would proudly call ‘home.
                Come, let’s explore what it has to offer that makes living here,
                so special. Sree Hemadurga Paradise stands out from the crowd
                thanks to its wisdom and imagination. Children, senior citizens,
                homemakers, working parents, and teenagers have all had their
                needs met. With groomed lawns and plenty of vegetation, the
                homes have an out of this world premium aspect.
              </p>
            </div>

            <PrimaryButton
              text="Download Brochure"
              text2={""}
              link={""}
              dark={false}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectOverview;
