import { NextRequest, NextResponse } from "next/server";

const BACKEND = process.env.NEXT_PUBLIC_API_URL as string;
const REFRESH_PATH = "/auth/refresh";

export const GET = proxy;
export const POST = proxy;
export const PUT = proxy;
export const PATCH = proxy;
export const DELETE = proxy;

async function proxy(
  req: NextRequest,
  ctx: { params: Promise<{ path: string[] }> },
) {
  if (!req.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  // 프록시 대상 경로 생성
  const { path: rawPath } = await ctx.params;
  const path = "/" + rawPath.join("/");
  const backendURL = new URL(`${BACKEND}/api${path}`);

  req.nextUrl.searchParams.forEach((v, k) => {
    backendURL.searchParams.set(k, v);
  });

  const headers = new Headers(req.headers);
  headers.delete("host");
  headers.delete("content-length");

  const accessToken = req.cookies.get("accessToken")?.value;
  if (accessToken && path !== REFRESH_PATH) {
    headers.set("Authorization", `Bearer ${accessToken}`);
  }
  // console.log(accessToken);

  // 실제 백엔드 요청
  const initialInit: RequestInit = {
    method: req.method,
    headers,
    body: req.body,
    redirect: "manual",
    // @ts-expect-error — RequestInit 타입에는 없음
    duplex: "half",
  };

  let backendRes = await fetch(backendURL.toString(), initialInit);

  // 토큰 만료 → refresh 후 재요청
  if (backendRes.status === 401) {
    const refreshToken = req.cookies.get("refreshToken")?.value ?? "";

    const refreshRes = await fetch(`${BACKEND}${REFRESH_PATH}`, {
      method: "POST",
      headers: { Cookie: `refreshToken=${refreshToken}` },
    });

    if (!refreshRes.ok) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { accessToken: newAccessToken } = await refreshRes.json();
    // console.log("Refreshed accessToken:", newAccessToken);

    const retryHeaders = new Headers(headers);
    retryHeaders.set("Authorization", `Bearer ${newAccessToken}`);

    const retryInit: RequestInit = {
      method: req.method,
      headers: retryHeaders,
      body: req.body,
      redirect: "manual",
      // @ts-expect-error -- duplex required for Node fetch streaming
      duplex: "half",
    };

    backendRes = await fetch(backendURL.toString(), retryInit);

    // accessToken 쿠키 갱신
    const response = new NextResponse(backendRes.body, {
      status: backendRes.status,
    });

    response.cookies.set({
      name: "accessToken",
      value: newAccessToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60,
    });

    return response;
  }

  // 일반 응답 그대로 반환
  return new NextResponse(backendRes.body, {
    status: backendRes.status,
  });
}
