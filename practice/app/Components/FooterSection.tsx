import Link from "next/link";
import React from "react";

const FooterSection = () => {
  return (
    <footer className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="">
              <p className="mb-2">
                <Link href="/" className="mb-3">
                  Home
                </Link>
              </p>

              <p className="mb-2">
                <Link href="/about"> About </Link>
              </p>

              <p className="mb-2">
                <Link href="/contact"> Contact </Link>
              </p>

              <p>
                <Link href="/admin-dashboard"> Admin Dashboard </Link>
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="">
              <p className="mb-2">
                <Link href="/api-handling" className="mb-3">
                  Api Handling
                </Link>
              </p>

              <p className="mb-2">
                <Link href="/f1" className="mb-3">
                  Intercepting Routes
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
