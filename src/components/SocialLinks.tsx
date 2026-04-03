import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/Adez017",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/aditya-singh-rathore0017",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:rathoreadityasingh40@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto") ? undefined : "_blank"}
          rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
          className="p-2 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
          aria-label={label}
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
