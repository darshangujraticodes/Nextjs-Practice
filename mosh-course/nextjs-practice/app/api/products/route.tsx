import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import apiData from "./productApiData";

export function GET(request: NextRequest) {
  return NextResponse.json(apiData);
}

export async function POST(request: NextRequest) {
  const newData = await request.json();
  const zodValidation = schema.safeParse(newData);

  if (!zodValidation.success)
    return NextResponse.json(zodValidation.error.errors, { status: 401 });

  apiData.push({ id: apiData.length + 1, ...newData });

  return NextResponse.json(apiData, { status: 201 });
}
