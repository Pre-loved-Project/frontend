import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import * as cookie from "cookie";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function POST() {
  const cookieHandler = await cookies();
  const refreshToken = cookieHandler.get("refreshToken")?.value;

  if (!refreshToken) {
    return NextResponse.json(
      { message: "No refresh token provided" },
      { status: 401 },
    );
  }

  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  };

  const backendRes = await fetch(`${BASE_URL}/auth/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `refreshToken=${refreshToken}`,
    },
  });

  if (!backendRes.ok) {
    return NextResponse.json(
      { message: "Invalid refresh token" },
      { status: 401 },
    );
  }

  const { accessToken } = await backendRes.json();

  const res = NextResponse.json({ accessToken });

  cookieHandler.set({
    name: "accessToken",
    value: accessToken,
    ...cookieOptions,
    maxAge: 60 * 60 * 2,
  });

  const setCookieHeaders = backendRes.headers.getSetCookie?.() ?? [];

  for (const c of setCookieHeaders) {
    const parsed = cookie.parse(c);

    if (parsed.refreshToken) {
      const maxAge = parsed["Max-Age"]
        ? parseInt(parsed["Max-Age"], 10)
        : 60 * 60 * 24 * 30;

      cookieHandler.set({
        name: "refreshToken",
        value: parsed.refreshToken,
        ...cookieOptions,
        maxAge,
      });
    }
  }

  return res;
}
