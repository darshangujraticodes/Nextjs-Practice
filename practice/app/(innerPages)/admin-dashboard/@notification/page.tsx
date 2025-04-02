import Link from "next/link";

const NotificationPage = () => {
  return (
    <div className="dashboardCard relative h-[400px]">
      <p className="text-center my-3">Notification</p>
      <p className="absolute bottom-5 right-5  underline ">
        <Link href="/admin-dashboard/archived">Archived</Link>
      </p>
    </div>
  );
};

export default NotificationPage;
