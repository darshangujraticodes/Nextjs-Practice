import dynamic from "next/dynamic";
import React from "react";

const DyanmicListingBanner = dynamic(
  () => import("@/components/ProjectListing/ListingBanner"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const DyanmicListingProject = dynamic(
  () => import("@/components/ProjectListing/ListingProject"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const listingpage: React.FC = () => {
  return (
    <>
      <DyanmicListingBanner />
      <DyanmicListingProject />
    </>
  );
};

export default listingpage;
