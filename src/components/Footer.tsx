import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Adez017"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/aditya-singh-rathore0017"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:rathoreadityasingh40@gmail.com"
              className="p-2 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
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
