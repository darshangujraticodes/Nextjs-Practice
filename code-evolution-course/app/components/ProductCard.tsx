import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";

const ProductCard = ({
  cardImg,
  cardHead,
  cardPara,
}: {
  cardImg: StaticImageData;
  cardHead: string;
  cardPara: string;
}) => {
  return (
    <div className="productCardWrap">
      <div className="productImgWrap">
        <Image alt="cad Image" src={cardImg}></Image>
      </div>
      <div className="productContentWrap">
        <h3>{cardHead}</h3>

        <p>{cardPara}</p>
      </div>
    </div>
  );
};

export default ProductCard;
