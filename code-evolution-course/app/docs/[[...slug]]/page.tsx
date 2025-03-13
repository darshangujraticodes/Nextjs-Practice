import React from "react";

const docsPage = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const { slug } = await params;

  return (
    <section className="mt-5">
      <div className="container">
        <h1>Catch All Segment | Docs Slug home page </h1>
        {slug ? (
          <div>
            <h2> RoutePath 1 = {slug[0]}</h2>
            <h2> RoutePath 2 = {slug[1]} </h2>
            <h2> RoutePath 3 = {slug[2]} </h2>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default docsPage;
