import teamflowImg from "../assets/projects/teamflow.png";
import smritiImg from "../assets/projects/smriti-traders.png";
import smarthireImg from "../assets/projects/smarthire-hub.png";
import movieImg from "../assets/projects/movie-explorer.png";
import thinkboardImg from "../assets/projects/thinkboard.png";

const projects = [
  {
    title: "SmartHire Hub",
    description:
      "A job portal like platform which helps connect jobseekers and employers together. Employers will have to choose from different plans, free to premium plans to upload jobs.",
    tags: ["React", "Node.js", "MongoDB"],
    image: smarthireImg,
    liveUrl: "https://smart-hire-hub-suyog-bastakotis-projects.vercel.app/",
    githubUrl: null,
  },
  {
    title: "TeamFlow",
    description:
      "A project workspace with a Kanban-style task board. Create tasks, drag them between Todo, In Progress, and Done, and track progress in one place.",
    tags: ["React", "Node.js", "MongoDB"],
    image: teamflowImg,
    liveUrl: "https://team-flow-pearl-three.vercel.app/",
    githubUrl: null,
  },
  {
    title: "Thinkboard",
    description:
      "A todo-like productivity fullstack notes app for capturing and organizing ideas quickly.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    image: thinkboardImg,
    liveUrl: null,
    githubUrl: "https://github.com/suyogbastakoti/thinkboard",
  },
  {
    title: "Smriti Traders",
    description:
      "Business website for an authorized Berger Paints dealer in Kathmandu, Gaurighat — showcasing products and making it easy to get in touch.",
    tags: ["React", "Tailwind CSS"],
    image: smritiImg,
    liveUrl: "https://smriti-traders.vercel.app/",
    githubUrl: null,
  },
  {
    title: "MovieExplorer",
    description:
      "A movie discovery app to browse popular and top-rated films, search titles, and view ratings in a clean dark UI.",
    tags: ["React", "API"],
    image: movieImg,
    liveUrl: "https://movie-explorer-two-wheat.vercel.app/",
    githubUrl: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-pad">
      <div className="container-narrow">
        <div className="reveal mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium tracking-[0.16em] text-accent uppercase">
            Projects
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Things I've built
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            A selection of projects I've worked on.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group reveal reveal-delay-${(index % 4) + 1} flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]`}
            >
              <div className="relative overflow-hidden border-b border-border bg-bg-soft">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="aspect-[16/9] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-display text-xl font-bold tracking-tight text-text">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-bg-soft/70 px-3 py-1 text-xs font-medium text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-fg transition hover:-translate-y-0.5 hover:opacity-90"
                    >
                      Live Demo
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-text transition hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent-soft"
                    >
                      GitHub
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
