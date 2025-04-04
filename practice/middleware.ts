import { NextResponse, NextRequest } from "next/server";

const isLoggedIn = true;

export function middleware(request: NextRequest) {
  if (!isLoggedIn && request.nextUrl.pathname.startsWith("/")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: "/userdata",
};
