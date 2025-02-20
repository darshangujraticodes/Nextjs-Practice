import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import todoSchema from "./schema";

// const todoApiData = [
//   {
//     id: 1,
//     task: "Reading Books",
//     assignor: "self",
//     assignee: "self",
//     priority: "High",
//     status: "pending",
//     time: "26 jan 2021",
//     category: "home",
//   },
//   {
//     id: 2,
//     task: "Shopping",
//     priority: "Low",
//   },

//   {
//     id: 3,
//     task: "Workout",
//     priority: "medium",
//   },

//   {
//     id: 4,
//     task: "Coding Practice",
//     priority: "critical",
//   },
// ];

export async function GET(request: NextRequest) {
  // note : db table name should be same
  // note : ifd some time typescript error comes of findMany() cannot be undefine restart the vs code stop local server and run "npm run dev" again
  const fetchData = await prisma.todos.findMany();

  return NextResponse.json(fetchData, { status: 200 });
}
