import { log } from "console";
import { data } from "../data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params;

  const userInfo = data.find((info) => info.id === parseInt(userId));

  if (userInfo) {
    return Response.json(userInfo);
  } else {
    return new Response("User Not Found", {
      headers: {
        "Content-Type": "application/json",
      },
      status: 404,
    });
  }
}

export async function PATCH(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ userId: string }>;
  }
) {
  const { userId } = await params;

  const body = await request.json();

  const { name, email } = body;

  const findIndexVal = data.findIndex((info) => info.id === parseInt(userId));

  // console.log("index value = ", findIndexVal);

  if (findIndexVal === -1) {
    return new Response("User Not Found! ", {
      headers: {
        "Content-Type": "application/json",
      },
      status: 400,
    });
  }

  if (!name || !email) {
    console.log("  Executed ... ");

    return new Response("Enter Valid User Data! ", {
      headers: {
        "Content-Type": "application/json",
      },
      status: 400,
    });
  }

  // noob type to update array object
  // data[findIndexVal].name = name;
  // data[findIndexVal].email = email;

  // legend type to update array object

  const newData = data.map((info) => {
    if (info.id === parseInt(userId)) {
      return { ...info, name: name, email: email };
    } else {
      return { ...info };
    }
  });

  console.log("PATCH Request =", newData);

  return Response.json("User Data Updated Successfully");
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params;

  if (!userId || parseInt(userId) > data.length) {
    return new Response("User Not Found");
  }

  const newData = data.filter((info) => info.id != parseInt(userId));

  console.log("DELETE Request = ", newData);

  return new Response("User Data Deleted Successfully !");
}
