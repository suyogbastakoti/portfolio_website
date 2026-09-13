const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/suyogbastakoti",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/suyog-bastakoti-a106a9225/",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center section-pad pt-28 md:pt-32"
    >
      <div className="container-narrow relative z-10">
        <p className="hero-enter mb-4 text-sm font-medium tracking-[0.18em] text-accent uppercase">
          SB Codes · Suyog Bastakoti
        </p>

        <h1 className="hero-enter-delay-1 font-display max-w-3xl text-4xl leading-[1.08] font-bold tracking-tight text-text sm:text-5xl md:text-6xl lg:text-[4.25rem]">
          Frontend / Full-Stack{" "}
          <span className="text-accent">Developer</span>
        </h1>

        <p className="hero-enter-delay-2 mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          I craft fast, accessible, and beautifully detailed web interfaces.
          1.5+ years turning complex ideas into clean code.
        </p>

        <div className="hero-enter-delay-3 mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-fg shadow-sm transition hover:-translate-y-0.5 hover:opacity-90"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-text backdrop-blur-md transition hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent-soft"
          >
            Get in touch
          </a>
        </div>

        <div className="hero-enter-delay-4 mt-10 flex flex-wrap items-center gap-4 text-sm text-muted">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-accent"
            >
              {link.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs tracking-widest text-muted uppercase transition hover:text-accent sm:flex"
        aria-label="Scroll to about section"
      >
        <span>Scroll</span>
        <span className="h-8 w-px bg-border" aria-hidden="true" />
      </a>
    </section>
  );
};

export default Hero;
