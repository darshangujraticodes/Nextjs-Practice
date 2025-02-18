import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";

interface Props {
  params: { id: number };
}

const userData = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
];

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  /*
    while fetching individual data using id 

    Step 1 : First we have to check whether requested data is proper number              
    Step 2 : Then we will check does the data exist
    Step 3 : If yes will return the db value or else will return not found value 

    */

  // return NextResponse.json(userData);

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!user)
    return NextResponse.json({ error: "User Not Found !" }, { status: 404 });

  return NextResponse.json(user, { status: 200 });
}

/*
    step 1 : fetch the user response and validate it with zod
    step 2 : if it is proper then check whether data is there or not in database
    step 3 : if it is not found return 404 not found response 
    step 4 : if it is found then execute update query and return data updated successfully response
    */

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!user)
    return NextResponse.json(
      { error: " User Doesn't exist !" },
      { status: 404 }
    );

  const updateUser = await prisma.user.update({
    where: {
      id: parseInt(params.id),
    },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  const newupdateVal = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  return NextResponse.json(
    { status: "User Data Updated Successfully", user: newupdateVal },
    { status: 200 }
  );
}

/*
    step 1 : fetch the user response and validate it 
    step 2 : if it is proper then check wheter data is there or not in database
    step 3 : if it is not found return 404 not found response 
    step 3 : if it is found then execute delete query and return data deleted successfully response
    */

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!user)
    return NextResponse.json(
      { error: " User Doesn't exist !" },
      { status: 404 }
    );

  await prisma.user.delete({
    where: {
      id: parseInt(params.id),
    },
  });

  return NextResponse.json({ status: "User Data Deleted Successfully!" });
}
