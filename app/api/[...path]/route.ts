import { type NextRequest, NextResponse } from "next/server";

/**
 * Next.js Server APIs for Handling CORS
 */

const BASE_URL = process.env.BASE_URL!;

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params; // may have multiple nested paths
  const { search } = req.nextUrl; // preserves search params
  const targetPath = path.join("/");
  const targetUrl = `${BASE_URL}${targetPath}${search}`;

  try {
    console.log("Proxying request to:", targetUrl);
    const upstream = await fetch(targetUrl, { cache: "no-store" });

    if (!upstream.ok) {
      return NextResponse.json(
        { error: "Upstream error" },
        { status: upstream.status }
      );
    }

    const data: unknown = await upstream.json();
    console.log("Received data from upstream:", data);
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}