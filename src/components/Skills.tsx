const Skills = () => {
  const skillCategories = [
    {
      title: "Big Data",
      skills: ["Apache Spark", "Databricks", "Hive", "Hadoop", "Kafka"],
    },
    {
      title: "Languages",
      skills: ["Python", "SQL", "Java", "C", "C++"],
    },
    {
      title: "Data Engineering",
      skills: ["ETL Pipelines", "Data Modeling", "Data Warehousing", "Medallion Architecture"],
    },
    {
      title: "Databases & Tools",
      skills: ["PostgreSQL", "MySQL", "MSSQL", "Git", "Microsoft Fabric", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <h2 className="pb-4 text-3xl font-bold">Skills</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="mb-3 text-base font-semibold text-muted-foreground">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-sm border border-border px-2.5 py-1 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
