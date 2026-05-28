import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative border-b border-black/10 dark:border-neutral-800
                 text-neutral-900 dark:text-white
                 px-6 pt-20 pb-20 overflow-hidden"
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-purple-600/20 blur-[140px] rounded-full" />

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-5xl font-bold mb-14
                     text-neutral-900 dark:text-white"
        >
          Experience
        </motion.h1>

        <div className="space-y-10">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative
                         bg-white dark:bg-white/10
                         p-8 rounded-2xl
                         border border-black/10 dark:border-white/20
                         backdrop-blur-lg shadow-xl"
            >
              <p
                className="absolute top-6 right-6 px-4 py-1 text-sm rounded-full
                           bg-neutral-200 text-neutral-700 border border-black/10
                           dark:bg-white/10 dark:border-white/20 dark:text-purple-200"
              >
                {experience.year}
              </p>

              <img
                src={experience.image}
                alt={experience.company}
                className="w-20 h-20 object-contain mb-6 rounded-lg
                           bg-white p-2 border border-black/10 dark:border-white/20"
              />

              <h2
                className="mb-3 text-xl font-semibold pr-32
                           text-neutral-900 dark:text-white"
              >
                {experience.role}

                <span className="text-sm text-purple-600 dark:text-purple-200">
                  {" "}
                  @ {experience.company}
                </span>
              </h2>

              <p
                className="mb-5 leading-relaxed
                           text-neutral-700 dark:text-neutral-300"
              >
                {experience.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded px-3 py-1 text-sm font-medium
                               bg-neutral-200 text-neutral-800
                               border border-black/10
                               dark:bg-black/40 dark:text-purple-300 dark:border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;