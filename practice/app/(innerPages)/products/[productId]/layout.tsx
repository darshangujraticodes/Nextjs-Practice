import React from "react";

const ProductDetailsLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      {children}
      <p className="mt-4 text-center text-3xl">Product Sub Details</p>
      <p className="text-center">Nested Layout Example</p>
    </div>
  );
};

export default ProductDetailsLayout;
