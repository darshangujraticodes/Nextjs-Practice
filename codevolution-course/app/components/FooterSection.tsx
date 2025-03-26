import Link from "next/link";
import React from "react";

const FooterSection = () => {
  return (
    <footer className="mt-8">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Link href="/"> Home </Link> <br />
            <Link href="/about"> About </Link> <br />
            <Link href="/products"> Products </Link>
          </div>
          <div className="col-4"></div>
          <div className="col-4"></div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
