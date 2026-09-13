const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border px-5 py-8 sm:px-8 md:px-12 lg:px-20 xl:px-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          &copy; 2026 Suyog Bastakoti — Built With Care
        </p>

        <div className="flex flex-wrap items-center gap-5 text-sm">
          <a
            href="https://github.com/suyogbastakoti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition hover:text-accent"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/suyog-bastakoti-a106a9225/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition hover:text-accent"
          >
            LinkedIn
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            className="rounded-full border border-border px-3.5 py-1.5 text-sm font-medium text-text transition hover:border-accent/40 hover:bg-accent-soft"
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
