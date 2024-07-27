import Image from "next/image";
import styles from "./header-nav.module.css";

export function HeaderNav({ logo }: { logo?: boolean }) {
  return (
    <nav className={styles.headerNav}>
      {logo ? (
        <a href="/" className="block">
          <div className="bg-slate-800 absolute rounded-br-3xl">
            <Image
              alt="GorettiFest October 5-6, 2024"
              src="/img/gorettifest-logo-white-red-outline.svg"
              width={240}
              height={240}
              priority
              loading="eager"
              className="relative h-full object-contain"
            />
          </div>
        </a>
      ) : null}
      <ul className="md:flex justify-center">
        <li>
          <a className={styles.headerNav__link} href="/#visit">
            Plan Your Visit
          </a>
        </li>
        <li>
          <a className={styles.headerNav__link} href="/#food-and-drinks">
            Food &amp; Drinks
          </a>
        </li>
        <li>
          <a className={styles.headerNav__link} href="/#games">
            Games
          </a>
        </li>
        <li>
          <a className={styles.headerNav__link} href="/#entertainment">
            Entertainment
          </a>
        </li>
        {/* <li>
            <a className={styles.headerNav__link} href="/#vendors">
              Vendors
            </a>
          </li> */}
        <li>
          <a className={styles.headerNav__link} href="/#about-us">
            About Us
          </a>
        </li>
      </ul>
    </nav>
  );
}
