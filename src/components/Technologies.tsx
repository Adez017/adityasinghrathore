import { useEffect, useRef } from "react";
import {
  siPython,
  siApachespark,
  siDocker,
  siGit,
  siPostgresql,
  siDatabricks,
  siMysql,
  siApacheairflow,
} from "simple-icons";

// Azure does not have an entry in simple-icons; using the official Microsoft Azure SVG path
const siAzureCustom = {
  title: "Azure",
  path: "M0 0h11.753l-6.651 7.297 6.651 9.391H0V0zm12.247 0h11.753v16.688l-11.753.002V0z",
};

type Technology = {
  name: string;
  url: string;
  icon: { path: string; title: string };
};

const technologies: Technology[] = [
  { name: "Python",         url: "https://python.org",           icon: siPython },
  { name: "Apache Spark",   url: "https://spark.apache.org",     icon: siApachespark },
  { name: "Databricks",     url: "https://databricks.com",       icon: siDatabricks },
  { name: "Azure",          url: "https://azure.microsoft.com",  icon: siAzureCustom },
  { name: "PostgreSQL",     url: "https://postgresql.org",       icon: siPostgresql },
  { name: "MySQL",          url: "https://mysql.com",            icon: siMysql },
  { name: "Docker",         url: "https://docker.com",           icon: siDocker },
  { name: "Git",            url: "https://git-scm.com",          icon: siGit },
  { name: "Apache Airflow", url: "https://airflow.apache.org",   icon: siApacheairflow },
];

const Technologies = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const root = document.getElementById("page-content");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger each tile: 60 ms per item
          Array.from(grid.children).forEach((child, i) => {
            (child as HTMLElement).style.transitionDelay = `${i * 60}ms`;
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
    <section id="technologies" className="section-padding">
      <h2 className="pb-4 text-3xl font-bold">Technologies</h2>

      <div
        ref={gridRef}
        className="stagger-reveal grid grid-cols-3 place-items-center gap-4 pt-4 sm:grid-cols-3 sm:gap-8 md:grid-cols-4 xl:grid-cols-8"
      >
        {technologies.map((tech) => (
          <a
            key={tech.name}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            title={tech.name}
            className="flex aspect-square w-20 flex-col items-center justify-center gap-2 rounded-md bg-accent-foreground/10 p-3 backdrop-blur-sm transition-transform hover:scale-110 sm:w-32"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="size-8 fill-current transition-colors sm:size-12"
            >
              <title>{tech.icon.title}</title>
              <path d={tech.icon.path} />
            </svg>
            <span className="text-center text-sm font-medium">
              {tech.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
