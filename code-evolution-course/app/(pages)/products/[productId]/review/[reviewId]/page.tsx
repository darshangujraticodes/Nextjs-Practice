import React from "react";
import { redirect, notFound } from "next/navigation";
import { log } from "console";

function randomIntFromInterval(min: number, max: number): number {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const reviewDetailPage = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const num = randomIntFromInterval(1, 3);

  console.log("random value = ", num);
  if (num === 1) {
    throw new Error("Error Loading Review");
  }

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
