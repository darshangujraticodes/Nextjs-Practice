"use client";

import ClientApiCall from "@/app/Components/ClientApiCall";
import ServerApiCall from "@/app/Components/ServerApiCall";
import { log } from "console";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ApiLoader from "./loading";

interface UserType {
  id: number;
  name: string;
  username?: string;
  email?: string;
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat?: string;
      lng?: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
}

const page = () => {
  const [userData, setUserData] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.log("Error ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-8 container">
      <h1 className="text-4xl text-center ">API Routes Handling in NextJS </h1>

      <div>
        <Link href="/userdata/api"> GET Request - all user </Link> <br />
        <Link href="/userdata/3"> GET Request - 5th user </Link>
      </div>

      <div className="mt-5">
        <h3 className="text-2xl">
          Clint Side API Calling with Loader : <br />
        </h3>

        <div>
          {loading ? (
            <ApiLoader />
          ) : (
            userData?.map((info) => (
              <p key={info.id} className="text-indigo-500">
                {info.id} - {info.username}{" "}
              </p>
            ))
          )}
        </div>
      </div>

      {/* <div className="mt-5">
        Clint Side API Calling : <br />
        <ClientApiCall />
      </div> */}

      <div className="mt-5">
        Server Side API Calling : <br />
        {/* <ServerApiCall /> */}
      </div>
    </div>
  );
};

export default page;
