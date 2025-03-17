import React from "react";
import { redirect, notFound } from "next/navigation";

const reviewDetailPage = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 100) {
    notFound();
  }

  if (parseInt(reviewId) === 95) {
    redirect("/login");
  }

  return (
    <section>
      <div className="container">
        {/* Individual Dynamic Content fetch */}
        <h1 className="text-3xl mt-5  ">
          Product : {productId} <br />
          Review : {reviewId}
        </h1>
      </div>
    </section>
  );
};

export default reviewDetailPage;
