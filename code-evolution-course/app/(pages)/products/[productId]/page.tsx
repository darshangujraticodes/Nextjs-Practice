import React from "react";
import { Metadata } from "next";
import { log } from "console";
import Capitalize from "@/app/components/Capitalize";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { productId } = await params;
  const title: string = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${productId}`);
    });
  });

  const newTitle = Capitalize(title.split("-").join(" "));

  return {
    title: `${newTitle} `,
    description: ` City Info - ${newTitle} `,
  };
};

const productInfoPage = async ({ params }: Props) => {
  const { productId } = await params;

  return (
    <section className="mt-5">
      <div className="container">
        <p className="text-2xl">
          Individual Product Page : {Capitalize(productId.split("-").join(" "))}{" "}
        </p>
      </div>
    </section>
  );
};

export default productInfoPage;
