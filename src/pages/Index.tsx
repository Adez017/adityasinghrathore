import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BorderFrame from "@/components/BorderFrame";
import BlobBackground from "@/components/BlobBackground";
import CursorBlobTracker from "@/components/CursorBlobTracker";
import AnimatedDivider from "@/components/AnimatedDivider";
import GradientBlurDots from "@/components/GradientBlurDots";
import ScrollReveal from "@/components/ScrollReveal";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="relative h-dvh w-full overflow-auto no-scrollbar" id="page-content">
      <BorderFrame />
      <BlobBackground />
      <CursorBlobTracker />
      <Navigation />

      {/*
        Hero + content in the same flex column so the hero's sticky positioning
        has a containing block that spans the full page height (hero + content).
        The sticky hero wrapper sticks at top-12/top-16 while the content card
        (z-[2] bg-background) slides up over it — matching the reference layout.
        mt-12/mt-16 offsets the hero so it starts below the fixed nav bar.
      */}
      <main className="relative flex flex-col">
        {/* Hero wrapper: sticky within <main> which spans the entire page */}
        <div className="sticky top-12 z-[1] mt-12 sm:top-16 sm:mt-16">
          <div className="mx-auto max-w-7xl px-10 sm:px-16">
            <Hero />
          </div>
        </div>

        {/* Content card: z-[2] so it slides over the sticky hero as user scrolls */}
        <div className="relative z-[2] w-full bg-background">
          <GradientBlurDots />
          <div className="mx-auto max-w-7xl px-10 sm:px-16">
            <AnimatedDivider delay={0} />
            {/* Technologies has its own per-item stagger observer */}
            <Technologies />
            <AnimatedDivider />
            {/* Projects has its own per-item stagger observer */}
            <Projects />
            <AnimatedDivider />
            <ScrollReveal>
              <About />
            </ScrollReveal>
            <AnimatedDivider />
            <ScrollReveal>
              <Skills />
            </ScrollReveal>
            <AnimatedDivider />
            <ScrollReveal>
              <Contact />
            </ScrollReveal>
          </div>
          <Footer />
        </div>
      </main>

      <BackToTop />
    </div>
  );
};

export default Index;
