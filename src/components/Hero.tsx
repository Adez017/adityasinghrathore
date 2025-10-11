import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code2, Database, Zap, Github } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const Hero = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const projects = [
    {
      icon: Database,
      title: "Carsales Data Pipeline",
      description: "Custom pipeline processing 3,000+ rows with medallion architecture and automated workflows for comprehensive data processing.",
      technologies: ["Azure", "Data Factory", "PySpark", "Synapse", "Spark"],
      gradient: "from-blue-500 to-cyan-500",
      github: "https://github.com/Adez017",
    },
    {
      icon: Code2,
      title: "Azure End-to-End Project",
      description: "Comprehensive data solution handling 60,000+ rows with OPENROWSET() and Watermark strategy for batch and streaming data.",
      technologies: ["Azure", "Data Factory", "PySpark", "Synapse", "Spark"],
      gradient: "from-purple-500 to-pink-500",
      github: "https://github.com/Adez017",
    },
    {
      icon: Zap,
      title: "Jarvis – AI Voice Assistant",
      description: "Intelligent desktop assistant capable of executing system commands and providing GPT-powered responses through voice interaction.",
      technologies: ["Python", "OpenAI GPT API", "Speech Recognition", "Text-to-Speech"],
      gradient: "from-orange-500 to-red-500",
      github: "https://github.com/Adez017",
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center section-padding bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container-custom relative z-10">
        <div className="space-y-12">
          <div className="space-y-8 animate-fade-in text-center max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="inline-block">
                <p className="text-lg text-muted-foreground font-medium bg-muted/50 px-4 py-2 rounded-full">
                  Hey, I'm Aditya 👋
                </p>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                <span className="gradient-text">Data</span>{" "}
                <span className="text-foreground">Engineer</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                I'm a passionate Data Engineer who loves building scalable data pipelines and exploring cloud technologies. Transforming raw data into actionable insights.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="group shadow-lg hover:shadow-xl transition-shadow" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          <div className="w-full animate-fade-in">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[plugin.current]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {projects.map((project, index) => {
                  const Icon = project.icon;
                  return (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <Card className="p-6 h-full backdrop-blur-sm bg-card/95 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl group cursor-pointer">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div className={`p-3 bg-gradient-to-br ${project.gradient} rounded-xl shadow-lg inline-block group-hover:scale-110 transition-transform`}>
                                <Icon className="h-8 w-8 text-white" />
                              </div>
                              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            
                            <div className="space-y-3">
                              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                {project.title}
                              </h3>
                              <p className="text-muted-foreground leading-relaxed text-sm">
                                {project.description}
                              </p>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-3 py-1 text-xs font-medium bg-muted/50 hover:bg-muted transition-colors rounded-lg border border-border"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </Card>
                      </a>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
