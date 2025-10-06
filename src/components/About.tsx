import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const certifications = [
    "Microsoft Fabric Data Engineer Associate",
    "Azure Fundamentals",
    "Azure Data Fundamentals",
    "Azure AI Fundamentals",
    "Azure Security Fundamentals",
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about data engineering and cloud computing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 card-hover">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">B.Tech in Computer Science</span>
                  <br />
                  Parul University
                  <br />
                  Expected 2026
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing my degree with a strong focus on data engineering, cloud computing, and building scalable systems.
            </p>
          </Card>

          <Card className="p-8 card-hover">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Award className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Certifications</h3>
              </div>
            </div>
            <ul className="space-y-2">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 card-hover md:col-span-2">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Open Source Contribution</h3>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Published blog in the <span className="font-medium text-foreground">Apache DataFusion community</span>, contributing to the open-source ecosystem and sharing knowledge with fellow developers.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
