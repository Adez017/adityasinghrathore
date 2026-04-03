import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#technologies", label: "Tech" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const root = document.getElementById("page-content");
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root, threshold: 0.25, rootMargin: "-10% 0px -65% 0px" }
    );

    navLinks.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const target = document.getElementById(href.slice(1));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Main nav bar */}
      <div className="fixed left-0 right-0 top-0 z-[60] flex h-12 items-center justify-between bg-background/80 px-10 backdrop-blur-sm sm:h-16 sm:px-16">
        {/* Desktop section links */}
        <nav className="hidden items-center gap-0.5 sm:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                activeSection === link.href.slice(1)
                  ? "text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile: hamburger button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          className="h-8 w-8 sm:hidden"
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>

        {/* Theme toggle (always visible) */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
          className="h-8 w-8"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="fixed left-0 right-0 top-12 z-[60] border-b border-border bg-background/95 backdrop-blur-sm sm:hidden">
          <nav className="flex flex-col gap-1 px-10 py-3" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;