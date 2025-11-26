import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import * as cookie from "cookie";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const backendRes = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!backendRes.ok) {
    const errorData = await backendRes.json();
    return NextResponse.json(errorData, { status: backendRes.status });
  }

  const { accessToken } = await backendRes.json();

  const cookieHandler = await cookies();

  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  };

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

  return NextResponse.json({ message: "Login successful", accessToken });
}
