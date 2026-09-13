const skillGroups = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML5",
        description: "Semantic, accessible markup",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              fill="currentColor"
              d="M4 3h16l-1.5 17L12 22l-6.5-2L4 3zm3.2 5.5h9.5l.2-2H7l.2 2zm.3 3.5 0.3 3.2L12 16.5l4.2-1.3.4-4.2H7.5z"
            />
          </svg>
        ),
      },
      {
        name: "CSS3",
        description: "Layouts, motion, polish",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              fill="currentColor"
              d="M4 3h16l-1.5 17L12 22l-6.5-2L4 3zm8 14.2 4.1-1.3.4-4.4H11v-2h6.1l.3-2.5H7.5l.8 9.2L12 17.2z"
            />
          </svg>
        ),
      },
      {
        name: "JavaScript",
        description: "Interactive UI logic",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              fill="currentColor"
              d="M3 3h18v18H3V3zm10.2 14.2c0 1.8-1.1 2.8-2.9 2.8-1.5 0-2.5-.7-3-1.8l1.6-1c.3.5.6.9 1.3.9.7 0 1.1-.3 1.1-1.4v-4.9h1.9v5.4zm4.9 2.8c-1.8 0-3-.9-3.6-2.1l1.6-1c.3.6.8 1.1 1.8 1.1.8 0 1.3-.4 1.3-1s-.5-.8-1.7-1.2c-1.8-.6-3-1.5-3-3.2 0-1.7 1.3-2.9 3.2-2.9 1.4 0 2.4.5 3.1 1.8l-1.5 1c-.3-.5-.7-.8-1.5-.8-.7 0-1.1.3-1.1.8 0 .5.4.8 1.6 1.2 1.9.7 3.1 1.5 3.1 3.3 0 1.9-1.4 3-3.3 3z"
            />
          </svg>
        ),
      },
      {
        name: "React.js",
        description: "Component-driven UIs",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              opacity="0.9"
            >
              <ellipse cx="12" cy="12" rx="9" ry="3.5" />
              <ellipse
                cx="12"
                cy="12"
                rx="9"
                ry="3.5"
                transform="rotate(60 12 12)"
              />
              <ellipse
                cx="12"
                cy="12"
                rx="9"
                ry="3.5"
                transform="rotate(120 12 12)"
              />
            </g>
          </svg>
        ),
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first styling",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 6c-2.5 0-4.1 1.2-4.8 3.7 1-1.2 2.1-1.7 3.4-1.4.8.2 1.3.7 1.9 1.3.9 1 2 1.7 3.5 1.7 2.5 0 4.1-1.2 4.8-3.7-1 1.2-2.1 1.7-3.4 1.4-.8-.2-1.3-.7-1.9-1.3C15.6 6.7 14.5 6 12 6zM7.2 12.7c-2.5 0-4.1 1.2-4.8 3.7 1-1.2 2.1-1.7 3.4-1.4.8.2 1.3.7 1.9 1.3.9 1 2 1.7 3.5 1.7 2.5 0 4.1-1.2 4.8-3.7-1 1.2-2.1 1.7-3.4 1.4-.8-.2-1.3-.7-1.9-1.3-.9-1-2-1.7-3.5-1.7z"
            />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        description: "Server-side JavaScript",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 2.4 4.8 6.5v11l7.2 4.1 7.2-4.1v-11L12 2.4zm0 2.2 5.2 3v3.4l-2.4 1.3V9.5L12 8.2 9.2 9.5v5.2L12 16l2.8-1.4v2.2L12 18.4l-5.2-3V7.6L12 4.6z"
            />
          </svg>
        ),
      },
      {
        name: "Express.js",
        description: "API routing & middleware",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              fill="currentColor"
              d="M3 12h13.5a2.5 2.5 0 1 0 0-5H14v2h2.5a.5.5 0 0 1 0 1H3v2zm0 4h8v2H3v-2zm18-1.5-2.2 2.2-1.4-1.4 2.2-2.2-2.2-2.2 1.4-1.4 2.2 2.2 2.2-2.2 1.4 1.4-2.2 2.2 2.2 2.2-1.4 1.4-2.2-2.2z"
            />
          </svg>
        ),
      },
      {
        name: "REST APIs",
        description: "Structured HTTP services",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              fill="currentColor"
              d="M4 7h16v2H4V7zm0 4h10v2H4v-2zm0 4h16v2H4v-2z"
            />
          </svg>
        ),
      },
      {
        name: "JWT",
        description: "Auth & secure sessions",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 2a5 5 0 0 1 5 5v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v2h6V7a3 3 0 0 0-3-3zm0 9a2 2 0 1 0 .001 4.001A2 2 0 0 0 12 13z"
            />
          </svg>
        ),
      },
      {
        name: "Axios",
        description: "HTTP client requests",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              fill="currentColor"
              d="M7 4h10v2H7V4zm-2 4h14v2H5V8zm2 4h10v2H7v-2zm-2 4h14v2H5v-2zm5 4h4v2h-4v-2z"
            />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Database / Full Stack",
    skills: [
      {
        name: "MongoDB",
        description: "Document database",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 2s4.5 3.2 4.5 9.2c0 4.1-2 6.7-4.5 10.8-2.5-4.1-4.5-6.7-4.5-10.8C7.5 5.2 12 2 12 2zm0 5.2c-.9 1.2-1.5 2.7-1.5 4.5 0 2 .7 3.4 1.5 4.9.8-1.5 1.5-2.9 1.5-4.9 0-1.8-.6-3.3-1.5-4.5z"
            />
          </svg>
        ),
      },
      {
        name: "MERN Stack",
        description: "End-to-end web apps",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              fill="currentColor"
              d="M4 6h6v6H4V6zm10 0h6v6h-6V6zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z"
            />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Tools / Other",
    skills: [
      {
        name: "Git",
        description: "Version control",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              fill="currentColor"
              d="M21.6 11.1 12.9 2.4a1.4 1.4 0 0 0-2 0L8.8 4.5l2.5 2.5a1.7 1.7 0 0 1 2.1 2.1l2.4 2.4a1.7 1.7 0 1 1-1 1l-2.4-2.4v6.3a1.7 1.7 0 1 1-1.3.1v-6.4a1.7 1.7 0 0 1-.9-2.2L7.7 5.6 2.4 10.9a1.4 1.4 0 0 0 0 2l8.7 8.7a1.4 1.4 0 0 0 2 0l8.5-8.5a1.4 1.4 0 0 0 0-2z"
            />
          </svg>
        ),
      },
      {
        name: "GitHub",
        description: "Code collaboration",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7c-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-.1 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5A10 10 0 0 0 12 2z"
            />
          </svg>
        ),
      },
      {
        name: "Vercel",
        description: "Frontend deployment",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path fill="currentColor" d="M12 4 3 20h18L12 4z" />
          </svg>
        ),
      },
      {
        name: "Figma",
        description: "UI design & prototypes",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              fill="currentColor"
              d="M8.5 2A3.5 3.5 0 0 0 5 5.5 3.5 3.5 0 0 0 8.5 9H12V2H8.5zM12 9H8.5A3.5 3.5 0 0 0 5 12.5 3.5 3.5 0 0 0 8.5 16H12V9zm0 7H8.5A3.5 3.5 0 1 0 12 19.5V16zm3.5-7a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM15.5 2H12v7h3.5a3.5 3.5 0 1 0 0-7z"
            />
          </svg>
        ),
      },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-pad">
      <div className="container-narrow">
        <div className="reveal mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium tracking-[0.16em] text-accent uppercase">
            Skills
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Technologies I work with
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Tools and technologies I use to build web applications.
          </p>
        </div>

        <div className="space-y-10">
          {skillGroups.map((group, groupIndex) => (
            <div key={group.title} className="reveal">
              <h3 className="mb-4 text-sm font-semibold tracking-[0.14em] text-muted uppercase">
                {group.title}
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.skills.map((skill, index) => (
                  <article
                    key={skill.name}
                    className={`group rounded-2xl border border-border bg-card p-4 transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)] ${
                      groupIndex % 2 === 0 ? "glass" : ""
                    } reveal-delay-${(index % 4) + 1}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent transition group-hover:scale-105">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-text">{skill.name}</h4>
                        <p className="mt-1 text-sm text-muted">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
