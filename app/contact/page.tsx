import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Triangle from "@/components/Triangle";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start with a free 15-minute call — fill out the form and Dr. Kearney will be in touch within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <Nav active="contact" />
      <main>
        <header className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroShapeSquare} aria-hidden="true" />
            <div className={styles.heroShapeBall} aria-hidden="true" />
            <Triangle
              width={56}
              height={48}
              color="var(--color-yellow)"
              strokeWidth={2.5}
              className={styles.heroShapeTriangle}
            />
            <div className={styles.badge}>Get in touch</div>
            <h1 className={styles.h1}>Start with one small block</h1>
            <p className={styles.lead}>
              Fill out the form below and I&apos;ll be in touch within one business
              day.
            </p>
          </div>
        </header>

        <section className={styles.formSection}>
          <div className={`container ${styles.formGrid}`}>
            <div className={styles.infoCol}>
              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>Email</span>
                <a href="mailto:kaitkearneyphd@gmail.com" className={styles.infoLink}>
                  kaitkearneyphd@gmail.com
                </a>
              </div>
              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>Phone</span>
                <a href="tel:+19295152147" className={styles.infoLink}>
                  (929) 515-2147
                </a>
              </div>
              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>Visit</span>
                <span className={styles.infoText}>148 W 90th St.</span>
                <span className={styles.infoText}>New York, NY 10024</span>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
