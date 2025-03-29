import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const DyanmicHomeBanner = dynamic(
    () => import('@/components/Home/HomeBanner'),
    {
        loading: () => <p>Loading...</p>,
    }
)
const DyanmicHomeOverview = dynamic(
    () => import('@/components/Home/HomeOverview'),
    {
        loading: () => <p>Loading...</p>,
    }
)

const DyanmicHomeAchive = dynamic(
    () => import('@/components/Home/HomeAchive'),
    {
        loading: () => <p>Loading...</p>,
    }
)

const DyanmicHomePRojectStack = dynamic(
    () => import('@/components/Home/HomePRojectStack'),
    {
        loading: () => <p>Loading...</p>,
    }
)

const DyanmicHomeAwards = dynamic(
    () => import('@/components/Home/HomeAwards'),
    {
        loading: () => <p>Loading...</p>,
    }
)

const DyanmicHomeTestimonial = dynamic(
    () => import('@/components/Home/HomeTestimonial'),
    {
        loading: () => <p>Loading...</p>,
    }
)


const DyanmicHomeNews = dynamic(
    () => import('@/components/Home/HomeNews'),
    {
        loading: () => <p>Loading...</p>,
    }
)
const Index: React.FC = () => {
    return (
        <>
            <Head>
                <title>Sharvani HomePage</title>
            </Head>
            <div className="min-h-screen">
                <DyanmicHomeBanner />
                <DyanmicHomeOverview />
                <DyanmicHomeAchive />
                <DyanmicHomePRojectStack />
                <DyanmicHomeAwards />
                <DyanmicHomeTestimonial />
                <DyanmicHomeNews />

            </div>
        </>
    );
};

export default Index;