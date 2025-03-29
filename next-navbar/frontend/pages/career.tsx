import dynamic from "next/dynamic";
import React from "react";

const DynamicCareerBanner = dynamic(
  () => import("@/components/Career/CareerBanner"),
  { loading: () => <p>loading</p> }
);

const DynamicCareerBoxes = dynamic(
  () => import("@/components/Career/CareerBoxes"),
  {
    loading: () => <p>loading</p>,
  }
);

const career: React.FC = () => {
  return (
    <>
      <DynamicCareerBanner />
      <DynamicCareerBoxes />
    </>
  );
};

export default career;
