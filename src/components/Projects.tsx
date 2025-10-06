import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Carsales Data Pipeline",
      description: "Custom pipeline processing 3,000+ rows with medallion architecture and automated workflows for comprehensive data processing.",
      technologies: ["Azure", "Data Factory", "PySpark", "Synapse", "Spark"],
      github: "https://github.com/Adez017",
    },
    {
      title: "Azure End-to-End Project",
      description: "Comprehensive data solution handling 60,000+ rows with OPENROWSET() and Watermark strategy for batch and streaming data.",
      technologies: ["Azure", "Data Factory", "PySpark", "Synapse", "Spark"],
      github: "https://github.com/Adez017",
    },
    {
      title: "Jarvis – AI Voice Assistant",
      description: "Intelligent desktop assistant capable of executing system commands and providing GPT-powered responses through voice interaction.",
      technologies: ["Python", "OpenAI GPT API", "Speech Recognition", "Text-to-Speech"],
      github: "https://github.com/Adez017",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my data engineering and development work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 flex flex-col card-hover group">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-muted rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex-1 group/btn" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    View Code
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
