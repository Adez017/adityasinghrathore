import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const Navigation = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between px-10 py-3 sm:px-16">
      <a
        href="#home"
        className="text-sm font-semibold tracking-tight hover:opacity-70 transition-opacity"
      >
        aditya.dev
      </a>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
        className="h-8 w-8"
      >
        {theme === "dark" ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </Button>
    </nav>
  );
};

export default Navigation;