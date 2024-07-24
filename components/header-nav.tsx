import styles from "./header-nav.module.css";

export function HeaderNav() {
  return (
    <nav className={styles.headerNav}>
      <ul className="md:flex justify-center">
        <li>
          <a className={styles.headerNav__link} href="/#visit">
            Plan Your Visit
          </a>
        </li>
        <li>
          <a className={styles.headerNav__link} href="/#food-and-games">
            Food &amp; Games
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
