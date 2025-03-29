import { Metadata } from "next";
import React from "react";
import capitalize from "@/app/Components/Capitalize";

export type ParamsType = {
  params: Promise<{ productId: String }>;
};

export const generateMetadata = async ({
  params,
}: ParamsType): Promise<Metadata> => {
  const { productId } = await params;

  console.log(productId);

  const newData = capitalize(productId.split("-").join(" "));

  // thise are the direct data push but in ecommerce app we are fetching data from api so after api call title and decription should get update

  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Mumbai Best ${newData} Service Agency`);
    }, 100);
  });

  return {
    title: `${title}`,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vel fugit facere consectetur sequi. Culpa maiores assumenda necessitatibus sint provident. ",
  };
};

const ProductDetails = async ({ params }: ParamsType) => {
  const { productId } = await params;

  return (
    <section>
      <div>
        <h1 className="text-center  text-4xl">Product Info : {productId}</h1>
        <p className="text-center mt-4">(Dynamic Routes : [productId] )</p>
      </div>
    </section>
  );
};

export default ProductDetails;
