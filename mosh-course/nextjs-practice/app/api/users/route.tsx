import { NextRequest, NextResponse } from "next/server";
import { apiData } from "./apiData";
import schema from "./schema";

/*

API has 4 Operation
GET -> To fetch Dataa
PUT -> To Update Data note: It replace whole object data with new data | use only when to send full object
PATCH => To Update data note : it replace only selected value | use only when u want to update specific fields
POST -> Insert New Data 
DELETE -> Deleted existing data 

*/

export function GET() {
  return NextResponse.json(apiData);
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
    return NextResponse.json(validation.error.message, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
