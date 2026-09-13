const About = () => {
  return (
    <section id="about" className="section-pad">
      <div className="container-narrow">
        <div className="reveal grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-medium tracking-[0.16em] text-accent uppercase">
              About
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
              A bit about me
            </h2>
          </div>

          <div className="glass rounded-2xl p-6 sm:p-8">
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              I craft fast, accessible, and beautifully detailed web interfaces.
              1.5+ years turning complex ideas into clean code.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-border bg-bg-soft/60 px-3 py-1 text-xs font-medium text-muted">
                Frontend
              </span>
              <span className="rounded-full border border-border bg-bg-soft/60 px-3 py-1 text-xs font-medium text-muted">
                Full-Stack
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
