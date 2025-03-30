import Link from "next/link";
import React from "react";

const BlogCollectionPage = () => {
  return (
    <section>
      <div>
        <h1 className="text-center  text-4xl">Blog Collection Page</h1>
        <div className="flex justify-center"></div>

        <h2 className="text-center text-3xl mt-5 ">Params && SearchParams</h2>
        <div className="flex justify-center mt-5">
          <Link
            className=" text-white  bg-indigo-500 px-3 py-2 rounded-xl mx-3"
            href="/blog/united-nations-conference-break-news?lang=en"
          >
            Read in English
          </Link>
          <Link
            className=" text-white  bg-indigo-500 px-3 py-2 rounded-xl mx-3"
            href="/blog/stock-market-breaking-news?lang=fr"
          >
            Read in French
          </Link>
          <Link
            className=" text-white  bg-indigo-500 px-3 py-2 rounded-xl mx-3"
            href="/blog/terrorist-attack-break-news?lang=de"
          >
            Read in German
          </Link>
        </div>
      </div>

      <div className="container"></div>
    </section>
  );
};

export default BlogCollectionPage;
