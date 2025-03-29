import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const DyanmicHomeBanner = dynamic(
  () => import("@/components/AboutUs/HomeBanner"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const DyanmicHomeOverview = dynamic(
  () => import("@/components/AboutUs/HomeOverview"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const DyanmicOurDirectors = dynamic(
  () => import("@/components/AboutUs/OurDirectors"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const DyanmicOurTeam = dynamic(() => import("@/components/AboutUs/OurTeam"), {
  loading: () => <p>Loading...</p>,
});

const DyanmicHomeAwards = dynamic(
  () => import("@/components/Home/HomeAwards"),
  {
    loading: () => <p>Loading...</p>,
  }
);

// const DyanmicMission = dynamic(
//   () => import("@/components/AboutUs/AboutMission"),
//   {
//     loading: () => <p>Loading...</p>,
//   }
// );

const DyanmicAboutTestimonial = dynamic(
  () => import("@/components/AboutUs/AboutTestimonial"),
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
        <DyanmicHomeOverview />
        <DyanmicOurDirectors />
        <DyanmicOurTeam />
        {/* <DyanmicMission /> */}
        <DyanmicAboutTestimonial />
        {/* <DyanmicHomeNews /> */}
      </div>
    </>
  );
};

export default Index;
