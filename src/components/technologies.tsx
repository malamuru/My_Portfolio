import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const levitateUp = (delay = 0) => ({
  y: [0, -10, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "loop" as const,
    delay,
  },
});

const levitateDown = (delay = 0) => ({
  y: [0, 10, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "loop" as const,
    delay,
  },
});

const Technologies = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  return (
    <section
      id="technologies"
      className="border-b border-black/10 dark:border-neutral-800 pb-24"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold
                   text-neutral-900 dark:text-white"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        <motion.div
          className="rounded-2xl p-4 bg-white dark:bg-white/10 border border-black/10 dark:border-white/20 shadow-lg backdrop-blur-lg"
          animate={!isMobile ? levitateUp(0) : undefined}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          className="rounded-2xl p-4 bg-white dark:bg-white/10 border border-black/10 dark:border-white/20 shadow-lg backdrop-blur-lg"
          animate={!isMobile ? levitateDown(0.5) : undefined}
        >
          <TbBrandNextjs className="text-7xl text-black dark:text-white" />
        </motion.div>

        <motion.div
          className="rounded-2xl p-4 bg-white dark:bg-white/10 border border-black/10 dark:border-white/20 shadow-lg backdrop-blur-lg"
          animate={!isMobile ? levitateUp(1) : undefined}
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
          className="rounded-2xl p-4 bg-white dark:bg-white/10 border border-black/10 dark:border-white/20 shadow-lg backdrop-blur-lg"
          animate={!isMobile ? levitateDown(1.5) : undefined}
        >
          <DiRedis className="text-7xl text-red-700" />
        </motion.div>

        <motion.div
          className="rounded-2xl p-4 bg-white dark:bg-white/10 border border-black/10 dark:border-white/20 shadow-lg backdrop-blur-lg"
          animate={!isMobile ? levitateUp(2) : undefined}
        >
          <FaNode className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
          className="rounded-2xl p-4 bg-white dark:bg-white/10 border border-black/10 dark:border-white/20 shadow-lg backdrop-blur-lg"
          animate={!isMobile ? levitateDown(2.5) : undefined}
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Technologies;
