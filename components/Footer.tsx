import Link from "next/link";
import BlockWordmark from "./BlockWordmark";
import styles from "./Footer.module.css";

const ADDRESS_LINE_1 = "148 W 90th St.";
const ADDRESS_LINE_2 = "New York, NY 10024";
const PHONE_DISPLAY = "(929) 515-2147";
const PHONE_HREF = "+19295152147";
const EMAIL = "kaitkearneyphd@gmail.com";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brandCol}>
          <BlockWordmark size="sm" />
          <span className={styles.tagline}>Child &amp; Family Psychologist</span>
        </div>

        <div className={styles.columns}>
          <nav className={styles.column} aria-label="Footer pages">
            <span className={styles.columnHead}>Pages</span>
            <Link href="/#services" className={styles.pageLink}>
              Services
            </Link>
            <Link href="/evaluations" className={styles.pageLink}>
              Evaluations
            </Link>
            <Link href="/#about" className={styles.pageLink}>
              About
            </Link>
            <Link href="/contact" className={styles.pageLink}>
              Contact
            </Link>
          </nav>

          <div className={styles.column}>
            <span className={styles.columnHead}>Visit</span>
            <span className={styles.visitLine}>{ADDRESS_LINE_1}</span>
            <span className={styles.visitLine}>{ADDRESS_LINE_2}</span>
          </div>

          <div className={styles.column}>
            <span className={styles.columnHead}>Contact</span>
            <a href={`mailto:${EMAIL}`} className={styles.contactLink}>
              {EMAIL}
            </a>
            <a href={`tel:${PHONE_HREF}`} className={styles.contactLink}>
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>© 2026 Kait Kearney, PhD</div>
    </footer>
  );
}
