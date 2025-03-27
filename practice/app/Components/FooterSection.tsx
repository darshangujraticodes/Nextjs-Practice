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
                  {" "}
                  Home{" "}
                </Link>{" "}
              </p>

              <p className="mb-2">
                <Link href="/about"> About </Link>
              </p>

              <p>
                <Link href="/contact"> Contact </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
