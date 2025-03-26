import React from "react";

const adminDashboardPage = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div>
              <h2 className="text-2xl">User Analytics</h2>
            </div>
            <div>
              <h2 className="text-2xl">Revenue Metrics</h2>
            </div>
          </div>
          <div className="col-4">
            <h2 className="text-2xl">Notifcation</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default adminDashboardPage;
