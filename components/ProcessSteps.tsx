import Reveal from "./Reveal";
import styles from "./ProcessSteps.module.css";

type Step = {
  label: string;
  body: string;
};

type ProcessStepsProps = {
  steps: [Step, Step, Step, Step];
  dotColor?: string;
};

const HEIGHT_KEYS = ["step1", "step2", "step3", "step4"] as const;

/** Four blocks stacking up step by step — shared by Home ("how it works") and Evaluations. */
export default function ProcessSteps({ steps, dotColor }: ProcessStepsProps) {
  return (
    <div className={styles.grid}>
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        return (
          <Reveal as="div" key={step.label} className={styles.card}>
            <div className={`${styles.top} ${isLast ? styles.dark : ""}`}>
              <div className={styles.label}>{step.label}</div>
              <div className={styles.body}>{step.body}</div>
            </div>
            <div className={`${styles.base} ${styles[HEIGHT_KEYS[i]]}`}>
              {isLast && (
                <span
                  className={styles.baseDot}
                  style={dotColor ? { background: dotColor } : undefined}
                  aria-hidden="true"
                />
              )}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
