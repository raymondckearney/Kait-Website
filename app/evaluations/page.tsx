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
          background: "var(--color-indigo)",
          border: "2px solid var(--color-ink)",
          borderRadius: 9,
          display: "inline-block",
          animation: "tumTickle 5s 0.2s ease-in-out infinite",
        }}
      />
    ),
    title: "Attention",
    body: "How your child focuses, shifts between tasks, and stays with things that are hard or boring.",
  },
  {
    icon: (
      <span
        style={{
          width: 36,
          height: 36,
          background: "var(--color-pink)",
          border: "2px solid var(--color-ink)",
          borderRadius: "50%",
          display: "inline-block",
          animation: "tumTickle 5s 0.6s ease-in-out infinite",
        }}
      />
    ),
    title: "Memory",
    body: "How your child takes in, holds onto, and uses information, from directions to schoolwork.",
  },
  {
    icon: (
      <Triangle
        width={36}
        height={32}
        color="var(--color-yellow)"
        strokeWidth={2}
        style={{ animation: "tumTickle 5s 1s ease-in-out infinite" }}
      />
    ),
    title: "Executive functioning",
    body: "How your child plans, organizes, starts tasks, and manages their time, emotions, and belongings.",
  },
  {
    icon: (
      <span
        style={{
          width: 40,
          height: 22,
          background: "var(--color-teal)",
          border: "2px solid var(--color-ink)",
          borderRadius: "22px 22px 0 0",
          display: "inline-block",
          animation: "tumTickle 5s 1.4s ease-in-out infinite",
        }}
      />
    ),
    title: "Learning profile",
    body: "Where your child learns with ease, where it takes more effort, and what helps.",
  },
  {
    icon: (
      <span
        style={{
          width: 36,
          height: 36,
          background: "var(--color-yellow)",
          border: "2px solid var(--color-ink)",
          borderRadius: 9,
          transform: "rotate(-8deg)",
          display: "inline-block",
          animation: "tumTickle 5s 1.8s ease-in-out infinite",
        }}
      />
    ),
    title: "Language",
    body: "How your child understands and expresses ideas, in conversation and in reading and writing.",
  },
  {
    icon: (
      <span
        style={{
          width: 36,
          height: 36,
          background: "var(--color-teal)",
          border: "2px solid var(--color-ink)",
          borderRadius: "50%",
          display: "inline-block",
          animation: "tumTickle 5s 2.2s ease-in-out infinite",
        }}
      />
    ),
    title: "Mood and behavior",
    body: "How your child experiences big feelings, worries, and everyday stress, and how it shows up at home and school.",
  },
];

const STEPS: [
  { label: string; body: string },
  { label: string; body: string },
  { label: string; body: string },
  { label: string; body: string }
] = [
  {
    label: "1 · Background",
    body: "An intake session about your questions, your child's history, and what you're seeing.",
  },
  {
    label: "2 · Testing sessions",
    body: "Tailored to your child — paced so it feels like puzzles and games, not an exam.",
  },
  {
    label: "3 · Feedback & report",
    body: "We sit down together; you leave with a clear written report and a plan.",
  },
  {
    label: "4 · Putting it to work",
    body: "Recommendations for home and school which can be used for IEPs, SAT/ACT and college accommodations, and school admissions.",
  },
];

export default function EvaluationsPage() {
  return (
    <>
      <Nav active="evaluations" />
      <main>
        <header className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div>
              <h1 className={styles.h1}>Neuropsychological and Diagnostic Assessments</h1>
              <p className={styles.lead}>
                Assessment is a critical piece in understanding your child and getting
                them the support they need. Every evaluation is comprehensive and
                tailored to your child, never one-size-fits-all.
              </p>
            </div>

            <aside className={styles.factCard}>
              <div className={styles.factLabel}>Who it&apos;s for</div>
              <div className={styles.ageTrack}>
                <span className="visuallyHidden">Ages 2½ through college</span>
                <div className={styles.ageBlocks} aria-hidden="true">
                  <span className={`${styles.ageBlock} ${styles.ageBlock1}`} />
                  <span className={`${styles.ageBlock} ${styles.ageBlock2}`} />
                  <Triangle width={44} height={40} color="var(--color-yellow)" strokeWidth={2} />
                  <span className={`${styles.ageBlock} ${styles.ageBlock4}`} />
                </div>
                <div className={styles.ageEnds} aria-hidden="true">
                  <span>Age 2½</span>
                  <span>College</span>
                </div>
              </div>

              <div className={styles.factLabel}>Often used for</div>
              <ul className={styles.useList}>
                <li className={styles.usePill}>
                  <span className={styles.useDot} style={{ background: "var(--color-indigo)" }} />
                  IEP &amp; 504 plans
                </li>
                <li className={styles.usePill}>
                  <span className={styles.useDot} style={{ background: "var(--color-pink)" }} />
                  SAT/ACT &amp; college accommodations
                </li>
                <li className={styles.usePill}>
                  <span className={styles.useDot} style={{ background: "var(--color-teal)" }} />
                  School admissions
                </li>
                <li className={`${styles.usePill} ${styles.usePillMore}`}>and more</li>
              </ul>
            </aside>
          </div>
        </header>

        <section className={styles.questionsSection}>
          <div className={`container ${styles.sectionInner}`}>
            <Reveal as="h2" className={styles.h2}>
              An evaluation can assess
            </Reveal>
            <div className={styles.grid}>
              {ASSESSMENT_AREAS.map((area) => (
                <Reveal as="div" key={area.title} className={styles.card}>
                  <div className={styles.cardIcon} aria-hidden="true">
                    {area.icon}
                  </div>
                  <div className={styles.cardTitle}>{area.title}</div>
                  <p className={styles.cardBody}>{area.body}</p>
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
              You know your child better than anyone. I help make sense of what&apos;s
              underneath the struggles. Together, we&apos;ll figure out what is getting
              in the way and map out a path forward.
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
          body="Bring your questions to the initial call — I'll tell you honestly whether testing makes sense for your child right now."
        />
      </main>
      <Footer />
    </>
  );
}
