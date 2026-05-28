import logo from "../assets/MA-bl.png";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ toggleTheme, isDark }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 pt-4">
      {/* glass bar */}
      <div className="flex items-center justify-between rounded-2xl px-4 py-3
                      bg-white/70 dark:bg-white/5
                      border border-black/10 dark:border-white/10
                      backdrop-blur-md shadow-lg">

        {/* left */}
        <a
          href="#home"
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src={logo}
            alt="MyLogo"
            className="w-10 h-10 hover:scale-110 transition duration-300"
          />

          <span className="font-bold text-lg md:text-xl text-black dark:text-white">
            Mounika Alamuru
          </span>
        </a>

        {/* center links */}
        <div className="hidden md:flex items-center gap-8 text-sm md:text-base">
          <a href="#home" className="hover:text-cyan-600 dark:hover:text-cyan-300">Home</a>
          <a href="#about" className="hover:text-cyan-600 dark:hover:text-cyan-300">About</a>
          <a href="#experience" className="hover:text-cyan-600 dark:hover:text-cyan-300">Experience</a>
          <a href="#projects" className="hover:text-cyan-600 dark:hover:text-cyan-300">Projects</a>
          <a href="#contact" className="hover:text-cyan-600 dark:hover:text-cyan-300">Contact</a>
        </div>

        {/* right icons */}
        <div className="flex items-center gap-4 text-xl text-black dark:text-white">
          <a href="https://www.linkedin.com/in/mounika-alamuru/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/malamuru" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:mnksalamuru95@gmail.com">
            <FaEnvelope />
          </a>
          <a href="tel:+14848369762">
            <FaPhone />
          </a>

          <button
              onClick={toggleTheme}
              className="ml-2 rounded-lg p-2
                        bg-black/5 dark:bg-white/10
                        hover:bg-black/10 dark:hover:bg-white/20
                        transition duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <FaSun className="text-yellow-300 text-lg" />
              ) : (
                <FaMoon className="text-black text-lg" />
              )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
