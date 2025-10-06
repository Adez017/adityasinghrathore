import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aditya Singh Rathore. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Built with <Heart className="h-4 w-4 text-red-500 fill-current" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
