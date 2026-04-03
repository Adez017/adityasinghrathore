import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code2, Database, Zap, Github } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import SocialLinks from "@/components/SocialLinks";

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
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
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                I'm a passionate Data Engineer who loves building scalable data pipelines and exploring cloud technologies. Transforming raw data into actionable insights.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group shadow-lg hover:shadow-xl transition-shadow" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="pt-2">
              <SocialLinks />
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                orientation="vertical"
                plugins={[plugin.current]}
                className="w-full relative"
              >
                <CarouselContent className="h-[500px]">
                  {projects.map((project, index) => {
                    const Icon = project.icon;
                    return (
                      <CarouselItem key={index} className="pt-4">
                        <Card className="p-6 h-full backdrop-blur-sm bg-card/95 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl group">
                          <div className="flex flex-col h-full space-y-4">
                            <div className={`p-3 bg-gradient-to-br ${project.gradient} rounded-xl shadow-lg inline-block group-hover:scale-110 transition-transform self-start`}>
                              <Icon className="h-8 w-8 text-white" />
                            </div>
                            
                            <div className="space-y-3 flex-1">
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
                            
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full group/btn shadow-md hover:shadow-lg transition-shadow mt-auto"
                              asChild
                            >
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                                View Code
                              </a>
                            </Button>
                          </div>
                        </Card>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
