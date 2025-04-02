import { data } from "../data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params;

  const userInfo = data.filter((info) => info.id === parseInt(userId));

  if (userInfo.length > 0) {
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
