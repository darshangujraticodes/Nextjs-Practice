import React from "react";

export type ParamsType = {
  params: Promise<{ productId: String }>;
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
