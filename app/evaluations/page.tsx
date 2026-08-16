import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Band from "@/components/Band";
import CtaBand from "@/components/CtaBand";
import ProcessSteps from "@/components/ProcessSteps";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Evaluations",
  description:
    "Thorough, tailored neuropsychological evaluations that show how your child's brain works — and exactly what support they need at school and at home.",
};

const QUESTIONS = [
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
    title: `"Is it ADHD — or something else?"`,
    body: "Attention, focus, and executive functioning — and what's really driving the struggles.",
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
    title: `"Why is school so hard?"`,
    body: "Learning differences, processing speed, and where a bright kid keeps getting stuck.",
  },
  {
    icon: (
      <span
        style={{
          width: 0,
          height: 0,
          borderLeft: "18px solid transparent",
          borderRight: "18px solid transparent",
          borderBottom: "32px solid var(--color-marigold)",
          display: "inline-block",
        }}
      />
    ),
    title: `"Could this be autism?"`,
    body: "A careful, developmental picture of social communication, flexibility, and strengths.",
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
    title: `"Is it anxiety, OCD, or mood?"`,
    body: "Untangling worry, rituals, and low mood from attention and learning issues that can look alike.",
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
    title: `"What support should school give?"`,
    body: "Concrete, evidence-backed recommendations for accommodations, IEPs, and 504 plans.",
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
    title: `"What are my child's strengths?"`,
    body: "Every report maps what's working — because the plan builds on strengths, not just struggles.",
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
            <div className={styles.heroShapeTriangle} aria-hidden="true" />
            <div className={styles.badge}>Neuropsychological evaluations</div>
            <h1 className={styles.h1}>See how your child&apos;s brain works</h1>
            <p className={styles.lead}>
              Testing is a critical piece — not just in understanding your child, but in
              getting them the support they need. Every evaluation is thorough and
              tailored to your child, never one-size-fits-all.
            </p>
          </div>
        </header>

        <section className={styles.questionsSection}>
          <div className={`container ${styles.sectionInner}`}>
            <Reveal as="h2" className={styles.h2}>
              Questions an evaluation can answer
            </Reveal>
            <Reveal as="p" className={styles.sectionLead}>
              Parents usually arrive with a question, not a diagnosis. These are the
              ones I hear most.
            </Reveal>
            <div className={styles.grid}>
              {QUESTIONS.map((q) => (
                <Reveal as="div" key={q.title} className={styles.card}>
                  <div className={styles.cardIcon} aria-hidden="true">
                    {q.icon}
                  </div>
                  <div className={styles.cardTitle}>{q.title}</div>
                  <p className={styles.cardBody}>{q.body}</p>
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
