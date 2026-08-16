import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ColorStrip from "@/components/ColorStrip";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Band from "@/components/Band";
import CtaBand from "@/components/CtaBand";
import PolaroidPhoto from "@/components/PolaroidPhoto";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Kait Kearney, PhD — a licensed clinical psychologist in New York City with seven years in practice, working with children, teens, and the parents who love them.",
};

const CREDENTIALS = [
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
    title: "PhD, Clinical Psychology",
    body: "Clinical psychologist with extensive child and family training at Northwell and New York City hospitals.",
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
    title: "Licensed in New York",
    body: "Licensed psychologist in New York State, seven years in practice. In-person and telehealth.",
  },
  {
    icon: (
      <span
        style={{
          width: 0,
          height: 0,
          borderLeft: "18px solid transparent",
          borderRight: "18px solid transparent",
          borderBottom: "32px solid var(--color-green)",
          display: "inline-block",
        }}
      />
    ),
    title: "Neuropsych assessment",
    body: "Extensive testing and assessment experience at hospital-based developmental clinics and The Child Mind Institute.",
  },
  {
    icon: (
      <span
        style={{
          width: 40,
          height: 22,
          background: "var(--color-cobalt)",
          border: "2px solid var(--color-ink)",
          borderRadius: "22px 22px 0 0",
          display: "inline-block",
        }}
      />
    ),
    title: "School experience",
    body: "Former private-school psychologist — I know how classrooms work and how to partner with them.",
  },
];

const WORK_ITEMS = [
  {
    color: "var(--color-marigold)",
    radius: 11,
    rotate: 0,
    title: "Kids do the choosing",
    body: "Sessions are built around play your child actually picks. When kids feel in charge of the room, the real work happens without a fight.",
  },
  {
    color: "var(--color-red)",
    radius: "50%",
    rotate: 0,
    title: "Parents are partners, not spectators",
    body: "You're in the loop after every session — what we did, why, and the one thing to practice at home. No black box.",
  },
  {
    color: "var(--color-green)",
    radius: 11,
    rotate: 8,
    title: "Progress you can point to",
    body: "We set concrete goals in week one and measure against them. If something isn't working, we change it — out loud, together.",
  },
  {
    color: "var(--color-cobalt)",
    radius: "50%",
    rotate: 0,
    title: "The goal is to finish",
    body: "Good therapy ends. We work toward the day your family doesn't need me — and celebrate when we get there.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <Nav active="about" />
      <main>
        <header className={styles.hero}>
          <div className={`container ${styles.heroGrid}`}>
            <div>
              <div className={styles.badge}>About · New York City</div>
              <h1 className={styles.h1}>
                Hi, I&apos;m Kait<span className={styles.h1Accent}>.</span>
              </h1>
              <p className={styles.lead}>
                Licensed clinical psychologist, seven years in practice, and a firm
                believer that therapy should feel more like building something than
                fixing someone.
              </p>
              <p className={styles.lead}>
                I started this practice because parenthood is hard, and the mountain of
                advice out there usually misses what makes it workable: a realistic plan
                and real follow-up. And when a child needs more than a plan, thorough
                neuropsychological testing shows how their brain works — and how to get
                them the right support.
              </p>
              <Button href="/contact" withDot>
                Say hello on a free call
              </Button>
            </div>
            <div className={styles.photoWrap}>
              <PolaroidPhoto caption="Dr. Kait Kearney" rotate={1.5} height={460} />
              <div className={styles.photoShapeSquare} aria-hidden="true" />
              <div className={styles.photoShapeTriangle} aria-hidden="true" />
            </div>
          </div>
        </header>

        <ColorStrip
          segments={[
            { color: "var(--color-green)", flex: 1.5 },
            { color: "var(--color-marigold)", flex: 2.5 },
            { color: "var(--color-red)", flex: 1 },
            { color: "var(--color-cobalt)", flex: 2 },
          ]}
        />

        <section className={styles.credentialsSection}>
          <div className={`container ${styles.sectionInner}`}>
            <Reveal as="h2" className={styles.h2}>
              Training you can check
            </Reveal>
            <Reveal as="p" className={styles.credentialsLead}>
              Credentials aren&apos;t the whole story, but they&apos;re the floor
              everything else stands on.
            </Reveal>
            <div className={styles.credentialsGrid}>
              {CREDENTIALS.map((c) => (
                <Reveal as="div" key={c.title} className={styles.credentialCard}>
                  <div className={styles.credentialIcon} aria-hidden="true">
                    {c.icon}
                  </div>
                  <div className={styles.credentialTitle}>{c.title}</div>
                  <div className={styles.credentialBody}>{c.body}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.workSection}>
          <div className={`container ${styles.workGrid}`}>
            <Reveal as="div" className={styles.workHeadingRow}>
              <span className={styles.workHeadingIcon} aria-hidden="true" />
              <h2 className={styles.workH2}>What it&apos;s like to work with me</h2>
            </Reveal>
            <div className={styles.workList}>
              {WORK_ITEMS.map((item) => (
                <Reveal as="div" key={item.title} className={styles.workItem}>
                  <span
                    className={styles.workIcon}
                    style={{
                      background: item.color,
                      borderRadius: item.radius,
                      transform: item.rotate ? `rotate(${item.rotate}deg)` : undefined,
                    }}
                    aria-hidden="true"
                  />
                  <div>
                    <div className={styles.workItemTitle}>{item.title}</div>
                    <p className={styles.workItemBody}>{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Band tone="cobalt" decorative>
          <Reveal as="h2" className={styles.offHeading}>
            Off the clock
          </Reveal>
          <Reveal as="p" className={styles.offBody}>
            You&apos;ll find me out on a hiking trail, deep in a good book, or spending
            time with my kids — who keep me honest about everything I recommend to other
            parents.
          </Reveal>
        </Band>

        <CtaBand
          tone="paper"
          heading="Let's talk about your family"
          body="Fifteen free minutes. You'll know by the end whether this feels right."
        />
      </main>
      <Footer />
    </>
  );
}
