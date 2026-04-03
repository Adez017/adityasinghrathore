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

const Index = () => {
  return (
    <div className="relative h-dvh w-full overflow-auto no-scrollbar" id="page-content">
      <BorderFrame />
      <BlobBackground />
      <CursorBlobTracker />
      <Navigation />

      {/* Hero lives outside the content card so the blob shines through */}
      <div className="mx-auto max-w-7xl px-10 sm:px-16">
        <Hero />
      </div>

      {/* Content sections — raised above the blob with relative z-[2] */}
      <div className="relative z-[2] w-full bg-background">
        <GradientBlurDots />
        <main className="mx-auto max-w-7xl px-10 sm:px-16">
          <AnimatedDivider delay={0} />
          <Technologies />
          <AnimatedDivider />
          <Projects />
          <AnimatedDivider />
          <About />
          <AnimatedDivider />
          <Skills />
          <AnimatedDivider />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
