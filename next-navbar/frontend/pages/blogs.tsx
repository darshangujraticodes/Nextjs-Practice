import dynamic from "next/dynamic";
import React from "react";

const DynamicBlogsBanner = dynamic(
  () => import("@/components/Blog/BlogsBanner"),
  { loading: () => <p>loading</p> }
);

const DynamicBlogsBoxes = dynamic(
  () => import("@/components/Blog/BlogsBoxes"),
  {
    loading: () => <p>loading</p>,
  }
);

const blogs: React.FC = () => {
  return (
    <>
      <DynamicBlogsBanner />
      <DynamicBlogsBoxes />
    </>
  );
};

export default blogs;
