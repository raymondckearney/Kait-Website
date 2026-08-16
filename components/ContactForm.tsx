"use client";

import { useState, type FormEvent } from "react";
import styles from "./ContactForm.module.css";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

type Status = "idle" | "submitting";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setError("Please add your name and email so I can reply.");
      return;
    }
    if (!EMAIL_RE.test(email.trim())) {
      setError("That email doesn't look quite right — mind checking it?");
      return;
    }

    setError("");
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, age, message }),
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
    const firstName = name.trim() ? `, ${name.trim().split(" ")[0]}` : "";
    return (
      <div className={styles.formCard} id="form">
        <div className={styles.successWrap}>
          <div className={styles.successCheck} aria-hidden="true">
            ✓
          </div>
          <div className={styles.successTitle}>Got it!</div>
          <p className={styles.successBody}>
            Thanks{firstName}. I&apos;ll be in touch within one business day to
            schedule your free call.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formCard} id="form">
      <div className={styles.formTitle}>Request your free call</div>
      <p className={styles.formSubtitle}>Everything here is confidential.</p>
      <form className={styles.fields} onSubmit={handleSubmit} noValidate>
        <div className={styles.fieldRow}>
          <label className={styles.label}>
            Your name
            <input
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Alex Rivera"
              autoComplete="name"
            />
          </label>
          <label className={styles.label}>
            Email
            <input
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </label>
        </div>

        <label className={styles.label}>
          What are you looking for?
          <select
            className={styles.select}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          >
            <option value="">Select one — or skip it</option>
            <option value="play">Play therapy</option>
            <option value="pcit">PCIT / parent coaching</option>
            <option value="eval">Neuropsychological evaluation</option>
            <option value="school">School consultation</option>
            <option value="notsure">Not sure yet</option>
          </select>
        </label>

        <label className={styles.label}>
          What&apos;s going on at home?
          <textarea
            className={styles.textarea}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="A sentence or two is plenty — we'll cover the rest on the call."
          />
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
          {status === "submitting" ? "Sending…" : "Request the free call"}
        </button>

        <div className={styles.altContact}>
          Prefer email or phone? Use the links on the left — same response time either
          way.
        </div>
      </form>
    </div>
  );
}
