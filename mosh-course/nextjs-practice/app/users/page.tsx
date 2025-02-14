import Link from "next/link";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const user = "Harry Potter";

  // API Data is always fetch in SSR section

  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result: User[] = await response.json();
  // User[] it define user data of array

  return (
    <>
      <div>
        <h2 className=" capitalize font-medium text-3xl text-center mt-5">
          Profile Username : {user}
        </h2>

        <div className="navBtnWrap  flex justify-center  mt-5 items-center ">
          <Link
            href="/"
            className=" bg-stone-800 text-white p-3 rounded-lg mx-3 font-semibold text-xl "
          >
            Return Home
          </Link>
        </div>

        <div className="p-5">
          <div>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {result?.map((user) => (
                  <tr className="" key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
