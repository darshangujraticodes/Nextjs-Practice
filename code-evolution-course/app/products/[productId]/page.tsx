import React from "react";

const productInfoPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  return (
    <section className="mt-5">
      <div className="container">
        <p className="text-2xl">Individual Product Page : {productId} </p>
      </div>
    </section>
  );
};

export default productInfoPage;
