import { RiGithubLine, RiLinkedinFill, RiTwitterXLine, RiRssFill  } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="flex space-x-3 md:space-x-6 pb-4 pt-4 text-sm md:text-base text-gray-900">
    <a
      href="https://x.com/abneribeiroo"
      target="_blank"
      rel="noopener noreferrer"
      className="group hover:text-gray-700 flex items-center space-x-2 transition duration-300 ease-in-out"
    >
      <span className="inline">Twitter</span>
      <RiTwitterXLine className="text-lg md:text-xl" />
    </a>
  
    <a
      href="https://github.com/abneribeiroo"
      target="_blank"
      rel="noopener noreferrer"
      className="group hover:text-gray-700 flex items-center space-x-2 transition duration-300 ease-in-out"
    >
      <span className="inline">GitHub</span>
      <RiGithubLine className="text-lg md:text-xl" />
    </a>
  
    <a
      href="https://www.linkedin.com/in/abneribeiro/"
      target="_blank"
      rel="noopener noreferrer"
      className="group hover:text-gray-700 flex items-center space-x-2 transition duration-300 ease-in-out"
    >
      <span className="inline">LinkedIn</span>
      <RiLinkedinFill className="text-lg md:text-xl" />
    </a>

    <a
      href="/rss"
      target="_blank"
      rel="noopener noreferrer"
      className="group hover:text-gray-700 flex items-center space-x-2 transition duration-300 ease-in-out"
    >
      <span className="inline">RSS</span>
      <RiRssFill className="text-lg md:text-xl" />
    </a>
  </footer>
  );
}