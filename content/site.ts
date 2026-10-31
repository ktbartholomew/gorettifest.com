export const festivalHeroVideo = "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2026/GF_VIBES.mov";

export const siteConfig: { homeMode: "festival" | "thank-you"; recapYear: number; adBreakEvery: number; thankYouHeroVideo: string } = {
  // Change to "festival" and redeploy to restore the original homepage.
  homeMode: "thank-you",
  recapYear: 2026,
  thankYouHeroVideo: festivalHeroVideo,
  // Insert four sponsor logos after this many recap posts (positive integer).
  adBreakEvery: 3,
};
