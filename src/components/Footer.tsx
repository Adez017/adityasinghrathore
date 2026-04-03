import { Heart } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-6 border-t border-border py-12 text-sm">
      <SocialLinks />
      <p className="flex items-center gap-1 text-muted-foreground">
        Made with{" "}
        <Heart className="inline h-4 w-4 -translate-y-px fill-foreground text-foreground" />{" "}
        by Aditya Singh Rathore
      </p>
    </footer>
  );
};

export default Footer;
