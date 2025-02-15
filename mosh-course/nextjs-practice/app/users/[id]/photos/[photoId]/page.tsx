import React from "react";

interface Props {
  params: { id: number; name: string; email: string; photoId: number };
}

const PhotoDetails = ({
  params: { id, photoId, name = "Harry Potter", email = "test@gmail.com" },
}: Props) => {
  return (
    <div>
      <h1 className="text-center mt-3  text-2xl ">
        PhotoDetails User :{" "}
        {`ID = ${id}, Photo ID =   ${photoId} , Name = ${name}, Email =  ${email}  `}{" "}
      </h1>

      <h3 className="mt-3 text-2xl text-center">
        URL Path : {` users/${id}/photos/${photoId}   `}{" "}
      </h3>
    </div>
  );
};

export default PhotoDetails;
