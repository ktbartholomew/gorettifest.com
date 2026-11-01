import Link from "next/link";
import Image from "next/image";
import { HeaderNav } from "@/components/header-nav";
import { Footer } from "@/components/footer";
import { Fragment, type ComponentType, type ReactNode } from "react";
import { sponsors } from "@/content/sponsors";
import { RecapSponsors } from "./recap-sponsors";
import { recapPosts, type RecapPost } from "@/content/recap";
import { siteConfig } from "@/content/site";
import { RecapLike } from "./recap-like";
import { RecapMedia } from "./recap-media";
import { RecapVideoProvider, RecapHeroVideo } from "./recap-video";
import styles from "./thank-you.module.css";

export function ThankYouHome({
  posts = recapPosts,
  toolbar,
  editors,
  localPreview = false,
  ContentWrapper = Fragment,
}: {
  posts?: RecapPost[];
  toolbar?: ReactNode;
  editors?: Record<string, ReactNode>;
  localPreview?: boolean;
  ContentWrapper?: ComponentType<{ children: ReactNode }>;
} = {}) {
  const cadence = Number.isFinite(siteConfig.adBreakEvery)
    ? Math.max(1, Math.floor(siteConfig.adBreakEvery))
    : 3;
  const breakCount = Math.floor(posts.length / cadence);
  // Advance through the sponsor list, wrapping only when it is exhausted.
  const sponsorGroups =
    sponsors.length > 0
      ? Array.from({ length: breakCount }, (_, breakIndex) =>
          Array.from(
            { length: 4 },
            (_, logoIndex) =>
              sponsors[(breakIndex * 4 + logoIndex) % sponsors.length],
          ),
        )
      : [];

  return (
    <main className={styles.page}>
      <HeaderNav logo />
      <ContentWrapper>
        {toolbar}
        <RecapVideoProvider>
          <header className={styles.hero}>
            <RecapHeroVideo src={siteConfig.thankYouHeroVideo} />
            <div className={styles.heroContent}>
              <h1>Unforgettable.</h1>
              <p>
                To every family, volunteer, sponsor, and friend who showed up
                for GorettiFest: thank you. Your commitment and generosity
                continue to make Arlington’s best fall festival possible.
              </p>
            </div>
          </header>
          <section
            id="moments"
            aria-labelledby="moments-title"
            className={styles.feed}
          >
            <div
              className={styles.posts}
              id={sponsorGroups.length === 0 ? "sponsors" : undefined}
            >
              {posts.map((post, index) => (
                <Fragment key={post.id}>
                  <article
                    id={post.id}
                    className={styles.post}
                    aria-label={post.media.placeholderLabel}
                  >
                    <header className={styles.postHeader}>
                      <Image
                        src="/img/gorettifest-avatar.png"
                        alt=""
                        width={38}
                        height={38}
                        className={styles.avatar}
                      />
                      <div>
                        <strong>gorettifest</strong>
                        <span className={styles.location}>{post.location}</span>
                      </div>
                    </header>
                    <RecapMedia
                      key={post.media.src}
                      media={post.media}
                      index={index}
                      unoptimized={localPreview}
                    />
                    <div className={styles.postBody}>
                      <div className={styles.actions}>
                        <RecapLike
                          id={post.id}
                          seedLikes={post.seedLikes}
                          label={post.media.placeholderLabel}
                        />
                      </div>
                      <p>
                        <strong>gorettifest</strong> {post.caption}
                      </p>
                      <a
                        href={`#${post.id}`}
                        aria-label={`October 3 — link to ${post.media.placeholderLabel}`}
                        className={styles.permalink}
                      >
                        <time dateTime={`${siteConfig.recapYear}-10-03`}>
                          October 3
                        </time>
                      </a>
                    </div>
                    {editors?.[post.id]}
                  </article>
                  {(index + 1) % cadence === 0 &&
                    sponsorGroups[Math.floor(index / cadence)] && (
                      <RecapSponsors
                        sponsors={sponsorGroups[Math.floor(index / cadence)]}
                        first={index + 1 === cadence}
                      />
                    )}
                </Fragment>
              ))}
            </div>
          </section>
        </RecapVideoProvider>
        <section
          id="thank-you"
          className={styles.closing}
          aria-labelledby="thanks-title"
        >
          <h2 id="thanks-title">A community worth celebrating.</h2>
          <p>
            Every helping hand and every moment together supports Saint Maria
            Goretti Catholic School. To our volunteers, sponsors, and the
            families who make this tradition their own: we couldn’t do it
            without you.
          </p>
          <Link href="/about">
            Meet the community behind GorettiFest{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </section>
        <div className="bg-slate-800 px-4 pb-8 pt-1">
          <Footer />
        </div>
      </ContentWrapper>
    </main>
  );
}
