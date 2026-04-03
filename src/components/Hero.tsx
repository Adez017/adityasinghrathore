import { MapPin } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";

const Hero = () => {
  return (
    <section id="home" className="sticky top-12 mx-auto h-full w-full sm:top-16">
      <div className="relative flex min-h-[calc(100dvh-5rem)] w-full flex-col sm:min-h-[calc(100dvh-8rem)] sm:justify-center sm:py-8">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="flex flex-wrap items-end gap-2 text-pretty break-words text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
              Hey, I'm Aditya! 👋
            </h1>
            <span className="mt-1 flex items-center gap-1 text-pretty text-sm font-normal">
              <MapPin size={12} />
              Ahmedabad, India
            </span>
          </div>

          <h2 className="text-pretty text-lg sm:text-xl">
            I build <strong>scalable data pipelines</strong> and{" "}
            <strong>cloud data solutions</strong>, specialising in{" "}
            <strong>Azure</strong> and <strong>Apache Spark</strong>.
          </h2>

          <p className="max-w-2xl leading-relaxed text-muted-foreground sm:text-lg">
            I'm a Data Engineer passionate about transforming raw data into
            actionable insights. From medallion architectures to end-to-end Azure
            pipelines, I build systems that scale. Currently finishing my
            B.Tech in Computer Science at Parul University.
          </p>

          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Hero;
