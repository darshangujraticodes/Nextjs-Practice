"use client";

import React, { useEffect, useState } from "react";

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

const ClientApiCall = () => {
  const [userData, setUserData] = useState<UserType[]>([]);

  useEffect(() => {
    const apiDataCall = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.log("Api Fetch Error", error);
      }
    };

    apiDataCall();
  }, []);

  return (
    <>
      {userData ? (
        <div>
          {/* <p>
            <span>ID</span> <span className="ml-4">Name</span>{" "}
          </p> */}

          {userData?.map((item) => (
            <p key={item.id}>{` ${item.id} - ${item.name} `}</p>
          ))}
        </div>
      ) : (
        <div>
          <p>Loading ...</p>
        </div>
      )}
    </>
  );
};

export default ClientApiCall;
