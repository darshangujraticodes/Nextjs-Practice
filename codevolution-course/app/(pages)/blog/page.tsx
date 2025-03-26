import ProductCard from "@/app/components/ProductCard";
import React from "react";
import { assetsImg } from "@/public/assets/assets";
import Link from "next/link";

const blogCollectionPage = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Intentional Delay");
    }, 2000);
  });

  return (
    <section>
      <div className="container">
        <h1 className="text-3xl mt-5 text-center mb-5 ">
          Product Collection Page
        </h1>

        <div className="row ">
          <div className="col-4">
            <div>
              <ProductCard
                cardLink="blog/thar?lang=en"
                cardImg={assetsImg.img1}
                cardHead="Thar Dessert"
                cardPara=""
              />
            </div>
          </div>
          <div className="col-4">
            <div>
              <ProductCard
                cardLink="blog/varanasi?lang=hi"
                cardImg={assetsImg.img2}
                cardHead="Varanasi "
                cardPara=""
              />
            </div>
          </div>
          <div className="col-4">
            <div>
              <ProductCard
                cardLink="blog/goa?lang=de"
                cardImg={assetsImg.img3}
                cardHead="Goa"
                cardPara=""
              />
            </div>
          </div>
          <div className="col-4">
            <div>
              <ProductCard
                cardLink="blog/kerala?lang=zh"
                cardImg={assetsImg.img4}
                cardHead="Kerala"
                cardPara=""
              />
            </div>
          </div>

          <div>
            <Link href="/dashboard"> Admin Dashboard </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default blogCollectionPage;
