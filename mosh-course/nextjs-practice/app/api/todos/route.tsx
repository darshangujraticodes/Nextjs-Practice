import { NextRequest, NextResponse } from "next/server";

const todoApiData = [
  {
    id: 1,
    task: "Reading Books",
    priority: "High",
  },
  {
    id: 2,
    task: "Shopping",
    priority: "Low",
  },

  {
    id: 3,
    task: "Workout",
    priority: "Very High",
  },
];

export function GET() {
  return NextResponse.json(todoApiData);
}
