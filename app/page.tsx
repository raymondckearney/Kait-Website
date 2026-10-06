import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ColorStrip from "@/components/ColorStrip";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Band from "@/components/Band";
import PolaroidPhoto from "@/components/PolaroidPhoto";
import HeroBlocks from "@/components/HeroBlocks";
import ProcessSteps from "@/components/ProcessSteps";
import Triangle from "@/components/Triangle";
import styles from "./page.module.css";

const SERVICE_CARDS = [
  {
    tone: "cobalt",
    eyebrow: "For your child",
    title: "Individual therapy",
    body: "Children and teens working through big feelings in warm, structured sessions that build real skills without feeling like an appointment.",
    href: "#contact",
    cta: "Ask about individual therapy →",
  },
  {
    tone: "red",
    eyebrow: "For your family",
    title: "Parent and Family Therapy",
    body: "Real guidance for the hardest moments.",
    href: "#contact",
    cta: "Ask about parent and family therapy →",
  },
  {
    tone: "marigold",
    eyebrow: "Testing & assessment",
    title: "Neuropsychological evaluations",
    body: "Thorough, tailored testing that shows how your child's brain works — and exactly what support they need at school and at home.",
    href: "/evaluations",
    cta: "Explore evaluations →",
  },
  {
    tone: "green",
    eyebrow: "For your child's school",
    title: "School consultation",
    body: "I work collaboratively with teachers and schools to provide educator trainings, consultation, and classroom observations.",
    href: "#contact",
    cta: "Ask about school consultation →",
  },
] as const;

const STEPS: [
  { label: string; body: string },
  { label: string; body: string },
  { label: string; body: string },
  { label: string; body: string }
] = [
  {
    label: "1 · Free call",
    body: "Fifteen minutes. You talk, I listen, we decide if we're a fit.",
  },
  {
    label: "2 · First visit",
    body: "Individual session with your child to observe, assess, and begin building rapport. Parents join for part of it.",
  },
  {
    label: "3 · The plan",
    body: "A written plan in plain English: goals, methods, and your part at home.",
  },
  {
    label: "4 · The work",
    body: "Weekly sessions, check-ins, and adjustments along the way.",
  },
];

const CONCERNS = [
  { label: "ADHD", color: "var(--color-cobalt)", shape: "square" },
  { label: "Anxiety", color: "var(--color-red)", shape: "circle" },
  { label: "Depression", color: "var(--color-marigold)", shape: "square" },
  { label: "OCD", color: "var(--color-green)", shape: "circle" },
  { label: "ARFID", color: "var(--color-cobalt)", shape: "circle" },
  { label: "Autism", color: "var(--color-red)", shape: "square" },
  { label: "Disruptive behavior", color: "var(--color-marigold)", shape: "circle" },
  { label: "Learning difficulties", color: "var(--color-green)", shape: "square" },
] as const;

