import ErrorButton from "../Components/ErrorButton";
import Image from "next/image";
import { assetsImg } from "@/public/assets/assets";

export default function Home() {
  const { img1, img2, img3 } = assetsImg;

  return (
    <section className="mt-8">
      <div className="container">
        <h1 className="text-4xl text-center ">Home Page</h1>

        <ErrorButton />

        <div className="mt-6 flex  gap-3">
          <Image
            alt="Thar dessert Tour"
            src={img1}
            className="w-[400px] h-[100%]"
          />
          <Image
            alt="Varanasi Tour"
            src={img2}
            className="w-[400px] h-[100%]"
          />
          <Image alt="Goa Tour" src={img3} className="w-[400px] h-[100%]" />
        </div>
      </div>
    </section>
  );
}
