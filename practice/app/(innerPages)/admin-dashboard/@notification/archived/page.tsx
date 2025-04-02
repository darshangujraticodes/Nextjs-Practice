import Link from "next/link";
import React from "react";

const ArchivedNotification = () => {
  return (
    <div className="dashboardCard relative h-[400px]">
      <p className="text-center my-3">Archived</p>
      <p className="absolute bottom-5 right-5  underline ">
        <Link href="/admin-dashboard">Default</Link>
      </p>
    </div>
  );
};

export default ArchivedNotification;
