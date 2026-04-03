import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Carsales Data Pipeline",
      description:
        "Custom pipeline processing 3,000+ rows with medallion architecture and automated workflows for comprehensive data processing.",
      technologies: ["Azure", "Data Factory", "PySpark", "Synapse", "Spark"],
      github: "https://github.com/Adez017",
    },
    {
      title: "Azure End-to-End Project",
      description:
        "Comprehensive data solution handling 60,000+ rows with OPENROWSET() and Watermark strategy for batch and streaming data.",
      technologies: ["Azure", "Data Factory", "PySpark", "Synapse", "Spark"],
      github: "https://github.com/Adez017",
    },
    {
      title: "Jarvis – AI Voice Assistant",
      description:
        "Intelligent desktop assistant capable of executing system commands and providing GPT-powered responses through voice interaction.",
      technologies: [
        "Python",
        "OpenAI GPT API",
        "Speech Recognition",
        "Text-to-Speech",
      ],
      github: "https://github.com/Adez017",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <h2 className="pb-4 text-3xl font-bold">Projects</h2>

      <ul className="divide-y divide-border">
        {projects.map((project) => (
          <li key={project.title} className="group py-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-between gap-4 transition-opacity hover:opacity-80"
            >
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-semibold leading-tight group-hover:underline">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm border border-border px-2 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <Github className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:scale-110" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
