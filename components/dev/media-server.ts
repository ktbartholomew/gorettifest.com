import { open, realpath } from "node:fs/promises";
import { resolve, sep } from "node:path";
import { Readable } from "node:stream";
import { openLibrary } from "@/scripts/media/pipeline.mjs";
import { editorItems, saveEditorial, prepareFeed } from "@/scripts/media/editor.mjs";

export async function handleDevMedia(request: Request) {
  if (process.env.NODE_ENV !== "development") return new Response(null, { status: 404 });
  const url = new URL(request.url);
  const host = request.headers.get("host");
  const localNames = ["localhost", "127.0.0.1", "[::1]"];
  if (!host || !localNames.includes(new URL(`http://${host}`).hostname)) return new Response(null, { status: 403 });
  if (request.method === "POST" && request.headers.get("origin") !== `${url.protocol}//${host}`) return new Response(null, { status: 403 });
  const root = process.cwd();
  const headers = { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" };
  try {
    if (request.method === "POST") {
      if (Number(request.headers.get("content-length")) > 32_000) throw Error("Request is too large.");
      const text = await request.text();
      if (text.length > 32_000) throw Error("Request is too large.");
      const body = JSON.parse(text);
      const result = body.action === "prepare" ? await prepareFeed(root) : await saveEditorial(root, body);
      return Response.json(result, { headers });
    }
    const asset = url.searchParams.get("asset");
    if (!asset) return Response.json(await editorItems(root), { headers });
    if (!["media", "poster"].includes(asset)) return new Response(null, { status: 404 });
    const context = await openLibrary(root);
    const id = url.searchParams.get("id");
    const item = context.library.items.find((item: { id: string }) => item.id === id);
    const file = id ? context.local.items[id]?.outputs?.[asset] : undefined;
    if (!item || !file) return new Response(null, { status: 404 });
    const actual = await realpath(file);
    const allowed = await realpath(resolve(root, ".media/optimized"));
    if (!actual.startsWith(allowed + sep)) return new Response(null, { status: 403 });
    const handle = await open(actual, "r");
    const { size } = await handle.stat();
    const range = request.headers.get("range");
    let start = 0, end = size - 1;
    if (range) {
      const match = /^bytes=(\d+)-(\d*)$/.exec(range);
      if (!match || Number(match[1]) >= size || (match[2] && Number(match[2]) < Number(match[1]))) {
        await handle.close();
        return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${size}` } });
      }
      start = Number(match[1]); end = match[2] ? Math.min(Number(match[2]), end) : end;
    }
    const stream = handle.createReadStream({ start, end, autoClose: true });
    return new Response(Readable.toWeb(stream) as ReadableStream, {
      status: range ? 206 : 200,
      headers: { ...headers, "Content-Type": item.optimized[asset].contentType,
        "Accept-Ranges": "bytes", "Content-Length": String(end - start + 1),
        ...(range ? { "Content-Range": `bytes ${start}-${end}/${size}` } : {}) },
    });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "Media request failed." }, { status: 400, headers });
  }
}
