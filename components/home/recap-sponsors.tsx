import Image from "next/image";
import type { SponsorLogo } from "@/content/sponsors";
import styles from "./thank-you.module.css";

export function RecapSponsors({ sponsors, first = false }: { sponsors: SponsorLogo[]; first?: boolean }) {
  return (
    <aside id={first ? "sponsors" : undefined} className={styles.sponsorCard} aria-label="GorettiFest sponsors">
      <div className={styles.sponsorGrid}>
        {sponsors.map((sponsor, index) => {
          const logo = (
            <>
              <div className={styles.sponsorLogo} data-size={sponsor.size}>
                <Image src={sponsor.imageUrl} alt={sponsor.name} fill
                  sizes="(max-width: 640px) 40vw, 260px" className="object-contain" />
              </div>
            </>
          );
          return sponsor.linkUrl ? (
            <a key={`${sponsor.name}-${index}`} href={sponsor.linkUrl} target="_blank" rel="noopener noreferrer"
              className={styles.sponsorItem} aria-label={`Visit ${sponsor.name} (opens in a new tab)`}>
              {logo}
            </a>
          ) : <div key={`${sponsor.name}-${index}`} className={styles.sponsorItem}>{logo}</div>;
        })}
      </div>
    </aside>
  );
}
