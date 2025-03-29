import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import SwiperButton1 from "../useables/SwiperButton1";

const amenities = [
  {
    title: "Lawns & Gardens",
    icon: "/images/project-detail/icons/1.svg",
  },
  {
    title: "Pet Park",
    icon: "/images/project-detail/icons/1.svg",
  },
  {
    title: "Gyms",
    icon: "/images/project-detail/icons/1.svg",
  },
  {
    title: "Multiple Courts",
    icon: "/images/project-detail/icons/1.svg",
  },
  {
    title: "Play Areas",
    icon: "/images/project-detail/icons/1.svg",
  },
  {
    title: "Yoga/Meditation Zone",
    icon: "/images/project-detail/icons/1.svg",
  },
  {
    title: "Swimming Pools & Jacuzzi",
    icon: "/images/project-detail/icons/1.svg",
  },
  {
    title: "Swimming Pools & Jacuzzi",
    icon: "/images/project-detail/icons/1.svg",
  },
  {
    title: "Swimming Pools & Jacuzzi",
    icon: "/images/project-detail/icons/1.svg",
  },
  {
    title: "Swimming Pools & Jacuzzi",
    icon: "/images/project-detail/icons/1.svg",
  },
  {
    title: "Swimming Pools & Jacuzzi",
    icon: "/images/project-detail/icons/1.svg",
  },
  {
    title: "Swimming Pools & Jacuzzi",
    icon: "/images/project-detail/icons/1.svg",
  },
];

const AmenityItem = ({
  title,
  icon,
  index,
}: {
  title: string;
  icon: string;
  index: number;
}) => (
  <div
    className={`flex flex-col items-center ${
      index % 2 === 1 ? "amenity-even" : ""
    }`}
  >
    <div className="amenity-icon">
      <Image src={icon} width={33} height={33} alt="amenity" />
    </div>
    <h3 className="mt-4 font-normal mont-regular text-[14px] lg:text-[0.833vw] text-center text-[#000]	">
      {title}
    </h3>
  </div>
);

const ProjectAmenities: React.FC = () => {
  const [isPrevArrowActive, setIsPrevArrowActive] = useState(false);

  const handleNextClick = () => {
    setIsPrevArrowActive(true);
  };

  return (
    <>
      <section className="bg-amenity-background ame-height">
        <div className="cust-container-3 relative">
          <div className="ame1 mx-auto">
            <h2 className="font-normal ValkyRegular text-[30px] lg:text-[4.1667vw] text-center text-[#420516]">
              Amenities
            </h2>
            <div className="underline11"></div>
            <p className="text-center mont-regular  mx-auto mb-[3vw] w-[100%] lg:w-[62.031vw] text-[12px] lg:text-[0.833vw] leading-[5vw] md:leading-[2.771vw] lg:leading-[1.771vw] font-normal">
              Lorem ipsum dolor sit amet consectetur. Vivamus sollicitudin ante
              ultrices labortis tortor nunc. Diam risus sed egestas accumsan
              quis. Nisl fermentum facilisis mattis suspendisse tortor nunc nec
              vitae gravida.
            </p>
            <div className="ame-container">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={4}
                keyboard={{ enabled: true }}
                // autoplay={{
                //   delay: 3000,
                //   disableOnInteraction: false, // Ensure autoplay continues even after user interaction
                // }}
                speed={1000}
                // navigation={true}
                navigation={{
                  nextEl: ".cust-swiper-button-next3",
                  prevEl: ".cust-swiper-button-prev3",
                }}
                pagination={{
                  el: ".custom-pagination-ame",
                  type: "bullets",
                  clickable: true,
                  renderBullet: (index, className) =>
                    `<span class="${className} custom-bullet2"></span>`,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 7,
                    spaceBetween: 30,
                  },
                }}
                className="amenities-swiper"
              >
                {amenities.map((amenity, index) => (
                  <SwiperSlide key={amenity.title}>
                    <AmenityItem {...amenity} index={index} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="custom-nav-ame">
              <div
                className={`cust-swiper-button-next3 border-0 bg-[#420516] next m-2  p-[3vw] md:p-[1vw] lg:p-[0.879vw] rounded-[50%]`}
                onClick={handleNextClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="23"
                  viewBox="0 0 24 23"
                  className="w-[30px] h-[30px]"
                  fill="none"
                >
                  <g clip-path="url(#clip0_624_1963)">
                    <path
                      d="M15.6716 4.62341C15.6716 5.30616 16.346 6.32568 17.0288 7.18141C17.9066 8.28558 18.9556 9.24897 20.1582 9.98417C21.0599 10.5353 22.1531 11.0644 23.0327 11.0644M23.0327 11.0644C22.1531 11.0644 21.059 11.5935 20.1582 12.1447C18.9556 12.8808 17.9066 13.8442 17.0288 14.9465C16.346 15.8032 15.6716 16.8245 15.6716 17.5054M23.0327 11.0644L0.949272 11.0644"
                      stroke="white"
                      stroke-width="1.5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_624_1963">
                      <rect
                        width="22.0834"
                        height="22.0834"
                        fill="white"
                        transform="translate(23.0327 0.022644) rotate(90)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div
                className={`cust-swiper-button-prev3 border-0 bg-[#420516] next m-2  p-[3vw] md:p-[1vw] lg:p-[0.879vw] rounded-[50%] ${
                  isPrevArrowActive ? "active" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="23"
                  viewBox="0 0 24 23"
                  className="w-[30px] h-[30px]"
                  fill="none"
                >
                  <g clip-path="url(#clip0_624_1955)">
                    <path
                      d="M7.3841 18.3521C7.3841 17.6693 6.70963 16.6498 6.02689 15.7941C5.14907 14.6899 4.10011 13.7265 2.89748 12.9913C1.99574 12.4401 0.902607 11.911 0.0229501 11.911M0.0229501 11.911C0.902607 11.911 1.99666 11.382 2.89748 10.8308C4.10011 10.0947 5.14907 9.13129 6.02689 8.02896C6.70963 7.17231 7.3841 6.15095 7.3841 5.47004M0.0229501 11.911L22.1064 11.911"
                      stroke="white"
                      stroke-width="1.5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_624_1955">
                      <rect
                        width="22.0834"
                        height="22.0834"
                        fill="white"
                        transform="translate(0.0229492 22.9527) rotate(-90)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              {/* <SwiperButton1
                next={"cust-swiper-button-next3"}
                prev={"cust-swiper-button-prev3"}
              /> */}
            </div>
            <div className="custom-pagination-ame hidden"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectAmenities;
