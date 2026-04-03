import { useEffect, useRef } from "react";

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
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const root = document.getElementById("page-content");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger each list item: 100 ms between items
          Array.from(list.children).forEach((child, i) => {
            (child as HTMLElement).style.transitionDelay = `${i * 100}ms`;
          });
          list.classList.add("is-visible");
          observer.unobserve(list);
        }
      },
      { root, threshold: 0.1 }
    );

    observer.observe(list);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section-padding">
      <h2 className="gradient-heading pb-4 text-3xl font-bold">Projects</h2>

      {/* List.svelte style: font-mono bullet points with hover animation */}
      <ul ref={listRef} className="stagger-reveal glass-card flex flex-col gap-2 rounded-xl p-6 font-mono sm:gap-1">
        {projects.map((project) => (
          <li
            key={project.title}
            className="hover:text-accent-foreground group inline w-fit transition-transform hover:translate-x-2 hover:font-bold hover:italic"
          >
            <span className="group-hover:hidden">&bull;</span>
            <span className="hidden group-hover:inline-block">&raquo;</span>{" "}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
