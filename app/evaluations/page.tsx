import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Band from "@/components/Band";
import CtaBand from "@/components/CtaBand";
import ProcessSteps from "@/components/ProcessSteps";
import Triangle from "@/components/Triangle";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Evaluations",
  description:
    "Comprehensive, tailored neuropsychological and diagnostic assessments — and exactly what support your child needs at school and at home.",
};

const ASSESSMENT_AREAS = [
  {
    icon: (
      <span
        style={{
          width: 36,
          height: 36,
          background: "var(--color-cobalt)",
          border: "2px solid var(--color-ink)",
          borderRadius: 9,
          display: "inline-block",
        }}
      />
    ),
    title: "Attention",
  },
  {
    icon: (
      <span
        style={{
          width: 36,
          height: 36,
          background: "var(--color-red)",
          border: "2px solid var(--color-ink)",
          borderRadius: "50%",
          display: "inline-block",
        }}
      />
    ),
    title: "Memory",
  },
  {
    icon: <Triangle width={36} height={32} color="var(--color-marigold)" strokeWidth={2} />,
    title: "Executive functioning",
  },
  {
    icon: (
      <span
        style={{
          width: 40,
          height: 22,
          background: "var(--color-green)",
          border: "2px solid var(--color-ink)",
          borderRadius: "22px 22px 0 0",
          display: "inline-block",
        }}
      />
    ),
    title: "Learning profile",
  },
  {
    icon: (
      <span
        style={{
          width: 36,
          height: 36,
          background: "var(--color-marigold)",
          border: "2px solid var(--color-ink)",
          borderRadius: 9,
          transform: "rotate(-8deg)",
          display: "inline-block",
        }}
      />
    ),
    title: "Language",
  },
  {
    icon: (
      <span
        style={{
          width: 36,
          height: 36,
          background: "var(--color-green)",
          border: "2px solid var(--color-ink)",
          borderRadius: "50%",
          display: "inline-block",
        }}
      />
    ),
    title: "Mood and behavior",
  },
];

const STEPS: [
  { label: string; body: string },
  { label: string; body: string },
  { label: string; body: string },
  { label: string; body: string }
] = [
  {
    label: "1 · We talk first",
    body: "An intake conversation about your questions, your child's history, and what you're seeing.",
  },
  {
    label: "2 · Testing sessions",
    body: "Tailored to your child — paced so it feels like puzzles and games, not an exam.",
  },
  {
    label: "3 · Feedback & report",
    body: "We sit down together; you leave with a clear written report in plain English.",
  },
  {
    label: "4 · Putting it to work",
    body: "Recommendations for home and school — with consultation to make sure they happen.",
  },
];

export default function EvaluationsPage() {
  return (
    <>
      <Nav active="evaluations" />
      <main>
        <header className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroShapeSquare} aria-hidden="true" />
            <div className={styles.heroShapeBall} aria-hidden="true" />
            <Triangle
              width={60}
              height={52}
              color="var(--color-green)"
              strokeWidth={2.5}
              className={styles.heroShapeTriangle}
            />
            <h1 className={styles.h1}>Neuropsychological and Diagnostic Assessments</h1>
            <p className={styles.lead}>
              Assessment is a critical piece in understanding your child and getting
              them the support they need. Every evaluation is comprehensive and
              tailored to your child, never one-size-fits-all.
            </p>
          </div>
        </header>

        <section className={styles.questionsSection}>
          <div className={`container ${styles.sectionInner}`}>
            <Reveal as="h2" className={styles.h2}>
              An evaluation can assess:
            </Reveal>
            <Reveal as="p" className={styles.sectionLead}>
              These are the ones I hear most.
            </Reveal>
            <div className={styles.grid}>
              {ASSESSMENT_AREAS.map((area) => (
                <Reveal as="div" key={area.title} className={styles.card}>
                  <div className={styles.cardIcon} aria-hidden="true">
                    {area.icon}
                  </div>
                  <div className={styles.cardTitle}>{area.title}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.howSection}>
          <div className={`container ${styles.sectionInner}`}>
            <Reveal as="h2" className={styles.h2}>
              How an evaluation works
            </Reveal>
            <Reveal as="p" className={styles.howLead}>
              Four clear steps — and you&apos;re never left waiting in the dark between
              them.
            </Reveal>
            <ProcessSteps steps={STEPS} />
          </div>
        </section>

        <Band tone="green" decorative>
          <Reveal as="h2" className={styles.experienceHeading}>
            Testing experience you can trust
          </Reveal>
          <Reveal as="p" className={styles.experienceBody}>
            Extensive neuropsychological testing and assessment experience at
            hospital-based developmental clinics, The Child Mind Institute, and in
            private practice — plus real classroom insight from working as a
            psychologist inside a school.
          </Reveal>
        </Band>

        <CtaBand
          tone="paper"
          heading="Wondering if an evaluation would help?"
          body="Bring your questions to the free 15-minute call — I'll tell you honestly whether testing makes sense for your child right now."
        />
      </main>
      <Footer />
    </>
  );
}
