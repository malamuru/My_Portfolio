import { motion } from "framer-motion";

const skills: Record<string, string[]> = {
  Languages: ["Python", "JavaScript", "TypeScript", "SQL"],
  Frameworks: [
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Apache Spark",
    "Hadoop",
  ],
  Databases: ["MongoDB", "MySQL", "PostgreSQL"],
  Tools: ["Git", "GitHub", "Postman", "VS Code", "Docker"],
};

const About = () => {
  return (
    <section
      id="about"
      className="relative border-b border-black/10 dark:border-neutral-800
                 text-neutral-900 dark:text-white px-6 pt-20 pb-20 overflow-hidden"
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-purple-600/20 blur-[140px] rounded-full" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-5xl font-bold mb-6 text-neutral-900 dark:text-white"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-lg text-neutral-700 dark:text-neutral-400 mb-14"
        >
          Get to know more about my background and skills
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-white/10 p-10 rounded-2xl
                       border border-black/10 dark:border-white/20
                       backdrop-blur-lg shadow-xl"
          >
            <h2 className="text-3xl font-semibold mb-6 text-neutral-900 dark:text-white">
              Who I Am
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              I'm{" "}
              <span className="font-semibold text-neutral-900 dark:text-white">
                Mounika Alamuru
              </span>
              , a Data-Driven Full Stack Developer with experience in building
              scalable, clean, and user-centric applications.
            </p>

            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              I enjoy working with React, Next.js, Node.js, databases, and
              data-focused technologies such as SQL, Apache Spark, and Hadoop.
            </p>

            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              This portfolio is a place to share my work, highlight my
              experience, and document the projects that keep me learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-white/10 p-10 rounded-2xl
                       border border-black/10 dark:border-white/20
                       backdrop-blur-lg shadow-xl"
          >
            <h2 className="text-3xl font-semibold mb-6 text-neutral-900 dark:text-white">
              Skills
            </h2>

            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="mb-7">
                <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-white">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1.5 text-sm rounded-full
                                 bg-neutral-200 text-neutral-800 border border-black/10
                                 dark:bg-white/20 dark:border-white/20 dark:text-neutral-100
                                 shadow-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;