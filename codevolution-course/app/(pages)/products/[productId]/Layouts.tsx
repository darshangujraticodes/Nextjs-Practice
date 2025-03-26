import ProductCard from "@/app/components/ProductCard";
import React from "react";
import { assetsImg } from "@/public/assets/assets";

const Layouts = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section>
      {/* <div className="container">
        <div className="row">
          <div className="col-4">
            <ProductCard
              cardImg={assetsImg.img1}
              cardHead="Thar Desert"
              cardPara="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
          temporibus vero doloribus illo! Veritatis odio excepturi debitis
          nobis, tenetur dolorum?"
            />
          </div>
        </div>
      </div> */}

      <div>{children}</div>
    </section>
  );
};

export default Layouts;
