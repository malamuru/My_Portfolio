import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2f4253] text-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Left */}
          <div>
            <h3 className="text-xl font-semibold">
              Mounika Alamuru
            </h3>
            <p className="mt-4 max-w-sm text-neutral-300">
              Full Stack & Data Engineer creating scalable web applications
              and data-driven solutions using modern technologies.
            </p>
          </div>

          {/* Middle */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-700 hover:bg-neutral-600 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/malamuru"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-700 hover:bg-neutral-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="mailto:mnksalamuru95@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-700 hover:bg-neutral-600 transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-neutral-600 opacity-40"></div>

        {/* Bottom */}
        <div className="text-center text-sm text-neutral-300">
          © {new Date().getFullYear()} Mounika Alamuru. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
