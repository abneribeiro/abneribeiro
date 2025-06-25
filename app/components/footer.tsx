import { RiGithubLine, RiLinkedinFill, RiTwitterXLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="w-full bg-background py-6 sm:py-8 border-t border-border">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-4xl">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base text-foreground">
          <a
            href="https://x.com/abneribeiroo"
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:text-muted-foreground flex items-center space-x-1 sm:space-x-2 transition-colors duration-300 ease-in-out"
          >
            <span className="inline">Twitter</span>
            <RiTwitterXLine className="text-lg sm:text-xl" />
          </a>

          <a
            href="https://github.com/abneribeiroo"
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:text-muted-foreground flex items-center space-x-1 sm:space-x-2 transition-colors duration-300 ease-in-out"
          >
            <span className="inline">GitHub</span>
            <RiGithubLine className="text-lg sm:text-xl" />
          </a>

          <a
            href="https://www.linkedin.com/in/abneribeiro/"
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:text-muted-foreground flex items-center space-x-1 sm:space-x-2 transition-colors duration-300 ease-in-out"
          >
            <span className="inline">LinkedIn</span>
            <RiLinkedinFill className="text-lg sm:text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}
