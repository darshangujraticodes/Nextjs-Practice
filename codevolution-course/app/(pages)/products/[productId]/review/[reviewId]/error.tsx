"use client";
// note : error page should always be in client side rendering otherwise will lead to build error

import React, { startTransition } from "react";
import { useRouter } from "next/navigation";

const ReviewErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  // handling error by refreshing complete webapp without component reload

  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <section>
      <div className="container">
        <h2 className="text-2xl text-center">OOP's Facing Some Issue</h2>
        <p className="text-center mt-3">{error.message}</p>

        <div className="flex  justify-center ">
          <button
            onClick={() => reload()}
            className="text-xl  mt-5 rounded-md px-3 py-2 bg-[#262626] text-[#f5f5f5] "
          >
            Try Again
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewErrorBoundary;
