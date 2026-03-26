import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://ischool.gccis.rit.edu/api/"

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params; // may have multiple nested paths
  const { search } = req.nextUrl; // preserves search params
  const targetPath = path.join("/");
  const targetUrl = `${BASE_URL}/${targetPath}${search}`;

  try {
    const upstream = await fetch(targetUrl, { cache: "no-store" });

    if (!upstream.ok) {
      return NextResponse.json(
        { error: "Upstream error" },
        { status: upstream.status }
      );
    }

    const data = await upstream.json();
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}