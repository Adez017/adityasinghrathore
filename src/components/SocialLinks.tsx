import { Mail } from "lucide-react";
import GitHubIconAnimated from "@/components/icons/GitHubIconAnimated";
import LinkedInIconAnimated from "@/components/icons/LinkedInIconAnimated";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3">
      <a
        href="https://github.com/Adez017"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
        aria-label="GitHub"
      >
        <GitHubIconAnimated size={2.5} />
      </a>
      <a
        href="https://linkedin.com/in/aditya-singh-rathore0017"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
        aria-label="LinkedIn"
      >
        <LinkedInIconAnimated size={2.5} />
      </a>
      <a
        href="mailto:rathoreadityasingh40@gmail.com"
        className="transition-transform hover:scale-110"
        aria-label="Email"
      >
        <Mail className="h-8 w-8" />
      </a>
    </div>
  );
};

export default SocialLinks;
