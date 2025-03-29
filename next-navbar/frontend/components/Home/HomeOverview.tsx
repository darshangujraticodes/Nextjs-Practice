import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideFromLeft, slideFromRight, zoomIn } from "../useables/variants";
import Heading from "../useables/Heading";
import PrimaryButton from "../useables/PrimaryButton";
import Image from "next/image";

const HomeOverview: React.FC = () => {
    return (
        <>
            <section className="sec-padding relative bg-[#fff] overflow-hidden">
                {/* <div className="noise-bg w-full h-full absolute top-0 left-0">
                </div> */}
                <div className=" md:w-[90%] w-[95%] relative z-[4] m-auto">
                    <div className="flex h-full w-full items-center justify-between flex-wrap">

                        <div className="xl:w-5/12 lg:w-5/12 md:w-6/12 w-full md:mb-0 mb-[30px]">
                            <motion.div
                                variants={slideFromLeft(0.2)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.5 }}>
                                <Heading
                                    align="start"
                                    theme="light"
                                    heading="About Us"
                                    subHeading="Connecting You to Properties that Feel Like Home"
                                    linewidth="25%"
                                />

                                <div className="my-[30px]">
                                    <p className="p-tag text-start text-[#292929] mont-regular md:leading-7 leading-6">
                                        Welcome to Sharvani Ventures and Avenues, where modern living meets innovation and elegance. Explore a collection of thoughtfully designed residential developments, each offering apartments in gated community. Our strategically located ventures in Miyapur, Madinaguda, and Nizampet embrace the perfect balance of urban convenience and natural tranquility.
                                    </p>

                                </div>

                                <PrimaryButton
                                    text="Read More"
                                    text2={''}
                                    link={''}
                                    dark={false}
                                />
                            </motion.div>
                        </div>

                        <div className="xl:w-5/12 lg:w-5/12 md:w-6/12 w-full">
                            <motion.div
                                variants={slideFromRight(0.2)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.5 }}
                                 className="xl:w-[70%] lg:w-[100%] md:w-[80%] w-[100%] m-auto">
                                <Image
                                    src={'/images/Home/overview/overview.webp'}
                                    alt={"img"}
                                    width={400}
                                    className="max-w-full max-h-full text-center w-100"
                                    height={500}
                                    priority
                                />
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section >
        </>
    )
}
export default HomeOverview;
