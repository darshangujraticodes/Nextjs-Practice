import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import apiData from "../productApiData";
import { log } from "console";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const fetchId = params.id;

  if (params.id > apiData.length) {
    return NextResponse.json(
      { error: "Requested Product Does Not Exist!" },
      { status: 404 }
    );
  }

  const data = apiData.filter((item) => item.id == fetchId);

  return NextResponse.json(data);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();

  const zodValidation = schema.safeParse(body);

  if (!zodValidation.success)
    return NextResponse.json(zodValidation.error.errors, { status: 400 });

  if (params.id > apiData.length)
    return NextResponse.json(
      { error: "Requested Product Doesn't Exist!" },
      { status: 404 }
    );

  const updateProductData = apiData.map((item) =>
    item.id == params.id ? { id: params.id, ...body } : item
  );

  return NextResponse.json(updateProductData, { status: 200 });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > apiData.length) {
    return NextResponse.json(
      { error: "Requested Product Does Not Exist!" },
      { status: 404 }
    );
  }

  const newApiData = apiData.filter((item) => item.id != params.id);

  // console.log(deleteData);

  return NextResponse.json(
    { status: "Product Data Deleted Successfully!" },
    { status: 200 }
  );
}
