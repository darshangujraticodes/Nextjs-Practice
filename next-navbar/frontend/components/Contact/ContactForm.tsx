import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideFromLeft,
  slideFromRight,
  zoomIn,
} from "../useables/variants";

const ContactForm: React.FC = () => {
  return (
    <section className="padding3 bg-amenity-background">
      <div className="cust-container-10">
        <div className="flex flex-col md:flex-row gap-[5vw]  mx-auto   overflow-hidden">
          {/* Left Side */}
          <motion.div
            variants={slideFromLeft(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="mx-auto"
          >
            <div className="w-[100%] h-[52.646vw] md:w-[29.01vw] md:h-[33.646vw] lg:w-[29.01vw] lg:h-[33.646vw] bg-[#420516] text-white flex flex-col justify-between pl-[3.5vw] md:pl-[1.5vw] lg:pl-[1.5vw] pt-[3.5vw] md:pt-[1.5vw] lg:pt-[1.5vw]">
              <div className="w-[50vw] md:w-[18.75vw] lg:w-[18.75vw]">
                <p className="text-[#FFBB6D] ValkyRegular text-[15px] md:text-[1.146vw] lg:text-[1.146vw] font-normal capitalize mb-[1.317vw] md:mb-[0.317vw] lg:mb-[0.317vw]">
                  Address:
                </p>
                <p className="poppins-regular text-[#fff] text-[12px] md:text-[0.833vw] lg:text-[0.833vw] font-light capitalize mb-[1.25vw] md:mb-[1.25vw] lg:mb-[1.25vw]">
                  Transcon Triumph, Opp. Tanishq Showroom, Andheri West, Mumbai,
                  Maharashtra 400053.
                </p>
                <p className="text-[#FFBB6D] ValkyRegular text-[15px] md:text-[1.146vw] lg:text-[1.146vw] font-normal capitalize mb-[1.317vw] md:mb-[0.317vw] lg:mb-[0.317vw]">
                  Email:
                </p>
                <p className="poppins-regular text-[#fff] text-[12px] md:text-[0.833vw] lg:text-[0.833vw] font-light capitalize mb-[1.25vw] md:mb-[1.25vw] lg:mb-[1.25vw]">
                  info@transcon.in
                </p>
                <p className="text-[#FFBB6D] ValkyRegular text-[15px] md:text-[1.146vw] lg:text-[1.146vw] font-normal capitalize mb-[1.317vw] md:mb-[0.317vw] lg:mb-[0.317vw]">
                  Phone No:
                </p>
                <p className="poppins-regular text-[#fff] text-[12px] md:text-[0.833vw] lg:text-[0.833vw] font-light capitalize ">
                  +91-22-66894000
                </p>
              </div>
              <div className="relative ">
                <Image
                  src="/images/Contact/bg.png" // Replace with the path to your image
                  alt="Building"
                  className="bg-[transparent] absolute z-10 bottom-0 right-0 w-[40.604vw] h-[40.031vw] md:w-[22.604vw] md:h-[27.031vw] lg:w-[22.604vw] lg:h-[27.031vw]"
                  width={434}
                  height={519}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={slideFromRight(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="mx-auto"
          >
            <div className="w-[100%] md:w-[49.01vw] lg:w-[49.01vw] h-[auto]">
              <div className="text-center mb-[2vw]">
                <h2 className="font-normal ValkyRegular text-[30px] lg:text-[4.1667vw] text-left text-[#420516] w-[45.313vw] capitalize">
                  Get in touch
                </h2>
                <div className="underline3"></div>
              </div>
              <form className="space-y-6 mt-[5vw] md:mt-0 lg:mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative mb-[2.5vw] md:mb-[1.5vw] lg:mb-[1.5vw] h-[3vw]">
                    <label className="hidden md:block lg:block text-[14px] md:text-[1.833vw] lg:text-[0.833vw] w-[100%] h-[1.358vw] md:w-[100%] md:h-[1.358vw] lg:w-[5.332vw] lg:h-[1.358vw] text-[#8D8D8D] poppins-regular font-normal leading-normal md:leading-[1.042vw] lg:leading-[1.042vw]">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="placeholder:md:hidden placeholder:lg:hidden w-[100%] h-[10vw] md:w-[22.461vw] md:h-[3.5vw] lg:w-[22.461vw] lg:h-[1.5vw] border-b-[1px] bg-[transparent] border-[#8D8D8D] focus:outline-none focus:border-[#420516] px-[0vw] py-4 md:px-[0vw] md:py-0 lg:px-[0vw] lg:py-0"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="relative mb-[2.5vw] md:mb-[1.5vw] lg:mb-[1.5vw] h-[3vw]">
                    <label className="hidden md:block lg:block text-[14px] md:text-[1.833vw] lg:text-[0.833vw] w-[100%] h-[1.358vw] md:w-[100%] md:h-[1.358vw] lg:w-[5.332vw] lg:h-[1.358vw] text-[#8D8D8D] poppins-regular font-normal leading-[1.042vw]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="placeholder:md:hidden placeholder:lg:hidden w-[100%] h-[10vw] md:w-[22.461vw] md:h-[3.5vw] lg:w-[22.461vw] lg:h-[1.5vw] border-b bg-[transparent] border-[#8D8D8D] focus:outline-none focus:border-[#420516] px-[0vw] py-4 md:px-[0vw] md:py-0 lg:px-[0vw] lg:py-0"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative h-[5vw] md:h-[3vw] lg:h-[3vw]">
                    <label className="hidden md:block lg:block text-[14px] md:text-[1.833vw] lg:text-[0.833vw] w-[100%] h-[1.358vw] md:w-[100%] md:h-[1.358vw] lg:w-[5.332vw] lg:h-[1.358vw] text-[#8D8D8D] poppins-regular font-normal leading-[1.042vw]">
                      Email
                    </label>
                    <input
                      type="email"
                      className="placeholder:md:hidden placeholder:lg:hidden w-[100%] h-[10vw] md:w-[22.461vw] md:h-[3.5vw] lg:w-[22.461vw] lg:h-[1.5vw] border-b bg-[transparent] border-[#8D8D8D] focus:outline-none focus:border-[#420516] px-[0vw] py-4 md:px-[0vw] md:py-0 lg:px-[0vw] lg:py-0"
                      placeholder="Email"
                    />
                  </div>
                  <div className="relative h-[5vw] md:h-[3vw] lg:h-[3vw]">
                    <label className="hidden md:block lg:block text-[14px] md:text-[1.833vw] lg:text-[0.833vw] w-[100%] h-[1.358vw] md:w-[100%] md:h-[1.358vw] lg:w-[5.332vw] lg:h-[1.358vw] text-[#8D8D8D] poppins-regular font-normal leading-[1.042vw]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="placeholder:md:hidden placeholder:lg:hidden w-[100%] h-[10vw] md:w-[22.461vw] md:h-[3.5vw] lg:w-[22.461vw] lg:h-[1.5vw] border-b bg-[transparent] border-[#8D8D8D] focus:outline-none focus:border-[#420516] px-[0vw] py-4 md:px-[0vw] md:py-0 lg:px-[0vw] lg:py-0"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="relative h-[100%] md:h-[11vw] lg:h-[13vw] 1024:pb-[2vw]">
                  <label className="hidden md:block lg:block text-[0.833vw] md:text-[1.833vw] lg:text-[0.833vw] 1024:mt-[4vw] lg:mt-0 w-[5.332vw] h-[1.58vw]  text-[#8D8D8D] poppins-regular font-normal leading-[1.042vw] mb-[0.8vw]">
                    Message
                  </label>
                  <textarea
                    className="placeholder:md:hidden placeholder:lg:hidden w-[100%] h-[100%] md:w-[100%] md:h-[100%] lg:w-[100%] lg:h-[10vw] 1024:h-[10vw] p-[2vw] 1024:p[1vw] mt-[5vw] md:mt-[0vw] lg:mt-[0vw] poppins-regular text-[14px] md:text-[12px] lg:text-[0.833vw] 1024:text-[16px] font-normal border bg-[transparent] border-gray-300 focus:outline-none focus:border-[#420516]"
                    placeholder="Write your message.."
                    rows={4}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-[22.154vw] h-[8.927vw] md:w-[11.154vw] md:h-[4.5vw] lg:w-[8.154vw] lg:h-[2.927vw] px-[0.732vw] py-[2.784vw] md:py-[1.784vw] lg:py-[0.784vw] lg:mt-[4vw]  flex items-center justify-center border border-[#420516]"
                >
                  <span className=" ValkyRegular text-[#420516] text-[14px] md:text-[12px] lg:text-[0.941vw] font-normal leading-[1.359vw] tracking-[0.038vw] capitalize">
                    Submit&nbsp;
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="8"
                    viewBox="0 0 21 8"
                    fill="none"
                  >
                    <path
                      d="M20.3716 4.36002C20.5669 4.16476 20.5669 3.84818 20.3716 3.65292L17.1897 0.470936C16.9944 0.275674 16.6778 0.275674 16.4825 0.470936C16.2873 0.666198 16.2873 0.98278 16.4825 1.17804L19.311 4.00647L16.4825 6.8349C16.2873 7.03016 16.2873 7.34674 16.4825 7.542C16.6778 7.73727 16.9944 7.73727 17.1897 7.542L20.3716 4.36002ZM0.951172 4.50647H10.4846V3.50647H0.951172V4.50647ZM10.4846 4.50647H20.0181V3.50647H10.4846V4.50647Z"
                      fill="#420516"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
        <div className="longunderline1"></div>
        <div className="mapss mt-[3vw]">
          <motion.div
            variants={zoomIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="mx-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3806.452357933828!2d78.36545!3d17.438050000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb936a22867db1%3A0xd0fc0a968d4322ea!2sSharvani%20Ventures%20and%20Avenues%20Pvt%20Ltd%20%7C%202%20%26%203%20BHK%20Flats%20for%20Sale%20in%20Chanda%20Nagar%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1737701182454!5m2!1sen!2sin"
              width="100%"
              height="550"
              style={{ border: "0" }}
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
