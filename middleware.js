import { NextResponse } from "next/server";

const AUTH_COOKIE = "nimad_admin_session";

function decodeSession(value) {
  if (!value) {
    return null;
  }

  try {
    const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized.padEnd(normalized.length + ((4 - (normalized.length % 4)) % 4), "=");
    return JSON.parse(atob(padded));
  } catch {
    return null;
  }
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/admin") || pathname === "/admin/login") {
    return NextResponse.next();
  }

  const session = decodeSession(request.cookies.get(AUTH_COOKIE)?.value);

  if (!session) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  const routePermissions = [
    { prefix: "/admin/inventory", permission: "inventory" },
    { prefix: "/admin/products", permission: "products" },
    { prefix: "/admin/pos", permission: "billing" },
    { prefix: "/admin/barcode", permission: "products" },
    { prefix: "/admin/qrcode", permission: "products" },
  ];
  const protectedRoute = routePermissions.find((route) => pathname.startsWith(route.prefix));

  if (protectedRoute && !session.permissions?.includes(protectedRoute.permission)) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
