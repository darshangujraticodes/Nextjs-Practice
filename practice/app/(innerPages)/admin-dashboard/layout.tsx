import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard ",
  description:
    "Admin Dashboard Panel for controlling, managing and operating data",
};

// Note in Layout we are passing children prop but we are declaring folder name not page function name

export default function DashoboardLayout({
  children,
  users,
  revenue,
  notification,
}: Readonly<{
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notification: React.ReactNode;
}>) {
  return (
    <div className="container">
      {children}

      <div className="row mt-5">
        <div className="col-4">
          <div className="flex  flex-col">
            <div>{users}</div>
            <div>{revenue}</div>
          </div>
        </div>
        <div className="col-4">
          <div>{notification}</div>
        </div>
      </div>
    </div>
  );
}
