import dynamic from "next/dynamic";
import React from "react";

const DynamicNewsBanner = dynamic(
  () => import("@/components/News/NewsBanner"),
  { loading: () => <p>loading</p> }
);

const DynamicNewsBoxes = dynamic(() => import("@/components/News/NewsBoxes"), {
  loading: () => <p>loading</p>,
});

const news: React.FC = () => {
  return (
    <>
      <DynamicNewsBanner />
      <DynamicNewsBoxes />
    </>
  );
};

export default news;
