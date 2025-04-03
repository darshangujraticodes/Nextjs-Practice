import { data } from "./data";

type UserType = {
  id?: number;
  name: String;
  email: String;
};

export async function GET() {
  return Response.json(data);
}

export async function POST(request: Request) {
  const user = await request.json();

  // console.log(user);

  const newUser: UserType = {
    id: data.length + 1,
    name: user.name,
    email: user.email,
  };

  data.push(newUser);

  return new Response(JSON.stringify(newUser), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
