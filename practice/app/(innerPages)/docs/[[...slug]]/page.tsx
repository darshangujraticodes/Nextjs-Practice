import React from "react";
import { SlugParamsType } from "@/app/types/TypeCollections";
import { log } from "console";

const page = async ({ params }: SlugParamsType) => {
  const { slug } = await params;

  console.log(slug);

  let newData = slug.join(" ");

  return (
    <section>
      <div className="container">
        <h3 className="text-center  text-4xl">
          {newData.length > 0 ? newData : "Slug is Empty"}
        </h3>
        <p className="text-center mt-4">
          (Catch All Segments : docs/[[...slug]] )
        </p>
      </div>
    </section>
  );
};

export default page;
