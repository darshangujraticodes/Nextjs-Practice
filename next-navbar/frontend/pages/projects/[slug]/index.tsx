import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const DyanmicHomeBanner = dynamic(
  () => import("@/components/ProjectDetail/HomeBanner"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const DyanmicProjectOverview = dynamic(
  () => import("@/components/ProjectDetail/ProjectOverview"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const DyanmicOnGoingProject = dynamic(
  () => import("@/components/ProjectDetail/OnGoingProject"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const DyanmicProjectAmenities = dynamic(
  () => import("@/components/ProjectDetail/ProjectAmenities"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const DyanmicFloorPlan = dynamic(
  () => import("@/components/ProjectDetail/ProjectFloorPlan"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const DyanmicLocation = dynamic(
  () => import("@/components/ProjectDetail/ProjectLocationAdv"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const DyanmicGallery = dynamic(
  () => import("@/components/ProjectDetail/ProjectGallery"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const DyanmicConstruction = dynamic(
  () => import("@/components/ProjectDetail/ConstructionUpdate"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const DyanmicQrMaharera = dynamic(
  () => import("@/components/ProjectDetail/QrMaharera"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const DyanmicHomeTestimonial = dynamic(
  () => import("@/components/Home/HomeTestimonial"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const DyanmicHomeNews = dynamic(() => import("@/components/Home/HomeNews"), {
  loading: () => <p>Loading...</p>,
});
const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Sharvani HomePage</title>
      </Head>
      <div className="min-h-screen">
        <DyanmicHomeBanner />
        <DyanmicProjectOverview />
        <DyanmicOnGoingProject />
        <DyanmicProjectAmenities />
        <DyanmicFloorPlan />
        <DyanmicLocation />
        <DyanmicGallery />
        <DyanmicConstruction />
        <DyanmicQrMaharera />
      </div>
    </>
  );
};

export default Index;
