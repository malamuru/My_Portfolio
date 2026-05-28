import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="border-b border-black/10 dark:border-neutral-800 p-4"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold
                   text-neutral-900 dark:text-white"
      >
        Projects
      </motion.h1>

      {/* Scrollable Projects Container */}
        <div className="max-h-[650px] md:max-h-[700px]
                        overflow-y-auto
                        pr-2 md:pr-4
                        space-y-6 md:space-y-10
                        pb-10">{PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center
                       rounded-2xl p-6
                       bg-white dark:bg-white/10
                       border border-black/10 dark:border-white/20
                       shadow-xl backdrop-blur-lg"
          >
            {/* Project Image */}
            <div className="lg:col-span-1 flex justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl
                            w-full
                            max-w-[320px]
                            h-[200px] md:h-[220px]
                            object-cover"
              />
            </div>

            {/* Project Content */}
            <div className="lg:col-span-2 space-y-4">
              <h6 className="text-xl font-semibold text-neutral-900 dark:text-white">
                {project.title}
              </h6>

              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded px-3 py-1 text-sm font-medium
                               bg-neutral-200 text-neutral-800
                               dark:bg-black/40 dark:text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Button */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded border border-purple-500
                             px-4 py-2 text-sm
                             text-purple-600 dark:text-purple-400
                             hover:bg-purple-500 hover:text-black
                             transition"
                >
                  GitHub Code
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom GitHub Note */}
      <div className="mt-20 pb-16 text-center">
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
          Interested in exploring more projects and repositories?
        </p>

        <a
          href="https://github.com/malamuru"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-3 rounded-full
                     border border-purple-500
                     px-6 py-2
                     text-purple-600 dark:text-purple-400
                     hover:bg-purple-500 hover:text-black
                     transition duration-300"
        >
          Visit My GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;