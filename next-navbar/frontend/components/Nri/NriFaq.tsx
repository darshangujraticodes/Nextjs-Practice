import React, { useState } from "react";
import {
  fadeIn,
  slideFromLeft,
  slideFromRight,
  zoomIn,
} from "../useables/variants";
import { motion } from "framer-motion";

const NriFaq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    {
      heading: "Who is an NRI?",
      content:
        "An NRI (Non-Resident Indian) is an Indian citizen who resides outside India for purposes such as employment, education, or other reasons.",
    },
    {
      heading: "Who is a PIO?",
      content:
        "A PIO (Person of Indian Origin) is a foreign citizen of Indian origin who holds a valid passport from another country but has ancestral or familial ties to India.",
    },
    {
      heading: "Who may acquire immovable property in India?",
      content:
        "NRIs and PIOs are allowed to purchase certain types of immovable property in India under current regulations.",
    },
    {
      heading: "Who may acquire immovable property in India?",
      content:
        "NRIs and PIOs are allowed to purchase certain types of immovable property in India under current regulations.",
    },
    {
      heading: "Who may acquire immovable property in India?",
      content:
        "NRIs and PIOs are allowed to purchase certain types of immovable property in India under current regulations.",
    },
  ];

  return (
    <>
      <section className="padding3 bg-amenity-background">
        <div className="cust-container-9">
          <div className="text-center">
            <motion.div
              variants={slideFromLeft(0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="mx-auto"
            >
              <h2 className="font-normal ValkyRegular text-[30px] lg:text-[4.1667vw] text-left text-[#420516] w-[45.313vw]">
                NRI
              </h2>
            </motion.div>
            <div className="underline3 w-[10.984] md:w-[30.984] lg:w-[30.984]"></div>
          </div>
          <div className="text-[#3f2323]">
            <div className="mx-auto">
              <motion.div
                variants={slideFromRight(0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
                className="mx-auto"
              >
                <h4 className="text-[#222] poppins-regular text-[14px] md:text-[2.546vw] lg:text-[1.146vw] font-normal mt-[3.25vw] mb-[3.667vw] md:mt-[1.25vw] md:mb-[1.667vw] lg:mt-[1.25vw] lg:mb-[1.667vw]">
                  Why Invest?
                </h4>
              </motion.div>

              <motion.div
                variants={zoomIn("up", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
                className="mx-auto"
              >
                <p className="text-[#474747] poppins-regular text-[12px] md:text-[12px] lg:text-[0.833vw] font-light leading-normal md:leading-[2.367vw] lg:leading-[1.367vw] tracking-normal md:tracking-[0.013vw] lg:tracking-[0.013vw] mb-8">
                  Lorem ipsum dolor sit amet consectetur. Viverra hendrerit
                  malesuada elementum ac nunc viverra. Enim nec nec adipiscing
                  pellentesque vitae donec. Praesent tincidunt eget gravida
                  tristique non at pellentesque cursus ante. Nullam euismod
                  lectus leo neque scelerisque tincidunt malesuada id. Eu mauris
                  enim neque id in est donec non. Quam velit tempus eu odio
                  nascetur vivamus. Lacus volutpat maecenas erat mauris etiam
                  integer. Et eget erat imperdiet porta quam amet pellentesque
                  in. Arcu sed eget maecenas ornare viverra ornare mauris sed.
                  Justo convallis orci dui pulvinar tristique tellus ligula
                  dignissim. Massa amet cursus integer consequat velit odio.
                  Donec volutpat mi adipiscing eget sit ipsum arcu faucibus
                  placerat. Eget cras aenean lorem duis. Ac vitae aliquam
                  molestie ultricies sit turpis non nibh.
                </p>
              </motion.div>

              {/* Accordion Section */}

              <motion.div
                variants={zoomIn("up", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
                className="mx-auto"
              >
                <div className="">
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="border overflow-hidden m-[4.083vw] md:m-[2.083vw] lg:m-[2.083vw] ml-[0] mr-[0] md:ml-[0] md:mr-[0] lg:ml-[0] lg:mr-[0]"
                    >
                      {/* Accordion Heading */}

                      <button
                        onClick={() => toggleAccordion(index)}
                        className={`flex justify-between items-center w-full h-[10.063vw] md:h-[6.063vw] lg:h-[4.063vw] px-[1.354vw] py-[1.458vw] text-left focus:outline-none ${
                          activeIndex === index
                            ? "border-[#420516] border-l-[4px]"
                            : "border-l-[4px]"
                        }`}
                      >
                        <span className="text-[#474747] poppins-regular text-[13px] md:text-[1.833vw] lg:text-[0.833vw] font-normal">
                          {item.heading}
                        </span>
                        <span className="iconsclass">
                          {activeIndex === index ? (
                            "—"
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                            >
                              <path
                                d="M15.9987 5.33301C16.3523 5.33301 16.6915 5.47348 16.9415 5.72353C17.1916 5.97358 17.332 6.31272 17.332 6.66634V14.6663H25.332C25.6857 14.6663 26.0248 14.8068 26.2748 15.0569C26.5249 15.3069 26.6654 15.6461 26.6654 15.9997C26.6654 16.3533 26.5249 16.6924 26.2748 16.9425C26.0248 17.1925 25.6857 17.333 25.332 17.333H17.332V25.333C17.332 25.6866 17.1916 26.0258 16.9415 26.2758C16.6915 26.5259 16.3523 26.6663 15.9987 26.6663C15.6451 26.6663 15.3059 26.5259 15.0559 26.2758C14.8058 26.0258 14.6654 25.6866 14.6654 25.333V17.333H6.66536C6.31174 17.333 5.9726 17.1925 5.72256 16.9425C5.47251 16.6924 5.33203 16.3533 5.33203 15.9997C5.33203 15.6461 5.47251 15.3069 5.72256 15.0569C5.9726 14.8068 6.31174 14.6663 6.66536 14.6663H14.6654V6.66634C14.6654 6.31272 14.8058 5.97358 15.0559 5.72353C15.3059 5.47348 15.6451 5.33301 15.9987 5.33301Z"
                                fill="#474747"
                              />
                            </svg>
                          )}
                        </span>
                      </button>
                      {/* Accordion Content */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          activeIndex === index ? "max-h-[500px]" : "max-h-0"
                        }`}
                      >
                        <div className="text-[#474747] poppins-regular text-[12px] md:text-[1.533vw] lg:text-[0.833vw] text-left ml-[1.7vw] mr-[1.7vw] mb-[1vw] mt-[1vw] font-light leading-normal md:leading-[2.567vw] lg:leading-[1.367vw] tracking-[0.013vw]">
                          {item.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NriFaq;
