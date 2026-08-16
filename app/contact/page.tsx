import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a free 15-minute call with Kait Kearney, PhD. Free, no paperwork, no obligation — I'll reply within one business day.",
};

// TODO(kait): confirm real practice address and phone number before launch.
const PHONE_DISPLAY = "(555) 123-4567";
const PHONE_HREF = "+15551234567";
const EMAIL = "kaitkearneyphd@gmail.com";

const NEXT_STEPS: {
  number: string;
  color: string;
  round: boolean;
  dark: boolean;
  title: string;
  body: string;
}[] = [
  {
    number: "1",
    color: "var(--color-marigold)",
    round: false,
    dark: false,
    title: "I reply within a day",
    body: "You'll get a short email with a few times for the free call. Pick one — evenings included.",
  },
  {
    number: "2",
    color: "var(--color-red)",
    round: true,
    dark: true,
    title: "We talk for 15 minutes",
    body: "You describe what's happening; I ask a few questions and tell you honestly whether I'm the right fit.",
  },
  {
    number: "3",
    color: "var(--color-cobalt)",
    round: false,
    dark: true,
    title: "You decide — no pressure",
    body: "If it's a yes, we book the first visit. If not, I'll point you to someone who fits better. Either way you leave with a next step.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Nav active="contact" />
      <main>
        <header className={styles.hero}>
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.introCol}>
              <div className={styles.badge}>Contact</div>
              <h1 className={styles.h1}>The first block is a 15-minute call</h1>
              <p className={styles.lead}>
                Free, no paperwork, no obligation. Tell me a little about what&apos;s
                going on and I&apos;ll reply within one business day to set it up.
              </p>
              <div className={styles.contactList}>
                <div className={styles.contactRow}>
                  <span
                    className={styles.contactIcon}
                    style={{ background: "var(--color-marigold)", borderRadius: 9 }}
                    aria-hidden="true"
                  />
                  <a href={`mailto:${EMAIL}`} className={styles.contactLink}>
                    {EMAIL}
                  </a>
                </div>
                <div className={styles.contactRow}>
                  <span
                    className={styles.contactIcon}
                    style={{ background: "var(--color-red)", borderRadius: "50%" }}
                    aria-hidden="true"
                  />
                  <a href={`tel:${PHONE_HREF}`} className={styles.contactLink}>
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div className={styles.contactRow}>
                  <span
                    className={styles.contactIcon}
                    style={{
                      background: "var(--color-cobalt)",
                      borderRadius: "20px 20px 0 0",
                      height: 20,
                      alignSelf: "flex-end",
                    }}
                    aria-hidden="true"
                  />
                  <span className={styles.contactStatic}>
                    123 West 72nd Street, Suite 204 · New York, NY 10023
                  </span>
                </div>
              </div>
            </div>

            <Reveal as="div">
              <ContactForm />
            </Reveal>
          </div>
        </header>

        <section className={styles.nextSection}>
          <div className={`container ${styles.nextInner}`}>
            <Reveal as="h2" className={styles.h2}>
              What happens after you reach out
            </Reveal>
            <div className={styles.nextGrid}>
              {NEXT_STEPS.map((step) => (
                <Reveal as="div" key={step.number} className={styles.nextCard}>
                  <div
                    className={styles.nextNumber}
                    style={{
                      background: step.color,
                      borderRadius: step.round ? "50%" : 11,
                      color: step.dark ? "#ffffff" : undefined,
                    }}
                  >
                    {step.number}
                  </div>
                  <div className={styles.nextTitle}>{step.title}</div>
                  <p className={styles.nextBody}>{step.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
