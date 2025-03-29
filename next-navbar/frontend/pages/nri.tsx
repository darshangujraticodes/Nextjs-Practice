import React from "react";

import dynamic from "next/dynamic";

const DynamicNriBanner = dynamic(() => import("@/components/Nri/NriBanner"), {
  loading: () => <p>loading</p>,
});

const DynamicNriFaq = dynamic(() => import("@/components/Nri/NriFaq"), {
  loading: () => <p>loading</p>,
});

const nri: React.FC = () => {
  return (
    <>
      <DynamicNriBanner />
      <DynamicNriFaq />
    </>
  );
};

export default nri;
