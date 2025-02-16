import { log } from "console";
import Link from "next/link";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

interface sortObject {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const UserTable = async ({ sortOrder = "name" }: Props) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users2", {
    next: { revalidate: 10 },
  });
  const result: User[] = await response.json();
  // User[] it define user data of array

  console.log(result);

  let sortedData;
  if (sortOrder === "name") {
    sortedData = result.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortOrder === "email") {
    sortedData = result.sort((a, b) => a.email.localeCompare(b.email));
  }

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData?.map((user) => (
            <tr className="" key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
