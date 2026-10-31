"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import styles from "./feed-editor.module.css";

export type EditableItem = {
  id: string; filename: string; kind: "photo" | "video";
  caption: string; alt: string; location: string; order: number; seedLikes: number;
  published: boolean; version: string; uploaded: boolean;
  aspectRatio: number | "square" | "vertical"; src?: string; poster?: string;
};
type Fields = Pick<EditableItem, "caption" | "alt" | "location" | "order" | "seedLikes" | "published">;
const EditorContext = createContext({ editing: true, toggle: () => {}, dirtyCount: 0, markDirty: (_id: string, _dirty: boolean) => {} });

export function DevEditorProvider({ children }: { children: ReactNode }) {
  const [editing, setEditing] = useState(true);
  const [dirtyIds, setDirtyIds] = useState<Set<string>>(new Set());
  const markDirty = useCallback((id: string, dirty: boolean) => setDirtyIds(previous => {
    const next = new Set(previous);
    if (dirty) next.add(id); else next.delete(id);
    return next;
  }), []);
  useEffect(() => {
    if (!dirtyIds.size) return;
    const warn = (event: BeforeUnloadEvent) => { event.preventDefault(); event.returnValue = ""; };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirtyIds.size]);
  return <EditorContext.Provider value={{ editing, toggle: () => setEditing(value => !value), dirtyCount: dirtyIds.size, markDirty }}>{children}</EditorContext.Provider>;
}

async function updateMedia(body: unknown) {
  const response = await fetch("/api/dev/media", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  const result = await response.json();
  if (!response.ok) throw Error(result.error || "Save failed.");
  return result;
}

export function DevToolbar({ count, selected }: { count: number; selected: number }) {
  const { editing, toggle, dirtyCount } = useContext(EditorContext);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  return <aside className={styles.toolbar} aria-label="Development media tools">
    <div><strong>Local preview</strong> · {count} media items, including drafts · {selected} selected</div>
    <div className={styles.actions}>
      <button type="button" onClick={toggle}>{editing ? "Hide editing controls" : "Edit content"}</button>
      <button type="button" disabled={busy || dirtyCount > 0 || selected === 0} onClick={async () => {
        setBusy(true); setStatus("");
        try { const result = await updateMedia({ action: "prepare" }); setStatus(`Prepared ${result.count} posts for production. No deployment performed.`); }
        catch (error) { setStatus(error instanceof Error ? error.message : "Could not prepare feed."); }
        finally { setBusy(false); }
      }}>{busy ? "Checking…" : "Prepare selected feed"}</button>
      {dirtyCount > 0 && <span>{dirtyCount} unsaved {dirtyCount === 1 ? "post" : "posts"}</span>}
    </div>
    {editing && <p>Edit beneath each image and save. All imported media appear here; production uses only the prepared feed.</p>}
    {status && <p className={styles.status} role="status">{status}</p>}
  </aside>;
}

export function PostEditor({ item }: { item: EditableItem }) {
  const { editing, markDirty } = useContext(EditorContext);
  const router = useRouter();
  const [fields, setFields] = useState<Fields>({ caption: item.caption, alt: item.alt, location: item.location, order: item.order, seedLikes: item.seedLikes, published: item.published });
  const [version, setVersion] = useState(item.version);
  const [dirty, setDirty] = useState(false);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  function change<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields(previous => ({ ...previous, [key]: value }));
    setDirty(true); markDirty(item.id, true); setStatus("");
  }
  if (!editing) return null;
  const missing = [!fields.caption.trim() && "caption", !fields.alt.trim() && "alt text", !fields.location.trim() && "location", !item.uploaded && "current upload"].filter(Boolean);
  return <form className={styles.editor} aria-label={`Edit ${item.filename}`} onSubmit={async event => {
    event.preventDefault(); setBusy(true); setStatus("");
    try {
      const result = await updateMedia({ id: item.id, version, fields });
      setVersion(result.version); setDirty(false); markDirty(item.id, false); setStatus("Saved to the media library."); router.refresh();
    } catch (error) { setStatus(error instanceof Error ? error.message : "Save failed."); }
    finally { setBusy(false); }
  }}>
    <div className={styles.filename}><strong>{item.filename}</strong><span>{fields.published ? "Selected" : "Draft"}</span></div>
    <fieldset disabled={busy}>
      <label>Caption<textarea rows={3} value={fields.caption} onChange={event => change("caption", event.target.value)} maxLength={5000} /></label>
      <label>Alt text<textarea rows={2} value={fields.alt} onChange={event => change("alt", event.target.value)} maxLength={5000} /></label>
      <label>Location<input value={fields.location} onChange={event => change("location", event.target.value)} maxLength={5000} /></label>
      <div className={styles.numbers}>
        <label>Feed order<input type="number" step="any" required value={Number.isFinite(fields.order) ? fields.order : ""} onChange={event => change("order", event.target.valueAsNumber)} /></label>
        <label>Seed likes<input type="number" min={0} max={298} required value={Number.isFinite(fields.seedLikes) ? fields.seedLikes : ""} onChange={event => change("seedLikes", event.target.valueAsNumber)} /></label>
      </div>
      <label className={styles.checkbox}><input type="checkbox" checked={fields.published} onChange={event => change("published", event.target.checked)} />Include in production feed</label>
      <div className={styles.actions}><button type="submit" disabled={!dirty || busy}>{busy ? "Saving…" : "Save changes"}</button>{dirty && <span>Unsaved changes</span>}</div>
    </fieldset>
    {missing.length > 0 && <p>Needed before preparing: {missing.join(", ")}.</p>}
    {status && <p className={styles.status} role="status">{status}</p>}
  </form>;
}
