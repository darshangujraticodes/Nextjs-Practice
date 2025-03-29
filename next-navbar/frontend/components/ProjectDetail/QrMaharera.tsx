import Image from "next/image";
import React from "react";

const QrMaharera: React.FC = () => {
  return (
    <>
      <section className="padding3 bg-amenity-background">
        <div className="cust-container-4">
          <div className="text-center">
            <Image
              src="/images/project-detail/qr.jpg"
              alt="QR Maharana"
              width={117}
              height={117}
              className="w-[40%] h-[40%] md:w-[30%] md:h-[30%] lg:w-[6.094vw] lg:h-[6.094vw] mx-auto mb-[0.5vw]"
            />
            <p className="text-[#420516] text-center mont-regular text-[12px] lg:text-[0.833vw] font-normal w-[100%] lg:w-[42.448vw] mt-[2vw] capitalize mb-[1.5vw]">
              This project has been registered via MahaRERA registration number
              P51800027978 and is available on the website
              https://maharera.mahaonline.gov.in/ under registered projects.
            </p>
            <button className="downloadbrochure-btn border border-[#420516] w-[40vw] h-[10vw] mt-[4vw] md:w-[20.885vw] md:h-[5.917vw] lg:w-[10.885vw] lg:h-[2.917vw] px-[2vw] py-[2vw] md:px-[0.729vw] md:py-[0.781vw] lg:px-[0.729vw] lg:py-[0.781vw] text-[#420516] ValkyRegular text-[13px] lg:text-[0.938vw] capitalize">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default QrMaharera;
