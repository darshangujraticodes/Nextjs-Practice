import Link from "next/link";
import React from "react";

const ProductDisplayPage = () => {
  return (
    <section>
      <div className="container">
        <h1 className="text-center  text-4xl">Product Display Page</h1>
        <p className="text-center">
          Dynamic Routing File Path : /products/[productId]
        </p>

        <div className="flex justify-center">
          <div className="mt-4">
            Links :
            <Link href="/products/website-development" className="mx-3">
              Website
            </Link>
            <Link href="/products/android-app-development" className="mx-3">
              Android App
            </Link>
            <Link
              href="/products/desktop-software-development"
              className="mx-3"
            >
              PC Software
            </Link>
          </div>
        </div>

        <h2 className="text-center text-3xl mt-5 ">Client Review</h2>
        <p className="text-center">
          (Nested Routing : products/[productId]/review/[reviewId])
        </p>
        <div className="flex   justify-center ">
          <div className="mt-4">
            Links :
            <Link href="/products/website/review/1" className="mx-3">
              Website Review
            </Link>
            <Link href="/products/app/review/2" className="mx-3">
              Android Review
            </Link>
            <Link href="/products/pc-software/review/3" className="mx-3">
              PC Software Review
            </Link>
          </div>
        </div>

        <h2 className="text-center text-3xl mt-5 ">Docs</h2>
        <p className="text-center">
          (Catch All Segment : /docs/feature1/concept1/example1)
        </p>
        <div className="mt-3">
          <p className="text-center">
            Links :
            <Link href="/docs/feature1/concept1/example">Doc Example</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplayPage;
