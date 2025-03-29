import React, { useState } from "react";
import Image from "next/image";

const locationAdvantages = [
  {
    name: "Multi-Specialty Hospitals",
    items: [
      {
        name: "Hospital Name 1",
        distance: "6.0 Km",
        locicon: "/images/loc.svg",
      },
      {
        name: "Hospital Name 2",
        distance: "5.5 Km",
        locicon: "/images/loc.svg",
      },
    ],
  },
  {
    name: "School",
    items: [
      { name: "School Name 1", distance: "2.0 Km", locicon: "/images/loc.svg" },
      { name: "School Name 2", distance: "1.5 Km", locicon: "/images/loc.svg" },
    ],
  },
  {
    name: "Connectivity",
    items: [
      {
        name: "Connectivity Option 1",
        distance: "",
        locicon: "/images/loc.svg",
      },
      {
        name: "Connectivity Option 2",
        distance: "",
        locicon: "/images/loc.svg",
      },
    ],
  },
  {
    name: "Connectivity",
    items: [
      {
        name: "Connectivity Option 1",
        distance: "",
        locicon: "/images/loc.svg",
      },
      {
        name: "Connectivity Option 2",
        distance: "",
        locicon: "/images/loc.svg",
      },
    ],
  },
];

const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
  >
    <circle
      cx="15"
      cy="15"
      r="14.7"
      fill="white"
      stroke="#DAB15A"
      strokeWidth="0.6"
    />
    <path
      d="M9 15L21 15"
      stroke="#420516"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
  >
    <circle cx="15.001" cy="15" r="14.5" fill="white" stroke="#DAB15A" />
    <path
      d="M9.00098 15L21.001 15"
      stroke="#420516"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M15.001 9L15.001 21"
      stroke="#420516"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const LocationAdvantageSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0); // First accordion item is open by default

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white ">
      <div className="w-[100%]">
        <div className="flex flex-col md:flex-row items-stretch h-[100%] lg:h-[42.26vw] bg-[#420516]">
          {/* Google Map */}
          <div className="w-full md:w-1/2 h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4523624526237!2d78.36287527516609!3d17.438049783457807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb936a22867db1%3A0xd0fc0a968d4322ea!2sSharvani%20Ventures%20and%20Avenues%20Pvt%20Ltd%20%7C%202%20%26%203%20BHK%20Flats%20for%20Sale%20in%20Chanda%20Nagar%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1737445317077!5m2!1sen!2sin"
              className="w-full h-[400px] md:h-[430px] lg:h-full"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          {/* Location Advantage */}
          <div className="w-full md:w-1/2 h-full px-[5.521vw] py-[3.802vw] flex flex-col">
            <h2 className="font-normal ValkyRegular text-[30px] lg:text-[4.1667vw] text-center text-[#fff] mb-[4vw] lg:mb-[2.083vw]">
              Location Advantage
            </h2>

            {/* overflow-y-scroll */}
            <div className="flex-1 space-y-4 ">
              {locationAdvantages.map((advantage, index) => (
                <div key={index} className="transition-all duration-600 ">
                  <button
                    className="flex items-center justify-between w-[100%] md:w-[37.859vw] lg:w-[32.859vw] h-[10vw] md:h-[3.646vw] lg:h-[3.646vw] py-4 px-4 mb-[1.3vw] md:mb-[0.8vw] lg:mb-[0.8vw]  border-2"
                    onClick={() => toggleAccordion(index)}
                    style={{ borderColor: "#FFBB6D" }}
                  >
                    <span className="text-[#fff] font-normal text-[12px] lg:text-[0.833vw] mont-regular">
                      {advantage.name}
                    </span>
                    <div className="icon-spec relative mr-[-6vw] md:mr-[-3vw] lg:mr-[1vw] lg:right-[-2.65vw] ">
                      {activeIndex === index ? <MinusIcon /> : <PlusIcon />}
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500`}
                    style={{
                      maxHeight: activeIndex === index ? "500px" : "0",
                    }}
                  >
                    <div className="px-4 w-[100%] md-[32.813vw] lg:w-[32.813vw] mt-[2vw] md-px-[0] md:mt-[2vw] lg:mt-[2vw]">
                      {advantage.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center justify-between mb-[3vw] md:mb-[1.5vw] lg:mb-[1.5vw] "
                        >
                          <div className="flex items-center gap-2">
                            {item.locicon && (
                              <Image
                                src={item.locicon}
                                width={21}
                                height={20}
                                alt="location"
                                className="w-[4.083vw] md:w-[1.5vw] lg:w-[1.25vw]"
                              />
                            )}
                            <span className="text-[#fff] font-normal text-[12px] md:text-[1.2vw] lg:text-[0.833vw] mont-regular">
                              {item.name}
                            </span>
                          </div>
                          <span className="text-[#fff] font-normal text-[12px] lg:text-[0.833vw] mont-regular">
                            {item.distance}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAdvantageSection;