export default function HomePage() {
  return (
    <>
      <Nav active="home" />
      <main>
        {/* HERO */}
        <header className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroText}>
              <div className={styles.badge}>
                Child &amp; family psychology · New York City
              </div>
              <h1 className={styles.h1}>
                <span className={styles.h1Line}>Big feelings.</span>
                <span className={styles.h1Line}>
                  Bigger <span className={styles.h1Accent}>support</span>
                  <span className={styles.h1Dot} aria-hidden="true" />
                </span>
              </h1>
              <p className={styles.lead}>
                Individual therapy, neuropsychological evaluations, parent and family
                therapy — with a plan your whole family can follow.
              </p>
              <div className={styles.heroCtas}>
                <Button href="#contact" withDot>
                  Start with a free call
                </Button>
                <Button href="#services" variant="secondary">
                  See how I help
                </Button>
              </div>
            </div>
          </div>
          <div className="container">
            <HeroBlocks />
          </div>
        </header>

        <ColorStrip
          segments={[
            { color: "var(--color-cobalt)", flex: 2 },
            { color: "var(--color-red)", flex: 1 },
            { color: "var(--color-marigold)", flex: 3 },
            { color: "var(--color-green)", flex: 1.5 },
            { color: "var(--color-red)", flex: 1 },
          ]}
        />

        {/* SERVICES */}
        <section id="services" className={styles.servicesSection}>
          <div className={`container ${styles.sectionInner}`}>
            <Reveal as="div" className={styles.sectionTitleRow}>
              <span className={styles.sectionTitleIcon} aria-hidden="true" />
              <h2 className={styles.h2}>Four ways I help</h2>
            </Reveal>
            <Reveal as="p" className={styles.sectionLead}>
              From the therapy room to the classroom — individual therapy, testing,
              parent and family therapy, and school support that connect to one plan.
            </Reveal>

            <div className={styles.servicesGrid}>
              {SERVICE_CARDS.map((card) => (
                <Reveal as="div" key={card.title} className={styles.serviceCardWrap}>
                  <Link
                    href={card.href}
                    className={`${styles.serviceCard} ${styles[card.tone]}`}
                  >
                    <div className={styles.serviceIcons} aria-hidden="true">
                      <ServiceIcon tone={card.tone} />
                    </div>
                    <div className={styles.serviceEyebrow}>{card.eyebrow}</div>
                    <h3 className={styles.serviceTitle}>{card.title}</h3>
                    <p className={styles.serviceBody}>{card.body}</p>
                    <span className={styles.serviceCta}>{card.cta}</span>
                  </Link>
                </Reveal>
              ))}
            </div>

            <Reveal as="div" className={styles.chipsViewport}>
              <div className={styles.chipsTrack}>
                {[0, 1].map((setIndex) =>
                  CONCERNS.map((concern) => (
                    <span
                      key={`${setIndex}-${concern.label}`}
                      className={styles.chip}
                      aria-hidden={setIndex === 1 ? "true" : undefined}
                    >
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
                  ))
                )}
              </div>
            </Reveal>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className={styles.howSection}>
          <div className={`container ${styles.sectionInner}`}>
            <Reveal as="h2" className={styles.h2}>
              We build it one block at a time
            </Reveal>
            <Reveal as="p" className={styles.howLead}>
              Here&apos;s exactly how the first month goes.
            </Reveal>
            <ProcessSteps steps={STEPS} />
          </div>
        </section>

        {/* ABOUT TEASER */}
        <section id="about" className={styles.aboutSection}>
          <div className={`container ${styles.aboutGrid}`}>
            <Reveal as="div" className={styles.aboutPhotoWrap}>
              <PolaroidPhoto
                caption="Dr. Kait Kearney"
                rotate={-1.5}
                src="/images/kait-kearney.webp"
              />
              <div className={styles.aboutShapeSquare} aria-hidden="true" />
              <Triangle
                width={48}
                height={42}
                color="var(--color-green)"
                strokeWidth={2.5}
                className={styles.aboutShapeTriangle}
              />
            </Reveal>
            <div>
              <Reveal as="div" className={styles.aboutBadge}>
                <span className={styles.aboutBadgeDot} aria-hidden="true" />
                Meet your psychologist
              </Reveal>
              <Reveal as="h2" className={styles.aboutH2}>
                The doctor children ask to come back and see
              </Reveal>
              <Reveal as="p" className={styles.aboutBody}>
                I&apos;m a firm believer that therapy should feel more like building
                something than fixing someone. Parents tell me two things: their child
                actually looks forward to sessions, and they finally feel like they know
                what to do at home. That&apos;s the whole job.
              </Reveal>
              <Reveal as="div" className={styles.aboutPills}>
                <span className={styles.pill}>PhD, Clinical Psychology</span>
                <span className={styles.pill}>Licensed in New York</span>
                <span className={styles.pill}>In-person &amp; telehealth</span>
              </Reveal>
            </div>
          </div>
        </section>

        {/* QUOTE */}
        <Band tone="green" decorative>
          <Reveal
            as="div"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(26px, 3.4vw, 40px)",
              lineHeight: 1.25,
              letterSpacing: "-0.015em",
            }}
          >
            When a child is struggling, the whole family feels it. There&apos;s so much
            advice out there — and most of it misses what would make it work for real
            families: a plan and follow-up.
          </Reveal>
        </Band>

        {/* FINAL CTA */}
        <section id="contact" className={styles.ctaSection}>
          <div className={`container ${styles.ctaGrid}`}>
            <div className={styles.ctaTextCol}>
              <Reveal as="h2" className={styles.ctaH2}>
                Start with one small block
              </Reveal>
              <Reveal as="p" className={styles.ctaLead}>
                A 15-minute call. No paperwork, no pressure, no waitlist limbo.
              </Reveal>
              <Reveal as="div" className={styles.ctaButtons}>
                <Button href="mailto:kaitkearneyphd@gmail.com" variant="onDark">
                  Start with a free call
                </Button>
                <Button href="tel:+19295152147" variant="ghost">
                  (929) 515-2147
                </Button>
              </Reveal>
            </div>
            <div className={styles.ctaShapes} aria-hidden="true">
              <div className={styles.ctaShapeBig} />
              <div className={styles.ctaShapeSquare} />
              <div className={styles.ctaShapeArch} />
              <div className={styles.ctaShapeBall} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ServiceIcon({ tone }: { tone: (typeof SERVICE_CARDS)[number]["tone"] }) {
  switch (tone) {
    case "cobalt":
      return (
        <>
          <span
            style={{
              width: 48,
              height: 48,
              background: "var(--color-marigold)",
              border: "2px solid var(--color-ink)",
              borderRadius: 12,
              display: "inline-block",
              animation: "tumTickle 5s 1s ease-in-out infinite",
            }}
          />
          <span
            style={{
              width: 26,
              height: 26,
              background: "var(--color-red)",
              border: "2px solid var(--color-ink)",
              borderRadius: "50%",
              display: "inline-block",
            }}
          />
        </>
      );
    case "red":
      return (
        <>
          <span
            style={{
              width: 48,
              height: 27,
              background: "var(--color-green)",
              border: "2px solid var(--color-ink)",
              borderRadius: "27px 27px 0 0",
              display: "inline-block",
              animation: "tumTickle 5s 2s ease-in-out infinite",
            }}
          />
          <Triangle width={30} height={27} color="var(--color-marigold)" strokeWidth={2} />
        </>
      );
    case "marigold":
      return (
        <>
          <span
            style={{
              width: 48,
              height: 48,
              background: "var(--color-cobalt)",
              border: "2px solid var(--color-ink)",
              borderRadius: "50%",
              display: "inline-block",
              animation: "tumTickle 5s 1.5s ease-in-out infinite",
            }}
          />
          <span
            style={{
              width: 26,
              height: 26,
              background: "var(--color-paper)",
              border: "2px solid var(--color-ink)",
              borderRadius: 6,
              display: "inline-block",
              transform: "rotate(8deg)",
            }}
          />
        </>
      );
    case "green":
      return (
        <>
          <Triangle
            width={48}
            height={42}
            color="var(--color-marigold)"
            strokeWidth={2}
            style={{ animation: "tumTickle 5s 0.5s ease-in-out infinite" }}
          />
          <span
            style={{
              width: 26,
              height: 26,
              background: "var(--color-red)",
              border: "2px solid var(--color-ink)",
              borderRadius: "50%",
              display: "inline-block",
            }}
          />
        </>
      );
  }
}
