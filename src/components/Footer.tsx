import { Heart } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";

const Footer = () => {
  return (
    <footer className="py-12 border-t">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-6">
          <SocialLinks />
          <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Aditya Singh Rathore. All rights reserved.</p>
            <span className="hidden md:block">·</span>
            <p className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> using React &amp; TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
