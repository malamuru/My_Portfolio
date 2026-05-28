import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/pic-b.jpeg";
import { motion } from "framer-motion";

const container = (delay: number) => ({
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex items-center py-8">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-5xl font-extrabold tracking-tight text-black dark:text-white md:text-6xl lg:text-7xl"
          >
            Mounika Alamuru
          </motion.h1>

          <motion.h2
            variants={container(0.25)}
            initial="hidden"
            animate="visible"
            className="mt-4 text-2xl font-semibold bg-gradient-to-r from-pink-400 via-slate-400 to-purple-500 bg-clip-text text-transparent md:text-3xl"
          >
            Data Engineer • Full Stack Developer • AI Enthusiast
          </motion.h2>

          <motion.p
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl leading-relaxed text-neutral-700 dark:text-neutral-300"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>

        <div className="flex justify-center md:justify-end">
          <motion.img
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            src={profilepic}
            alt="profile"
            className="w-[280px] rounded-3xl border border-black/10 shadow-2xl dark:border-white/10 sm:w-[340px] lg:w-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;