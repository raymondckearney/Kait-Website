"use client";

import { useId, useState, type FormEvent } from "react";
import styles from "./ContactForm.module.css";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const SERVICE_OPTIONS = [
  "Child therapy",
  "Family therapy",
  "Parent consultation/support",
  "Testing/assessment",
] as const;

type Status = "idle" | "submitting";

export default function ContactForm() {
  const formId = useId();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const [email, setEmail] = useState("");
  const [bestTime, setBestTime] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [otherInfo, setOtherInfo] = useState("");
  const [acknowledgedOutOfNetwork, setAcknowledgedOutOfNetwork] = useState(false);

  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  function toggleService(service: string) {
    setServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim() || !cellPhone.trim() || !email.trim()) {
      setError("Please fill in your first name, last name, cell phone, and email.");
      return;
    }
    if (!EMAIL_RE.test(email.trim())) {
      setError("That email doesn't look quite right — mind checking it?");
      return;
    }
    if (services.length === 0) {
      setError("Please select at least one service you're interested in.");
      return;
    }
    if (!acknowledgedOutOfNetwork) {
      setError("Please confirm you understand Dr. Kearney is an out-of-network provider.");
      return;
    }

    setError("");
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          cellPhone,
          email,
          bestTime,
          services,
          otherInfo,
          acknowledgedOutOfNetwork,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error ?? "Something went wrong. Please try again.");
        setStatus("idle");
        return;
      }

      setSent(true);
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("idle");
    }
  }

  if (sent) {
    return (
      <div className={styles.formCard}>
        <div className={styles.successWrap}>
          <div className={styles.successCheck} aria-hidden="true">
            ✓
          </div>
          <div className={styles.successTitle}>Got it{firstName.trim() ? `, ${firstName.trim()}` : ""}!</div>
          <p className={styles.successBody}>
            Thanks for reaching out. I&apos;ll be in touch within one business day.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formCard}>
      <div className={styles.formTitle}>Request your free call</div>
      <p className={styles.formSubtitle}>Everything here is confidential.</p>
      <form className={styles.fields} onSubmit={handleSubmit} noValidate>
        <div className={styles.fieldRow}>
          <label className={styles.label} htmlFor={`${formId}-firstName`}>
            <span className={styles.labelText}>
              First name <span className={styles.required}>*</span>
            </span>
            <input
              id={`${formId}-firstName`}
              className={styles.input}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              autoComplete="given-name"
              required
            />
          </label>
          <label className={styles.label} htmlFor={`${formId}-lastName`}>
            <span className={styles.labelText}>
              Last name <span className={styles.required}>*</span>
            </span>
            <input
              id={`${formId}-lastName`}
              className={styles.input}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              autoComplete="family-name"
              required
            />
          </label>
        </div>

        <div className={styles.fieldRow}>
          <label className={styles.label} htmlFor={`${formId}-cellPhone`}>
            <span className={styles.labelText}>
              Cell phone <span className={styles.required}>*</span>
            </span>
            <input
              id={`${formId}-cellPhone`}
              className={styles.input}
              type="tel"
              value={cellPhone}
              onChange={(e) => setCellPhone(e.target.value)}
              autoComplete="tel"
              required
            />
          </label>
          <label className={styles.label} htmlFor={`${formId}-email`}>
            <span className={styles.labelText}>
              Email <span className={styles.required}>*</span>
            </span>
            <input
              id={`${formId}-email`}
              className={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </label>
        </div>

        <label className={styles.label} htmlFor={`${formId}-bestTime`}>
          Best time to call
          <input
            id={`${formId}-bestTime`}
            className={styles.input}
            value={bestTime}
            onChange={(e) => setBestTime(e.target.value)}
            placeholder="e.g. weekday mornings"
          />
        </label>

        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>
            What services are you interested in? <span className={styles.required}>*</span>
          </legend>
          <div className={styles.checkboxGrid}>
            {SERVICE_OPTIONS.map((service) => (
              <label key={service} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={services.includes(service)}
                  onChange={() => toggleService(service)}
                />
                {service}
              </label>
            ))}
          </div>
        </fieldset>

        <label className={styles.label} htmlFor={`${formId}-otherInfo`}>
          Any other information you&apos;d like to share?
          <textarea
            id={`${formId}-otherInfo`}
            className={styles.textarea}
            value={otherInfo}
            onChange={(e) => setOtherInfo(e.target.value)}
            rows={4}
          />
        </label>

        <label className={styles.ackLabel}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={acknowledgedOutOfNetwork}
            onChange={(e) => setAcknowledgedOutOfNetwork(e.target.checked)}
            required
          />
          I understand Dr. Kearney is an out-of-network provider.{" "}
          <span className={styles.required}>*</span>
        </label>

        {error && (
          <div className={styles.errorBox} role="alert">
            {error}
          </div>
        )}

        <button
          type="submit"
          className={styles.submitButton}
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Send"}
        </button>

        <div className={styles.altContact}>
          Prefer email or phone? Use the links in the footer — same response time either
          way.
        </div>
      </form>
    </div>
  );
}
