import Image from "next/image";
import Link from "next/link";
import AddToCart from "../app/components/AddToCart";
import ProductCardInfo from "./components/ProductCardInfo";
import ProductCard from "./components/ProductCard";

export default function Home() {
  // procodrr Course : https://procodrr.com/nextjs/

  // chai code next course : https://youtu.be/OgS1ZWZItno?si=_FKhpvnRKEAqtB6b

  return (
    <main>
      <section>
        <h1 className="text-center mt-5 text-4xl font-medium">Hello Next Js</h1>

        <div className="navBtnWrap  flex justify-center  mt-5 items-center ">
          <Link
            href="/users"
            className=" bg-stone-800 text-white p-3 rounded-lg mx-3 font-semibold text-xl "
          >
            Profile
          </Link>
          <Link
            href="/users/login"
            className=" bg-stone-800 text-white p-3 rounded-lg mx-3 font-semibold text-xl "
          >
            {" "}
            Login{" "}
          </Link>
        </div>

        <div className=" flex justify-center mt-5">
          <ProductCardInfo />
        </div>

        <div className=" flex justify-center mt-5">
          <ProductCard />
        </div>
      </section>
    </main>
  );
}
