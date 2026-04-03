const About = () => {
  const certifications = [
    {
      name: "Microsoft Fabric Data Engineer Associate",
      url: "https://learn.microsoft.com/api/credentials/share/en-us/AdityaSinghRathore-4933/CC5033FB8374100D?sharingId=6DD7FA8FF2B035C7",
    },
    {
      name: "Azure Fundamentals",
      url: "https://www.credly.com/badges/075d2441-4c4a-4309-9200-d35cccbcb6cc/public_url",
    },
    {
      name: "Azure Data Fundamentals",
      url: "https://www.credly.com/badges/6e6ad01d-1a72-4b9f-86c8-91244d246c8c/public_url",
    },
    {
      name: "Azure AI Fundamentals",
      url: "https://learn.microsoft.com/api/credentials/share/en-us/AdityaSinghRathore-4933/2DA8C85FD627834B?sharingId=6DD7FA8FF2B035C7",
    },
    { name: "Azure Security Fundamentals", url: null },
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
              <li key={cert.name} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground underline underline-offset-2 transition-colors"
                  >
                    {cert.name}
                  </a>
                ) : (
                  <span>{cert.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
