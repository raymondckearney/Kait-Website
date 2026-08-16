import Reveal from "./Reveal";
import Button from "./Button";
import styles from "./CtaBand.module.css";

type CtaBandProps = {
  tone: "cobalt" | "paper";
  heading: string;
  body: string;
  buttonLabel?: string;
  buttonHref?: string;
};

/** Shared closing CTA band — "book the free call" — used on Services, Evaluations, About. */
export default function CtaBand({
  tone,
  heading,
  body,
  buttonLabel = "Book the free call",
  buttonHref = "/contact",
}: CtaBandProps) {
  return (
    <section className={`${styles.band} ${styles[tone]}`}>
      <div className={styles.inner}>
        <Reveal as="h2" className={styles.heading}>
          {heading}
        </Reveal>
        <Reveal as="p" className={styles.body}>
          {body}
        </Reveal>
        <Reveal as="div">
          <Button href={buttonHref} variant={tone === "cobalt" ? "onDark" : "primary"}>
            {buttonLabel}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
