// notes

// API Data is always fetch in SSR section

/*
In SSR we do not require statemanagement like requireed in react js 

fetch property  next : { revalidate:10 }  => help to cache the api data 

revalidate : 10 -> it means fetched data will be cached for 10 seconds and then refetched on the next request.

when user want to display dynamic data every time new fresh content
{  next : { 'no-store' }  }
eg cricbuzz site display every time new updated score   

  */

import Link from "next/link";
import React from "react";
import UserTable from "./UserTable";

interface Props {
  params: {
    slug: string[];
  };
  searchParams: {
    sortOrder: string;
  };
}

const UsersPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  // const user = "Harry Potter";

  return (
    <>
      <div>
        <h2 className=" capitalize font-medium text-3xl text-center mt-5">
          {/* Profile Username : {user} */}
        </h2>

        <div className="navBtnWrap  flex justify-center  mt-5 items-center ">
          <Link
            href="/"
            className=" bg-stone-800 text-white p-3 rounded-lg mx-3 font-semibold text-xl "
          >
            Return Home
          </Link>

          <Link
            href="/users/5"
            className=" bg-stone-800 text-white p-3 rounded-lg mx-3 font-semibold text-xl "
          >
            Check User Info of ID : 5
          </Link>

          <Link
            href="/users/5"
            className=" bg-stone-800 text-white p-3 rounded-lg mx-3 font-semibold text-xl "
          >
            Check User Info of ID : 15
          </Link>
        </div>

        <div className="mt-5">
          <p className="text-2xl text-center">
            Dynamic Routing (Query String Parameters) : /users?sortOrder=
            {sortOrder}
          </p>
        </div>

        <div className="p-5">
          <UserTable sortOrder={sortOrder} />
        </div>
      </div>
    </>
  );
};

export default UsersPage;
