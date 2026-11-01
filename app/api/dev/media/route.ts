// The local editor implementation is imported only in development.
export async function GET(request: Request) {
  if (process.env.NODE_ENV !== "development") return new Response(null, { status: 404 });
  const { handleDevMedia } = await import("@/components/dev/media-server");
  return handleDevMedia(request);
}

export async function POST(request: Request) {
  if (process.env.NODE_ENV !== "development") return new Response(null, { status: 404 });
  const { handleDevMedia } = await import("@/components/dev/media-server");
  return handleDevMedia(request);
}
