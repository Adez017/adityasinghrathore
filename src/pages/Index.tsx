import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BorderFrame from "@/components/BorderFrame";

const Divider = () => (
  <hr className="border-t border-border" />
);

const Index = () => {
  return (
    <div className="relative h-dvh w-full overflow-auto no-scrollbar">
      <BorderFrame />
      <Navigation />

      <main className="relative mx-auto max-w-7xl px-10 pt-12 sm:px-16 sm:pt-16">
        <Hero />
        <Divider />
        <Technologies />
        <Divider />
        <Projects />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
