import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <>
      <div className="flex">
        <aside className="p-5 mr-5 bg-violet-600  text-white ">
          {" "}
          Admin Aside Layout Panel{" "}
        </aside>
        <main> {children} </main>
      </div>
    </>
  );
};

export default layout;
