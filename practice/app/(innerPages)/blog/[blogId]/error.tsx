"use client";
import { useRouter } from "next/navigation";
import React, { startTransition, useTransition } from "react";

type ErrorType = {
  error: Error;
  reset: () => void;
};

const ErrorBoundary = ({ error, reset }: ErrorType) => {
  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="mt-8">
      {/* <h1 className="text-4xl text-center ">Error in Loading Blog!</h1> */}
      <h1 className="text-4xl text-center ">{error.message}</h1>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => reset()}
          className="bg-indigo-500 text-white px-3 py-2 mx-3 rounded-2xl font-semibold"
        >
          Reset()
        </button>

        <button
          onClick={() => reload()}
          className="bg-indigo-500 text-white px-3 py-2 mx-3 rounded-2xl font-semibold"
        >
          Reload()
        </button>
      </div>
    </div>
  );
};

export default ErrorBoundary;
