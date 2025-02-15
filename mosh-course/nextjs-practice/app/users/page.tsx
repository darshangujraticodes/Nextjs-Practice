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

  /*
In SSR we do not require statemanagement like requireed in react js 

fetch property  next : { revalidate:10 }  => help to cache the api data 

revalidate : 10 -> it means fetched data will be cached for 10 seconds and then refetched on the next request.

when user want to display dynamic data every time new fresh content
{  next : { 'no-store' }  }
eg cricbuzz site display every time new updated score   

  */

  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
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
            <table className="table table-bordered">
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
