/*

API has 4 Operation
GET -> To fetch Dataa
PUT -> To Update Data note: It replace whole object data with new data | use only when to send full object
PATCH => To Update data note : it replace only selected value | use only when u want to update specific fields
POST -> Insert New Data 
DELETE -> Deleted existing data 

*/

import { NextRequest, NextResponse } from "next/server";
import { apiData } from "./apiData";
import schema from "./schema";
import { prisma } from "@/prisma/client";
import { error } from "console";

export async function GET() {
  const usersData = await prisma.user.findMany({});

  return NextResponse.json(usersData, { status: 200 });
}

/*
  In Actual Post Methods action steps
    step 1 : fetch the user response and validate it, if it is proper then move to next step 
    Step 2 : Then check whether our new entry is clashing with pre exisiting unique data value, if yes return value already exist 
    Step 3 : So uptill now all things is proper so execute insert query of database
    step 4 : return response data inserted successfully  
  */

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (user)
    return NextResponse.json({ error: "User Already Exist!" }, { status: 400 });

  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
    },
  });

  return NextResponse.json(
    { status: "New User Created Successfully!", info: newUser },
    { status: 201 }
  );
}
