import React from "react";

const mainNotFoundPage = () => {
  return (
    <section className="">
      <div className="flex  h-[100vh] justify-center items-center ">
        <div>
          <h1 className="text-center  mb-3 text-3xl">404 | Page Not Found</h1>
          <p className="text-center">Requested Page Does Not Exist!</p>
        </div>
      </div>
    </section>
  );
};

export default mainNotFoundPage;
