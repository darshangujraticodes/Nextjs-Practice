import React from "react";

export const metadata = {
  title: "MyTripList Best Places Details to visit once in a lifetime. ",
  description:
    "Discover the best places to visit once in a lifetime! From breathtaking natural wonders to iconic landmarks, explore must-visit destinations that offer unique experiences, rich culture, and unforgettable adventures. Start planning your dream trip today!",
};

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <div>{children}</div>;
};

export default layout;
