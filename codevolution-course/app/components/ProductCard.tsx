import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({
  cardImg,
  cardHead,
  cardPara,
  cardLink,
}: {
  cardImg: StaticImageData;
  cardHead: string;
  cardPara: string;
  cardLink: string;
}) => {
  return (
    <Link href={cardLink}>
      <div className="productCardWrap my-3">
        <div className="productImgWrap">
          <Image alt="cad Image" className="rounded-md" src={cardImg}></Image>
        </div>
        <div className="productContentWrap">
          <h3 className=" my-2 text-2xl">{cardHead}</h3>
          <p className="text-sm">{cardPara}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
