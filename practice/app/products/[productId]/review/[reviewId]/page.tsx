import React from "react";

type ReviewParamsType = {
  params: Promise<{ reviewId: String; productId: String }>;
};

const ReviewDetailsPage = async ({ params }: ReviewParamsType) => {
  const { productId, reviewId } = await params;

  return (
    <section>
      <div className="container">
        <h3 className="text-center  text-4xl">
          Review {reviewId} for Product {productId}
        </h3>
        <p className="text-center mt-4">
          (Nested Dynamic Routes : products/[productId]/review/[reviewId] )
        </p>
      </div>
    </section>
  );
};

export default ReviewDetailsPage;
