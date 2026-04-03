const About = () => {
  const certifications = [
    "Microsoft Fabric Data Engineer Associate",
    "Azure Fundamentals",
    "Azure Data Fundamentals",
    "Azure AI Fundamentals",
    "Azure Security Fundamentals",
  ];

  return (
    <section id="about" className="section-padding">
      <h2 className="gradient-heading pb-4 text-3xl font-bold">About</h2>

      <div className="space-y-6 text-muted-foreground sm:text-lg">
        <p className="leading-relaxed">
          I'm a Data Engineer pursuing my{" "}
          <strong className="text-foreground">B.Tech in Computer Science</strong> at{" "}
          <strong className="text-foreground">Parul University</strong> (expected 2026),
          with a strong focus on cloud data platforms and scalable pipeline design.
        </p>

        <p className="leading-relaxed">
          I've contributed to the open-source community by publishing a blog in the{" "}
          <strong className="text-foreground">Apache DataFusion</strong> community,
          sharing knowledge with fellow developers.
        </p>

        <div className="glass-card rounded-xl p-5">
          <h3 className="pb-3 text-xl font-semibold text-foreground">Certifications</h3>
          <ul className="space-y-1">
            {certifications.map((cert) => (
              <li key={cert} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
