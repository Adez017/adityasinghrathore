import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SHOW_THRESHOLD = 300;

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = document.getElementById("page-content");
    if (!container) return;

    const handleScroll = () => {
      setVisible(container.scrollTop > SHOW_THRESHOLD);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    document.getElementById("page-content")?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleClick}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-10 right-10 z-[60] h-9 w-9 rounded-full shadow-md transition-all duration-300 sm:bottom-14 sm:right-14",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  );
};

export default BackToTop;
