import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code2, Database, Zap } from "lucide-react";
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
      description: "Medallion architecture with automated workflows",
      technologies: ["Azure", "PySpark", "Synapse"],
      metrics: "3,000+ rows processed"
    },
    {
      icon: Code2,
      title: "Azure End-to-End Project",
      description: "Comprehensive data solution with batch & streaming",
      technologies: ["Data Factory", "Spark", "OPENROWSET"],
      metrics: "60,000+ rows handled"
    },
    {
      icon: Zap,
      title: "Jarvis AI Assistant",
      description: "GPT-powered voice assistant with system commands",
      technologies: ["Python", "OpenAI", "Speech Recognition"],
      metrics: "Real-time responses"
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center section-padding bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
              <Button size="lg" className="group shadow-lg hover:shadow-xl transition-shadow" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View My Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="shadow-md hover:shadow-lg transition-shadow" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Get in Touch
              </Button>
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
                        <Card className="p-8 h-full backdrop-blur-sm bg-card/95 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl group">
                          <div className="space-y-6">
                            <div className="flex items-start justify-between">
                              <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                                <Icon className="h-8 w-8 text-primary-foreground" />
                              </div>
                              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                {project.metrics}
                              </span>
                            </div>
                            
                            <div className="space-y-3">
                              <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                {project.title}
                              </h3>
                              <p className="text-muted-foreground leading-relaxed">
                                {project.description}
                              </p>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-3 py-1.5 text-xs font-medium bg-muted/50 hover:bg-muted transition-colors rounded-lg border border-border"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
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
