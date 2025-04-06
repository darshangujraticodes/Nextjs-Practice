import ErrorButton from "../Components/ErrorButton";
import Image from "next/image";
import { assetsImg } from "@/public/assets/assets";

import { Playfair_Display } from "next/font/google";

export default function Home() {
  const { img1, img2, img3 } = assetsImg;

  console.log(img1);

  return (
    <section className={`   mt-6   `}>
      <div className="container">
        <h1 className="text-4xl text-center ">Home Page</h1>

        <ErrorButton />

        <h4 className="text-3xl mt-8 text-center">
          Internal Public Folder Images
        </h4>

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

        <h4 className="text-3xl mt-8 text-center">
          External Public Folder Images
        </h4>

        <Image
          src="https://www.webrexstudio.com/wp-content/uploads/2019/05/react-js-image.png"
          alt="React Logo Image"
          width={300}
          height={250}
        />

        <p className="mb-6">
          While embedding image from external source link it required extra{" "}
          <br />
          declaration in next.config.ts file regarding of allowing different{" "}
          <br />
          continent (different domain) file image to be allowed to display in
          our website (similar to proxy in api)
        </p>
      </div>
    </section>
  );
}
