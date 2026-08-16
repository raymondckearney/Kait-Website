import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Play therapy, PCIT, neuropsychological evaluations, and school consultation — four kinds of help that connect to one plan for your child.",
};

const CONCERNS = [
  { label: "ADHD", color: "var(--color-cobalt)", shape: "square" },
  { label: "Anxiety", color: "var(--color-red)", shape: "circle" },
  { label: "Depression", color: "var(--color-marigold)", shape: "square" },
  { label: "OCD", color: "var(--color-green)", shape: "circle" },
  { label: "ARFID", color: "var(--color-cobalt)", shape: "circle" },
  { label: "Autism", color: "var(--color-red)", shape: "square" },
  { label: "Disruptive behavior", color: "var(--color-marigold)", shape: "circle" },
] as const;

export default function ServicesPage() {
  return (
    <>
      <Nav active="services" />
      <main>
        <header className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroShapeSquare} aria-hidden="true" />
            <div className={styles.heroShapeBall} aria-hidden="true" />
            <div className={styles.heroShapeTriangle} aria-hidden="true" />
            <div className={styles.badge}>Services</div>
            <h1 className={styles.h1}>From the playroom to the classroom</h1>
            <p className={styles.lead}>
              Play therapy, PCIT, neuropsychological evaluations, and school
              consultation — four kinds of help that connect to one plan for your child.
            </p>
          </div>
        </header>

        <section className={styles.gridSection}>
          <div className={`container ${styles.gridInner}`}>
            <div className={styles.grid}>
              <Reveal as="div" className={`${styles.card} ${styles.cobalt}`}>
                <div className={styles.cardIcons} aria-hidden="true">
                  <span
                    style={{
                      width: 50,
                      height: 50,
                      background: "var(--color-marigold)",
                      border: "2px solid var(--color-ink)",
                      borderRadius: 12,
                      display: "inline-block",
                      animation: "tumSway 5s ease-in-out infinite",
                    }}
                  />
                  <span
                    style={{
                      width: 27,
                      height: 27,
                      background: "var(--color-red)",
                      border: "2px solid var(--color-ink)",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}
                  />
                </div>
                <div className={styles.cardEyebrow}>For your child</div>
                <h2 className={styles.cardTitle}>Play therapy</h2>
                <p className={styles.cardBody}>
                  For kids, play is the work. Sessions are warm and structured — your
                  child works through big feelings, builds coping skills, and practices
                  new ways of handling hard moments, all in the language they know best.
                </p>
                <p className={styles.cardBody}>
                  You&apos;re in the loop after every session: what we did, why, and the
                  one thing to try at home.
                </p>
              </Reveal>

              <Reveal as="div" className={`${styles.card} ${styles.red}`}>
                <div className={styles.cardIcons} aria-hidden="true">
                  <span
                    style={{
                      width: 50,
                      height: 28,
                      background: "var(--color-green)",
                      border: "2px solid var(--color-ink)",
                      borderRadius: "28px 28px 0 0",
                      display: "inline-block",
                      animation: "tumSway 5s 1s ease-in-out infinite",
                    }}
                  />
                  <span
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "16px solid transparent",
                      borderRight: "16px solid transparent",
                      borderBottom: "28px solid var(--color-marigold)",
                      display: "inline-block",
                    }}
                  />
                </div>
                <div className={styles.cardEyebrow}>For you &amp; your child, together</div>
                <h2 className={styles.cardTitle}>PCIT</h2>
                <p className={styles.cardBody}>
                  Parent-Child Interaction Therapy: you and your child play together
                  while I coach you live, in the moment. You leave every session having
                  practiced the skills — not just heard about them.
                </p>
                <p className={styles.cardBody}>
                  Especially powerful for young children with big behaviors: defiance,
                  meltdowns, and power struggles.
                </p>
              </Reveal>

              <Reveal as="div" className={`${styles.card} ${styles.marigold}`}>
                <div className={styles.cardIcons} aria-hidden="true">
                  <span
                    style={{
                      width: 50,
                      height: 50,
                      background: "var(--color-cobalt)",
                      border: "2px solid var(--color-ink)",
                      borderRadius: "50%",
                      display: "inline-block",
                      animation: "tumSway 5s 1.5s ease-in-out infinite",
                    }}
                  />
                  <span
                    style={{
                      width: 27,
                      height: 27,
                      background: "var(--color-paper)",
                      border: "2px solid var(--color-ink)",
                      borderRadius: 6,
                      display: "inline-block",
                      transform: "rotate(8deg)",
                    }}
                  />
                </div>
                <div className={styles.cardEyebrow}>Testing &amp; assessment</div>
                <h2 className={styles.cardTitle}>Neuropsychological evaluations</h2>
                <p className={styles.cardBody}>
                  Thorough, tailored testing that shows how your child&apos;s brain
                  works — not just a label, but a map of strengths, challenges, and
                  exactly what support they need at school and at home.
                </p>
                <a href="/evaluations" className={styles.cardCta}>
                  How evaluations work →
                </a>
              </Reveal>

              <Reveal as="div" className={`${styles.card} ${styles.green}`}>
                <div className={styles.cardIcons} aria-hidden="true">
                  <span
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "25px solid transparent",
                      borderRight: "25px solid transparent",
                      borderBottom: "44px solid var(--color-marigold)",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      width: 27,
                      height: 27,
                      background: "var(--color-red)",
                      border: "2px solid var(--color-ink)",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}
                  />
                </div>
                <div className={styles.cardEyebrow}>For your child&apos;s school</div>
                <h2 className={styles.cardTitle}>School consultation</h2>
                <p className={styles.cardBody}>
                  Kids spend most of their day at school, so that&apos;s where the plan
                  has to work. I consult directly with teachers and school teams to
                  translate what we learn into classroom support.
                </p>
                <p className={styles.cardBody}>
                  Informed by real experience as a psychologist inside a school.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className={styles.concernsSection}>
          <div className={`container ${styles.concernsInner}`}>
            <Reveal as="div" className={styles.titleRow}>
              <span className={styles.titleIcon} aria-hidden="true" />
              <h2 className={styles.h2}>What families come to me for</h2>
            </Reveal>
            <Reveal as="p" className={styles.sectionLead}>
              The most common concerns — though the free call is the best way to find
              out if I can help with yours.
            </Reveal>
            <Reveal as="div" className={styles.chips}>
              {CONCERNS.map((concern) => (
                <span key={concern.label} className={styles.chip}>
                  <span
                    className={styles.chipDot}
                    style={{
                      background: concern.color,
                      borderRadius: concern.shape === "circle" ? "50%" : "3px",
                    }}
                    aria-hidden="true"
                  />
                  {concern.label}
                </span>
              ))}
            </Reveal>
          </div>
        </section>

        <section className={styles.logisticsSection}>
          <div className={`container ${styles.logisticsInner}`}>
            <Reveal as="h2" className={styles.h2}>
              The practical stuff
            </Reveal>
            <div className={styles.logisticsGrid}>
              <Reveal as="div" className={styles.logisticsCard}>
                <div
                  className={styles.logisticsIcon}
                  style={{ background: "var(--color-marigold)", borderRadius: 10 }}
                  aria-hidden="true"
                />
                <div className={styles.logisticsTitle}>Where we meet</div>
                <p className={styles.logisticsBody}>
                  In-person in New York City, or telehealth anywhere in New York State.
                  Both work equally well — many families mix the two.
                </p>
              </Reveal>
              <Reveal as="div" className={styles.logisticsCard}>
                <div
                  className={styles.logisticsIcon}
                  style={{ background: "var(--color-green)", borderRadius: "50%" }}
                  aria-hidden="true"
                />
                <div className={styles.logisticsTitle}>Fees &amp; insurance</div>
                <p className={styles.logisticsBody}>
                  Out-of-network practice. You&apos;ll receive a superbill after each
                  session to submit to your insurance for reimbursement — I&apos;ll walk
                  you through how it works on the free call.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <CtaBand
          tone="cobalt"
          heading="Still deciding which one fits?"
          body="That's exactly what the free 15-minute call is for. Tell me what's happening at home and I'll tell you honestly what would help."
        />
      </main>
      <Footer />
    </>
  );
}
