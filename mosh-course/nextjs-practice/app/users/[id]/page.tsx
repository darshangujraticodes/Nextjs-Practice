import React from "react";

interface Props {
  params: { id: number };
}

const UserDetailPage = ({ params: { id } }: Props) => {
  return (
    <div className="text-3xl text-center mt-3">
      <h1>Dynamic Routing User ID : {id}</h1>
    </div>
  );
};

export default UserDetailPage;
