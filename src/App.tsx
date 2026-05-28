import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Technologies from "./components/technologies";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import StarsCanvas from "./components/starBackground";
import Footer from "./components/Footer"; // ✅ ADD THIS
import { Analytics } from "@vercel/analytics/react";
import bhole from "./assets/blackhole.mp4";

function App() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") !== "light" // default dark
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((v) => !v);

  return (
    <div
      className="relative min-h-screen overflow-x-hidden antialiased transition-colors duration-500
                 bg-white text-neutral-900
                 dark:bg-[#030014] dark:text-neutral-200"
    >
      {/* ✅ Background (video + stars) */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* base layer */}
        <div className="absolute inset-0 bg-white dark:bg-[#030014] transition-colors duration-500" />

        {/* ✅ video layer */}
        <video
          src={bhole}
          className="absolute inset-0 h-full w-full object-cover
                     opacity-25 dark:opacity-60"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* stars layer */}
        <div className="absolute inset-0 pointer-events-none">
          <StarsCanvas />
        </div>
      </div>

      <Analytics />

      {/* ✅ main content container */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-28">        <NavBar toggleTheme={toggleTheme} isDark={isDark} />

        <section id="home" className="pt-10">
          <Hero />
        </section>

        <section id="about" className="pt-28">
          <About />
        </section>

        <section id="technologies" className="pt-28">
          <Technologies />
        </section>

        <section id="experience" className="pt-28">
          <Experience />
        </section>

        <section id="projects" className="pt-28">
          <Projects />
        </section>

        <section id="contact" className="pt-28 pb-24">
          <Contact />
        </section>
      </div>

      {/* ✅ Footer full-width like your reference image */}
      <Footer />
    </div>
  );
}

export default App;
