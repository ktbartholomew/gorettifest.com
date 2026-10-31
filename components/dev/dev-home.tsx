import { ThankYouHome } from "@/components/home/thank-you-home";
import type { RecapPost } from "@/content/recap";
import { editorItems } from "@/scripts/media/editor.mjs";
import { DevEditorProvider, DevToolbar, PostEditor, type EditableItem } from "./feed-editor";

export async function DevHome() {
  const items = await editorItems(process.cwd()) as EditableItem[];
  if (!items.length) return <ThankYouHome />;
  const posts: RecapPost[] = items.map(item => ({
    id: item.id, caption: item.caption, location: item.location, seedLikes: item.seedLikes,
    media: item.kind === "photo"
      ? { kind: "photo", aspectRatio: Number(item.aspectRatio), src: item.src, alt: item.alt || item.filename, placeholderLabel: item.filename }
      : { kind: "video", aspectRatio: item.aspectRatio === "vertical" ? "vertical" : "square", src: item.src, poster: item.poster, alt: item.alt || item.filename, placeholderLabel: item.filename },
  }));
  return (
      <ThankYouHome posts={posts} localPreview ContentWrapper={DevEditorProvider}
        toolbar={<DevToolbar count={items.length} selected={items.filter(item => item.published).length} />}
        editors={Object.fromEntries(items.map(item => [item.id, <PostEditor key={item.id} item={item} />]))} />
  );
}
