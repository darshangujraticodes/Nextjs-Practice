import React from "react";

interface SwiperButtonProps {
  next: string;
  prev: string;
}

const SwiperButton1: React.FC<SwiperButtonProps> = ({ next, prev }) => {
  return (
    <div className="swiper-nav text-center">
      <button
        className={`${prev} border-0 bg-[#420516] prev m-2 p-[3vw] md:p-[1vw] lg:p-[0.879vw] rounded-[50%]`}
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
      </button>

      <button
        className={`${next} border-0 bg-[#420516] next m-2  p-[3vw] md:p-[1vw] lg:p-[0.879vw] rounded-[50%]`}
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
      </button>
    </div>
  );
};

export default SwiperButton1;
