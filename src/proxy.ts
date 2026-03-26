////////////////////////////////////////////////////////////////////
//
// This is for All PUBLIC Routes and list manually the PROTECTED routes Setting
//
////////////////////////////////////////////////////////////////////
import { NextRequest, NextResponse } from "next/server";
import { checkTokenExpiration } from "./shared/utils/checkTokenExpiration";

const cookieHeader = process.env.NEXT_PUBLIC_COOKIES_HEADER || "my-token-header";

/**
 * Paths that require a logged-in session (prefix match).
 * Example: "/dashboard" protects /dashboard, /dashboard/settings, etc.
 */
const protectedPrefixes = ["/dashboard"];

/**
 * Guest-only auth pages — logged-in users are sent to the app (optional UX).
 */
const authRoutes = ["/login", "/register", "/forgot-password", "/processing"];

/** Where to send users who are already logged in but hit an auth route */
const AFTER_LOGIN_REDIRECT = "/dashboard";

function isProtectedPath(pathname: string): boolean {
  return protectedPrefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );
}

function isAuthRoute(pathname: string): boolean {
  return authRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const sessionData = request.cookies.get(cookieHeader);
  const isTokenExpired = checkTokenExpiration(sessionData?.value || "");
  const hasValidSession = Boolean(sessionData?.value && !isTokenExpired);

  // Logged-in user on login/register/etc. → app area
  if (hasValidSession && isAuthRoute(pathname)) {
    return NextResponse.redirect(new URL(AFTER_LOGIN_REDIRECT, request.url));
  }

  // Default: allow (public site). Only protected prefixes need a session.
  if (!isProtectedPath(pathname)) {
    return NextResponse.next();
  }

  if (!hasValidSession) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?|ttf|eot|otf|json|txt|xml|webmanifest)$).*)",
  ],
};


////////////////////////////////////////////////////////////////////
//
// This is for All PROTECTED Routes and list manually the PUBLIC routes Setting
//
////////////////////////////////////////////////////////////////////

// import { NextRequest, NextResponse } from "next/server";
// import { checkTokenExpiration } from "./shared/utils/checkTokenExpiration";

// const publicRoutes = ["/","/login", "/register", "/forgot-password", "/processing"];
// const cookieHeader = process.env.NEXT_PUBLIC_COOKIES_HEADER || "my-token-header"

// export function proxy(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   const sessionData = request.cookies.get(cookieHeader);
//   const isTokenExpired = checkTokenExpiration(sessionData?.value || "");
//   const hasValidSession = sessionData?.value && !isTokenExpired;

//   // If user has valid session and tries to access public routes, redirect to home
//   if (publicRoutes.includes(pathname)) {
//     if (hasValidSession) {
//       const homeUrl = new URL("/", request.url);
//       return NextResponse.redirect(homeUrl);
//     }
//     return NextResponse.next();
//   }

//   // Protected routes - require valid session
//   if (!hasValidSession) {
//     const loginUrl = new URL("/login", request.url);
//     return NextResponse.redirect(loginUrl);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!_next/static|_next/image|favicon.ico|api).*)"],
// };
