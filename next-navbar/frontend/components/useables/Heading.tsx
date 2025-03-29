import React from "react";

interface HeadingProps {
    align?: string;
    heading: string;
    subHeading?: string;
    theme?: string;
    linewidth?: string;
}

const Heading: React.FC<HeadingProps> = ({ align, heading, subHeading, theme, linewidth }) => {
    return (
        <div
            className={`heading-section flex flex-col item-center`}
        >
            <h2 className={` heading-main ValkyRegular tracking-wide ${theme === 'dark' ? 'text-[#fff]' : 'text-[#420516]'} text-${align ? align : 'start'}  w-full`}>{heading}</h2>
            {subHeading && <p className={` heading-sub tracking-wide mont-regular xl:leading-4 lg:leading-6 w-full ${theme === 'dark' ? 'text-[#fff]' : 'text-[#4F4F4F]'} text-${align ? align : 'start'}`}>{subHeading}</p>}
            <div className={`h-[2px] mt-4  m-${align === 'center' ? 'auto' : '0'} ${theme === "dark" ? 'bg-[#acabab]' : 'bg-[#420516]'}`}
                style={{ width: linewidth || '20%' }}
            ></div>
        </div>
    );
};

export default Heading;
