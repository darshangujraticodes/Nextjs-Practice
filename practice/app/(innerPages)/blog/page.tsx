import Link from "next/link";
import React from "react";

const BlogCollectionPage = () => {
  return (
    <section>
      <div>
        <h1 className="text-center  text-4xl">Blog Page</h1>
        <div className="flex justify-center">
          <div className="mt-4">
            <Link href="/blog/first" className="mx-3">
              First
            </Link>
            <Link href="/blog/second" className="mx-3">
              Second
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCollectionPage;
