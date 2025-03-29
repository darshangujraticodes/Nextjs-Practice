import React from "react";
import dynamic from "next/dynamic";

const DynamicContactBanner = dynamic(
  () => import("@/components/Contact/ContactBanner"),
  {
    loading: () => <p>loading</p>,
  }
);

const DynamicContactForm = dynamic(
  () => import("@/components/Contact/ContactForm"),
  {
    loading: () => <p>loading</p>,
  }
);

function contact() {
  return (
    <>
      <DynamicContactBanner />
      <DynamicContactForm />
    </>
  );
}

export default contact;
