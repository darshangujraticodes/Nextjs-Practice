import React from "react";

interface HeadingProps2 {
  align?: string;
  heading: string;
  subHeading?: string;
  theme?: string;
  linewidth?: string;
}

const Heading2: React.FC<HeadingProps2> = ({
  align,
  heading,
  subHeading,
  theme,
  linewidth,
}) => {
  return (
    <div className={`heading-section flex flex-col item-center`}>
      <h2
        className={` heading-main ValkyRegular  text-[30px]  tracking-wide ${
          theme === "dark" ? "text-[#fff]" : "text-[#420516]"
        } text-${align ? align : "start"}  w-full`}
      >
        {heading}
      </h2>
      {subHeading && (
        <p
          className={` heading-sub tracking-wide mont-regular xl:leading-4 lg:leading-6 w-full ${
            theme === "dark" ? "text-[#fff]" : "text-[#4F4F4F]"
          } text-${align ? align : "start"}`}
        >
          {subHeading}
        </p>
      )}
      <div
        className={`h-[0.052vw] w-[13.854vw] mt-[1.508vw] mb-[3.2vw] lg:mb-[1.508vw]  m-${
          align === "center" ? "auto" : "0"
        } ${theme === "dark" ? "bg-[#FFBB6D]" : "bg-[#FFBB6D]"}`}
        // style={{ width: linewidth || "20%" }}
      ></div>
    </div>
  );
};

export default Heading2;
