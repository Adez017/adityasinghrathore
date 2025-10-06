import { Card } from "@/components/ui/card";
import { Database, Cloud, Code, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Big Data Tools",
      icon: Database,
      skills: ["Apache Spark", "Databricks", "Hive", "Hadoop", "Kafka"],
      color: "primary",
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "SQL", "Java", "C", "C++"],
      color: "secondary",
    },
    {
      title: "Data Engineering",
      icon: Wrench,
      skills: ["ETL Pipelines", "Data Cleaning", "Data Modeling", "Data Warehousing"],
      color: "accent",
    },
    {
      title: "Databases & Tools",
      icon: Cloud,
      skills: ["SQL", "MSSQL", "PostgreSQL", "MySQL", "Git", "Microsoft Fabric", "VS Code", "Jupyter Notebook"],
      color: "primary",
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Expertise in modern data engineering technologies and cloud platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="p-6 card-hover group">
                <div className={`inline-flex p-3 rounded-lg bg-${category.color}/10 mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-6 w-6 text-${category.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs font-medium bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
