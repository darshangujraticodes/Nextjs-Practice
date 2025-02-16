import React from "react";

interface Props {
  params: {
    slug: string[];
  };
  searchParams: { sortOrder: string };
}

export const metadata = {
  title: "Product Page ",
  description: "Learn more about Product Page",
  openGraph: {
    title: "Product Page - Next Js Practical",
    description: "Learn more about our Product Page.",
    type: "website",
  },
};

const ProductDetailsPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  //   console.log("slug : ", slug);

  return (
    <div>
      <h1 className="text-2xl mt-5 text-center ">
        Product Details : {slug?.join(", ")} | Sort Product : {sortOrder}
      </h1>
    </div>
  );
};

export default ProductDetailsPage;
