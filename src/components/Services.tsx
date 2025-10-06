import { Card } from "@/components/ui/card";
import { Database, Cloud, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Data Engineering Solutions",
      description: "Building robust, scalable data pipelines for enterprise-level data processing and analytics",
      icon: Database,
    },
    {
      title: "Cloud Solutions",
      description: "Implementing Azure-based architectures and data workflows for optimal performance",
      icon: Cloud,
    },
    {
      title: "Data Cleaning & Transformation",
      description: "Preparing and transforming data for analytics, reporting, and machine learning",
      icon: Sparkles,
    },
  ];

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional data engineering services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-8 text-center card-hover group">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
