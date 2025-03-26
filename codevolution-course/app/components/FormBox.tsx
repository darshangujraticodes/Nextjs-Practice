import React from "react";

const FormBox = ({ type }: { type: string }) => {
  return (
    <div className=" formBoxWrap  ">
      <form action="">
        {type == "register" ? (
          <input
            type="text"
            className="my-2 border px-2 py-1 rounded text-xl"
            placeholder="Enter your name"
          />
        ) : null}
        <br />
        <input
          type="email"
          className="my-2  border px-2 py-1 rounded text-xl"
          placeholder="Enter your email"
        />{" "}
        <br />
        <input
          type="password"
          className="my-2 border px-2 py-1 rounded text-xl"
          placeholder="Enter your password"
        />{" "}
        <br />
        <button className="mt-3 text-xl">Submit</button>
      </form>
    </div>
  );
};

export default FormBox;
