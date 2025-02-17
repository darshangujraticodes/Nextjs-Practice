import { NextRequest, NextResponse } from "next/server";

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

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  /*
    while fetching individual data using id 

    Step 1 : First we have to check whether requested data is proper number              
    Step 2 : Then we will check does the data exist
    Step 3 : If yes will return the db value or else will return not found value 

    */

  if (params.id > 10)
    return NextResponse.json({ error: "User Not Found !" }, { status: 404 });

  return NextResponse.json(userData);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  /*
    step 1 : validate the request body value
    step 2 : If invalid return 400
    step 3 : fetch the user with given id
    step 4 : if user does not exist return 404
    step 5 : update the user
    step 6 : Return the update user data

    */

  const body = await request.json();
  if (!body.name)
    // 400 -> Bad Request
    return NextResponse.json({ error: "Name is Required !" }, { status: 400 });

  if (params.id > 15)
    // 404 -> Not Found
    return NextResponse.json(
      { error: " User does not exist !" },
      { status: 404 }
    );

  return NextResponse.json({ id: params.id, name: body.name });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  /*
    step 1 : Fetch the user form DB
    step 2 : if not found , return 404
    step 3 : if found , delete the user
    step 3 : Return 200
    */

  const body = await request.json();

  if (!body.name)
    return NextResponse.json({ error: "Name is Required!" }, { status: 400 });

  if (params.id > 10)
    return NextResponse.json(
      { error: "User Does Not Exist!" },
      { status: 404 }
    );

  return NextResponse.json("User Deleted Successfully!");
}
