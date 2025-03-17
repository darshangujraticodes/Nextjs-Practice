"use client";

import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";
import React from "react";
import { assetsImg } from "@/public/assets/assets";
import { useRouter } from "next/navigation";
import { log } from "console";

const productCollectionPage = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log(" handleClick() ");
    router.push("/login");
  };

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
                cardLink="products/thar-dessert"
                cardImg={assetsImg.img1}
                cardHead="Thar Dessert"
                cardPara="The Thar Desert, India’s Great Indian Desert, offers a mesmerizing blend of golden dunes, camel safaris, and rich Rajasthani culture. Explore historic forts, traditional villages, and vibrant festivals. Experience desert camping, folk music, and breathtaking sunsets, making it a perfect destination for adventure and cultural immersion in Rajasthan's vast landscapes."
              />
            </div>
          </div>
          <div className="col-4">
            <div>
              <ProductCard
                cardLink="products/varanasi"
                cardImg={assetsImg.img2}
                cardHead="Varanasi "
                cardPara="Varanasi, the spiritual heart of India, is a sacred city on the banks of the Ganges. Known for its ancient temples, mesmerizing Ganga Aarti, and vibrant ghats, it offers a deep cultural and spiritual experience. Visitors explore its narrow lanes, rich heritage, and soulful rituals, making it truly unforgettable."
              />
            </div>
          </div>
          <div className="col-4">
            <div>
              <ProductCard
                cardLink="products/goa"
                cardImg={assetsImg.img3}
                cardHead="Goa"
                cardPara="Goa, India's beach paradise, is famous for its golden sands, vibrant nightlife, and Portuguese heritage. From serene beaches to thrilling water sports, it offers a perfect blend of relaxation and adventure. Explore stunning churches, spice plantations, and bustling markets while enjoying Goa’s lively culture, delicious seafood, and festive atmosphere."
              />
            </div>
          </div>
          <div className="col-4">
            <div>
              <ProductCard
                cardLink="products/kerala"
                cardImg={assetsImg.img4}
                cardHead="Kerala"
                cardPara="  Kerala, known as God’s Own Country, is a paradise of lush greenery, tranquil backwaters, pristine beaches, and misty hill stations. Famous for Ayurvedic wellness, vibrant festivals, rich cultural heritage, and delicious cuisine, Kerala offers an unforgettable experience with its serene houseboats, wildlife sanctuaries, and breathtaking landscapes, perfect for travelers.  "
              />
            </div>
          </div>
        </div>

        <div>
          <h4>Place Order</h4>
          <div className="  flex justify-center ">
            <button
              onClick={handleClick}
              className="bg-indigo-600 text-2xl rounded-md px-3 py-2 text-white"
            >
              Place My Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default productCollectionPage;
