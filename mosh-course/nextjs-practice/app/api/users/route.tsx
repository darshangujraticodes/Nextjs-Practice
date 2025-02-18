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

export async function POST(request: NextRequest) {
  const body = await request.json();
  /*

  In Actual Post Methods 
    step 1 : we validate the recived body message  
    Step 2 : if invalid return 400
    Step 3 : else return body value  
  */

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
