import Image from "next/image";
import React from "react";
import Heading from "../useables/Heading";
import { motion } from "framer-motion";
import { fadeIn, slideFromBottom, slideFromLeft, slideFromRight, zoomIn } from "../useables/variants";
import PrimaryButton from "../useables/PrimaryButton";


const HomePRojectStack: React.FC = () => {
    const images = [
        { src: '/images/Home/projects/img1.webp', alt: 'Overview Image 1', title: 'Sree Hemadurga Paradise' },
        { src: '/images/Home/projects/img2.webp', alt: 'Overview Image 2', title: 'Sree Hemadurga Paradise' },
        // { src: '/images/Home/overview/overview.webp', alt: 'Overview Image 3' },
    ];

    return (
        <section className="relative">
            {images.map((image, index) => (
                <div key={index} className="sticky top-0 h-[100vh]">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={1920}
                        height={1080}
                        className="max-w-full max-h-full text-center h-full object-cover "
                        priority
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex  flex-col items-start justify-center px-[50px] project-list-bg-before transition-all">
                        <motion.div variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.5 }}>
                            <Heading
                                align="start"
                                theme="dark"
                                heading="current Projects "
                                subHeading=""
                                linewidth="25%"
                            />
                        </motion.div>


                        <div className="h-[50%] flex flex-col justify-center">
                            <motion.h2
                                variants={slideFromBottom(0.2)}
                                initial="hidden"
                                whileInView="show"

                                viewport={{ once: false, amount: 0.5 }}
                                className="project-seq mont-regular text-[#fff] my-0">{index + 1}</motion.h2>
                            <motion.h2
                                variants={slideFromBottom(0.4)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.5 }}
                                className="project-name ValkyRegular text-[#fff] xl:my-[50px] lg:my-[30px] my-[20px]">{image?.title}</motion.h2>

                            <motion.div
                             variants={slideFromBottom(0.6)}
                             initial="hidden"
                             whileInView="show"
                             viewport={{ once: false, amount: 0.5 }}
                             >
                                <PrimaryButton
                                    text="Read More"
                                    text2={''}
                                    link={''}
                                    dark={true}
                                />
                            </motion.div>
                        </div>



                    </div>
                </div>
            ))}
        </section>
    );
};

export default HomePRojectStack;
