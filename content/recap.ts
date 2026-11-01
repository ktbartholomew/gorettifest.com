import generatedPosts from "./recap-generated.json";

type MediaBase = {
  placeholderLabel: string;
  alt: string;
  /** Omit until ready. Local path or public HTTPS media URL. */
  src?: string;
};

export type RecapMedia = MediaBase & (
  | { kind: "photo"; aspectRatio: "square" | number }
  | {
      kind: "video";
      aspectRatio: "square" | "vertical";
      poster?: string;
      /** WebVTT captions. Cross-origin hosts must allow CORS. */
      captions?: { src: string; language: string; label: string };
    }
);

export type RecapPost = {
  /** Keep stable: used in anchor links and browser-local likes. */
  id: string;
  location: string;
  caption: string;
  /** Seeded display count, not measured engagement. Integers from 0–298. */
  seedLikes: number;
  media: RecapMedia;
};

// Array order is feed order. Captions and media descriptions are provisional.
// Add media.src to replace a placeholder; videos also accept poster/captions.
const placeholderPosts: RecapPost[] = [
  { id: "2026-community", location: "Festival grounds", seedLikes: 246,
    caption: "A whole weekend of little moments. One incredible community.",
    media: { kind: "photo", aspectRatio: "square", placeholderLabel: "A community moment", alt: "Describe the selected community photo here." } },
  { id: "2026-setup", location: "Festival grounds", seedLikes: 68,
    caption: "For everyone who helped bring GorettiFest to life: thank you.",
    media: { kind: "photo", aspectRatio: "square", placeholderLabel: "Volunteer setup", alt: "Describe the selected volunteer photo here." } },
  { id: "2026-dancing", location: "Timberlake Main Stage", seedLikes: 184,
    caption: "A little music. A little movement. A lot of GorettiFest spirit.",
    media: { kind: "video", aspectRatio: "vertical", placeholderLabel: "Dancing by the stage", alt: "Describe the selected dancing video here." } },
  { id: "2026-food", location: "Food booths", seedLikes: 117,
    caption: "Here's to the people behind every delicious bite.",
    media: { kind: "photo", aspectRatio: "square", placeholderLabel: "Festival favorites", alt: "Describe the selected food photo here." } },
  { id: "2026-games", location: "Midway", seedLikes: 93,
    caption: "Room for a little friendly competition and a whole lot of fun.",
    media: { kind: "photo", aspectRatio: "square", placeholderLabel: "Games on the grounds", alt: "Describe the selected games photo here." } },
  { id: "2026-music", location: "Timberlake Main Stage", seedLikes: 156,
    caption: "A little piece of the GorettiFest soundtrack.",
    media: { kind: "video", aspectRatio: "square", placeholderLabel: "Music from the stage", alt: "Describe the selected performance here." } },
  { id: "2026-volunteers", location: "Festival grounds", seedLikes: 82,
    caption: "The heart of this festival is the people who show up for it.",
    media: { kind: "photo", aspectRatio: "square", placeholderLabel: "Our volunteer crew", alt: "Describe the selected volunteer crew photo here." } },
  { id: "2026-around", location: "Festival grounds", seedLikes: 43,
    caption: "Take a moment to soak it all in.",
    media: { kind: "video", aspectRatio: "vertical", placeholderLabel: "A walk around GorettiFest", alt: "Describe the selected walk-around video here." } },
  { id: "2026-until-next-time", location: "Festival grounds", seedLikes: 129,
    caption: "Thank you for being part of the GorettiFest family.",
    media: { kind: "photo", aspectRatio: "square", placeholderLabel: "One more happy memory", alt: "Describe the selected closing photo here." } },
];

// The CLI validates the generated manifest before writing it.
export const recapPosts: RecapPost[] = generatedPosts.length
  ? generatedPosts as RecapPost[]
  : placeholderPosts;
