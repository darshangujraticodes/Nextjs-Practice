import React from "react";

interface Props {
  params: {
    slug: string[];
  };
}

const ProductDetailsPage = ({ params: { slug } }: Props) => {
  //   console.log("slug : ", slug);

  return (
    <div>
      <h1 className="text-2xl mt-5 text-center ">
        Product Details : {slug.join(", ")}
      </h1>
    </div>
  );
};

export default ProductDetailsPage;
