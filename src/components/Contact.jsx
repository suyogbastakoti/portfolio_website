import { useState } from "react";

const EMAIL = "suyog017@gmail.com";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;

const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMsg("Please fill in all fields.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio message from ${name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message.");
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <section id="contact" className="section-pad">
      <div className="container-narrow">
        <div className="reveal glass overflow-hidden rounded-3xl border border-border p-6 shadow-[0_16px_50px_rgba(0,0,0,0.06)] sm:p-8 md:p-10 dark:shadow-[0_16px_50px_rgba(0,0,0,0.35)]">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div>
              <p className="mb-3 text-sm font-medium tracking-[0.16em] text-accent uppercase">
                Get in Touch
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Let's build something great
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg">
                Open for freelance projects, full-time roles, and interesting
                collaborations. If you have something in mind, I'd love to hear
                about it.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="group inline-flex items-center justify-between rounded-xl border border-border bg-card/70 px-4 py-3 text-sm font-medium text-text transition hover:border-accent/40 hover:bg-accent-soft"
                >
                  {EMAIL}
                  <span
                    className="text-muted transition group-hover:text-accent"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
                <a
                  href="https://github.com/suyogbastakoti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-between rounded-xl border border-border bg-card/70 px-4 py-3 text-sm font-medium text-text transition hover:border-accent/40 hover:bg-accent-soft"
                >
                  GitHub
                  <span
                    className="text-muted transition group-hover:text-accent"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/suyog-bastakoti-a106a9225/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-between rounded-xl border border-border bg-card/70 px-4 py-3 text-sm font-medium text-text transition hover:border-accent/40 hover:bg-accent-soft"
                >
                  LinkedIn
                  <span
                    className="text-muted transition group-hover:text-accent"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
                <a
                  href="resume"
                  className="group inline-flex items-center justify-between rounded-xl border border-border bg-card/70 px-4 py-3 text-sm font-medium text-text transition hover:border-accent/40 hover:bg-accent-soft"
                >
                  Download Resume
                  <span
                    className="text-muted transition group-hover:text-accent"
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </a>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card/80 p-5 sm:p-6"
              noValidate
            >
              {/* Honeypot — leave empty; bots fill this */}
              <input
                type="text"
                name="_honey"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-text"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your Name"
                    disabled={status === "loading"}
                    className="w-full rounded-xl border border-border bg-bg/60 px-3.5 py-2.5 text-sm text-text placeholder:text-muted/80 transition focus:border-accent focus:outline-none disabled:opacity-60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-text"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="your@email.com"
                    disabled={status === "loading"}
                    className="w-full rounded-xl border border-border bg-bg/60 px-3.5 py-2.5 text-sm text-text placeholder:text-muted/80 transition focus:border-accent focus:outline-none disabled:opacity-60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-text"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    disabled={status === "loading"}
                    className="w-full resize-y rounded-xl border border-border bg-bg/60 px-3.5 py-2.5 text-sm text-text placeholder:text-muted/80 transition focus:border-accent focus:outline-none disabled:opacity-60"
                  />
                </div>
              </div>

              {status === "success" && (
                <p className="mt-4 text-sm text-accent" role="status">
                  Message sent. I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-sm text-red-500" role="alert">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-fg transition hover:-translate-y-0.5 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
