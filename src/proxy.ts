import { NextRequest, NextResponse } from "next/server";
import { checkTokenExpiration } from "./shared/utils/checkTokenExpiration";

const publicRoutes = ["/","/login", "/register", "/forgot-password", "/processing"];
const cookieHeader = process.env.NEXT_PUBLIC_COOKIES_HEADER || "my-token-header"

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const sessionData = request.cookies.get(cookieHeader);
  const isTokenExpired = checkTokenExpiration(sessionData?.value || "");
  const hasValidSession = sessionData?.value && !isTokenExpired;

  // If user has valid session and tries to access public routes, redirect to home
  if (publicRoutes.includes(pathname)) {
    if (hasValidSession) {
      const homeUrl = new URL("/", request.url);
      return NextResponse.redirect(homeUrl);
    }
    return NextResponse.next();
  }

  // Protected routes - require valid session
  if (!hasValidSession) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api).*)"],
};
