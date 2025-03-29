import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const constructList = [
  {
    id: 1,
    image: "/images/project-detail/const/1.jpg",
    title: "Sree Hemadurga Paradise, June 2023",
  },
  {
    id: 2,
    image: "/images/project-detail/const/1.jpg",
    title: "Sree Hemadurga Paradise, June 2023",
  },
  {
    id: 3,
    image: "/images/project-detail/const/1.jpg",
    title: "Sree Hemadurga Paradise, June 2023",
  },
  {
    id: 4,
    image: "/images/project-detail/const/1.jpg",
    title: "Sree Hemadurga Paradise, June 2023",
  },
  {
    id: 5,
    image: "/images/project-detail/const/1.jpg",
    title: "Sree Hemadurga Paradise, June 2023",
  },
];

const ConstructionUpdate: React.FC = () => {
  // Create refs for navigation buttons
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg2 padding2">
      <div className="cust-container-2">
        <div className="">
          <div className="mx-auto">
            <h2 className="font-normal text-center ValkyRegular text-[30px] lg:text-[4.1667vw] text-[#fff]">
              Construction Updates
            </h2>
            <div className="underline4"></div>
          </div>
        </div>
        <div className="firstfloor22">
          <Swiper
            modules={[Navigation, Autoplay]}
            grabCursor={false}
            centeredSlides={false}
            slidesPerView={3}
            draggable={false}
            speed={1000}
            loop={true}
            autoplay={{ delay: 3000 }}
            spaceBetween={30}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // Safely typecast navigation to allow assignment of elements
              const navigation = swiper.params.navigation as any;
              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;
              swiper.navigation.update();
            }}
            breakpoints={{
              0: {
                slidesPerView: 1, // Show fewer slides for very small screens
              },
              480: {
                slidesPerView: 1, // Slightly larger screens show 2 slides
              },
              768: {
                slidesPerView: 2, // Tablets and larger mobiles show 3 slides
              },
              1024: {
                slidesPerView: 3, // Default for larger screens
              },
            }}
            className="constSlider"
          >
            {constructList.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative">
                  <Image
                    src={item?.image}
                    height={560}
                    width={931}
                    className="img-fluid"
                    sizes="100%"
                    alt="image"
                  />
                  <div className="plusicon2">
                    <Image
                      src="/images/play.svg"
                      width={80}
                      height={72}
                      alt="plus"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-left mont-regular mt-[4vw] md:mt-[2vw] lg:mt-[2vw] text-[14px] md:text-[1.7vw] lg:text-[1.25vw] leading-normal md:leading-[2.181vw] lg:leading-[1.181vw] font-normal text-[#fff]">
                      {item?.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-center items-center mt-[2vw]">
          {/* Custom Prev Button */}
          <div
            ref={prevRef}
            className="cust-swiper-button-prev7 cursor-pointer border-0 bg-[#FFBB6D] next m-2  p-[3vw] md:p-[1vw] lg:p-[0.879vw] rounded-[50%]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <g clip-path="url(#clip0_994_15376)">
                <path
                  d="M7.3841 18.3521C7.3841 17.6693 6.70963 16.6498 6.02689 15.7941C5.14907 14.6899 4.10011 13.7265 2.89748 12.9913C1.99574 12.4401 0.902607 11.911 0.0229501 11.911M0.0229501 11.911C0.902607 11.911 1.99666 11.382 2.89748 10.8308C4.10011 10.0947 5.14907 9.13129 6.02689 8.02896C6.70963 7.17231 7.3841 6.15095 7.3841 5.47004M0.0229501 11.911L22.1064 11.911"
                  stroke="black"
                  stroke-width="0.920143"
                />
              </g>
              <defs>
                <clipPath id="clip0_994_15376">
                  <rect
                    width="22.0834"
                    height="22.0834"
                    fill="white"
                    transform="translate(0.0229492 22.9526) rotate(-90)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          {/* Custom Next Button */}
          <div
            ref={nextRef}
            className="cust-swiper-button-next7 cursor-pointer border-0 bg-[#FFBB6D] next m-2  p-[3vw] md:p-[1vw] lg:p-[0.879vw] rounded-[50%]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <g clip-path="url(#clip0_994_15384)">
                <path
                  d="M15.569 4.62353C15.569 5.30628 16.2435 6.3258 16.9262 7.18153C17.8041 8.28571 18.853 9.2491 20.0556 9.98429C20.9574 10.5355 22.0505 11.0645 22.9302 11.0645M22.9302 11.0645C22.0505 11.0645 20.9565 11.5936 20.0556 12.1448C18.853 12.8809 17.8041 13.8443 16.9262 14.9466C16.2435 15.8033 15.569 16.8246 15.569 17.5055M22.9302 11.0645L0.846733 11.0645"
                  stroke="black"
                  stroke-width="0.920143"
                />
              </g>
              <defs>
                <clipPath id="clip0_994_15384">
                  <rect
                    width="22.0834"
                    height="22.0834"
                    fill="white"
                    transform="translate(22.9302 0.0229492) rotate(90)"
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

export default ConstructionUpdate;
