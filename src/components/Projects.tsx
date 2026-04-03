import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Carsales Data Pipeline",
    description:
      "Custom pipeline processing 3,000+ rows with medallion architecture and automated workflows for comprehensive data processing.",
    technologies: ["Azure", "Data Factory", "PySpark", "Synapse", "Spark"],
    github: "https://github.com/Adez017/CarSales-End-to-End-Project",
  },
  {
    title: "Azure End-to-End Project",
    description:
      "Comprehensive data solution handling 60,000+ rows with OPENROWSET() and Watermark strategy for batch and streaming data.",
    technologies: ["Azure", "Data Factory", "PySpark", "Synapse", "Spark"],
    github: "https://github.com/Adez017/Azure-End-to-End-Project",
  },
  {
    title: "SQL Data Warehouse Project",
    description:
      "End-to-end data warehouse solution built with SQL, implementing dimensional modelling and optimised query patterns for analytical workloads.",
    technologies: ["SQL", "Data Warehousing", "Data Modeling", "ETL"],
    github: "https://github.com/Adez017/SQL_Datawarehouse_Project",
  },
];

const Projects = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const root = document.getElementById("page-content");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          Array.from(grid.children).forEach((child, i) => {
            (child as HTMLElement).style.transitionDelay = `${i * 100}ms`;
          });
          grid.classList.add("is-visible");
          observer.unobserve(grid);
        }
      },
      { root, threshold: 0.1 }
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section-padding">
      <h2 className="gradient-heading pb-4 text-3xl font-bold">Projects</h2>

      <div
        ref={gridRef}
        className="stagger-reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <div
            key={project.title}
            className="glass-card tilt-3d flex flex-col gap-3 rounded-xl p-5"
          >
            <h3 className="font-semibold text-foreground">{project.title}</h3>
            <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-sm border border-border px-2 py-0.5 font-mono text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-80"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
