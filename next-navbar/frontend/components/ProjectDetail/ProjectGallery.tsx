import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Image from "next/image";

const ProjectGallery: React.FC = () => {
  const [isPrevArrowActive, setIsPrevArrowActive] = useState(false);

  // Refs for navigation buttons
  const prevButtonRef = useRef<HTMLDivElement | null>(null);
  const nextButtonRef = useRef<HTMLDivElement | null>(null);

  // Monitor next click
  const handleNextClick = () => {
    setIsPrevArrowActive(true);
  };

  type TabNames = "Interior" | "Exterior" | "Videos";
  const allImages: Record<TabNames, string[]> = {
    Interior: [
      "/images/project-detail/gallery/1.jpg",
      "/images/project-detail/gallery/1.jpg",
      "/images/project-detail/gallery/1.jpg",
      "/images/project-detail/gallery/1.jpg",
      "/images/project-detail/gallery/1.jpg",
      "/images/project-detail/gallery/1.jpg",
      "/images/project-detail/gallery/1.jpg",
      "/images/project-detail/gallery/1.jpg",
    ],
    Exterior: [
      "/images/project-detail/gallery/1.jpg",
      "/images/project-detail/gallery/1.jpg",
      "/images/project-detail/gallery/1.jpg",
      "/images/project-detail/gallery/1.jpg",
      "/images/project-detail/gallery/1.jpg",
      "/images/project-detail/gallery/1.jpg",
      "/images/project-detail/gallery/1.jpg",
      "/images/project-detail/gallery/1.jpg",
    ],
    Videos: [
      "/images/project-detail/gallery/1.jpg",
      "/images/project-detail/gallery/1.jpg",
      "/images/project-detail/gallery/1.jpg",
      "/images/project-detail/gallery/1.jpg",
      "/images/project-detail/gallery/1.jpg",
      "/images/project-detail/gallery/1.jpg",
      "/images/project-detail/gallery/1.jpg",
      "/images/project-detail/gallery/1.jpg",
    ],
  };

  const [activeTab, setActiveTab] = useState<TabNames>("Interior");
  const images = allImages[activeTab];
  const tabs: TabNames[] = ["Interior", "Exterior", "Videos"];

  return (
    <section className="bg-amenity-background padding3 relative">
      <div className="cust-container-2 mx-auto">
        {/* Heading */}
        <div className="flex justify-between items-start lg:items-center flex-col md:flex-row lg:flex-row">
          <div className="text-center ">
            <h2 className="font-normal ValkyRegular text-[30px] lg:text-[4.1667vw] text-left text-[#420516]">
              Gallery
            </h2>
            <div className="underline3"></div>
            <p className="text-left mont-regular text-[#4F4F4F]  mx-auto mb-[3vw] w-[100%] lg:w-[62.031vw] text-[12px] lg:text-[1.042vw] leading-[5vw] lg:leading-[3.125vw] font-normal">
              Lorem Ipsum Dolor Sit Amet Consectetur. Duis Aliquet Morbi
            </p>
          </div>
          <div className="w-full flex justify-center gap-[4.5vw] md:gap-[2.5vw] lg:gap-[2.5vw] mb-[7vw] md:mb-0 lg:mb-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={` border-[1px] w-[20vw] h-[8vw] md:w-[8.135vw] md:h-[3.917vw] lg:w-[7.135vw] lg:h-[2.917vw] text-[12px] lg:text-[0.833vw] mont-regular font-normal leading-[2.083vw] ${
                  activeTab === tab
                    ? "bg-[#4A2328] text-white border-[#4A2328]"
                    : "bg-[rgba(255, 246, 231, 1)] text-[#420516] border-[#4A2328]"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="relative overflow-x-hidden w-[80.083vw] block mx-auto">
          <Swiper
            modules={[Navigation, EffectCoverflow]}
            navigation={{
              nextEl: nextButtonRef.current,
              prevEl: prevButtonRef.current,
            }}
            onBeforeInit={(swiper) => {
              // Attach refs to Swiper's navigation buttons
              if (nextButtonRef.current && prevButtonRef.current) {
                swiper.params.navigation = {
                  nextEl: nextButtonRef.current,
                  prevEl: prevButtonRef.current,
                };
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            effect="coverflow"
            centeredSlides={true}
            slidesPerView={3.5}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.5, // Show fewer slides for very small screens
              },
              480: {
                slidesPerView: 2, // Slightly larger screens show 2 slides
              },
              768: {
                slidesPerView: 3, // Tablets and larger mobiles show 3 slides
              },
              1024: {
                slidesPerView: 3.5, // Default for larger screens
              },
            }}
            className="gallery-slider"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative">
                  <Image
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    width={552}
                    height={570}
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Navigation */}
        <div className="custom-nav-ame6">
          <div
            ref={prevButtonRef}
            className={`cust-swiper-button-prev6 border-0 bg-[#420516] next m-2  p-[3vw] md:p-[1vw] lg:p-[0.879vw] rounded-[50%] ${
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
          <div
            ref={nextButtonRef}
            className="cust-swiper-button-next6 border-0 bg-[#420516] next m-2  p-[3vw] md:p-[1vw] lg:p-[0.879vw] rounded-[50%]"
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
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
