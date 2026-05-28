import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

import thinkroundLogo from "../assets/experience-1.jpg";
import eesavyasaLogo from "../assets/experience.jpeg";

export const HERO_CONTENT = `I am a passionate and adaptable software professional with experience in building scalable applications, data-driven solutions, and modern web platforms. My background includes full-stack development, data engineering concepts, AI interests, cloud-based analytics, and big data technologies such as Apache Spark and Hadoop. I enjoy solving real-world problems, learning emerging technologies, and building efficient, user-focused solutions across software and data domains.`;

export const ABOUT_TEXT = `I am a versatile technology professional with experience in software development, data analytics, AI-focused learning, and modern web technologies. I have worked on projects involving full-stack applications, big data processing, cloud-based systems, and analytical solutions using technologies such as React, Next.js, Node.js, SQL, MongoDB, Apache Spark, and Hadoop.`;

export const EXPERIENCES = [
   {
    year: "Feb 2026 - Present",
    role: "Technology Intern",
    company: "ThinkRound Inc.",
    image: thinkroundLogo,
    description:
      "Contributing to website migration, UI enhancement, reusable component development, and CMS integration while collaborating with cross-functional teams in an Agile environment.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Sanity CMS", "GitHub"],
  },
    {
    year: "Jan 2020 - Dec2023",
    role: "Software Associate",
    company: "Eesavyasa Technologies Pvt Limited, India",
    image: eesavyasaLogo,
    description:
      "Worked on application development, user interface improvements, data handling, and feature implementation for organizational and project management systems.",
    technologies: ["JavaScript", "React.js", "Next.js", "MongoDB", "Firebase", "CSS"],
  },
];

export const PROJECTS = [
  {
    title: "HealHub | University Event Website",
    image: project1,
    description:
      "A campus wellness hub where students can browse and enroll in events across physical health, mental wellness, nutrition, fitness, and disease-prevention.",
    technologies: ["JavaScript", "MongoDB", "CSS", "Express.js", "Node.js", "EJS", "HTML"],
    github: "https://github.com/malamuru/HealHub",
  },
  {
    title: "MoneyMentor | Finance Tracking App",
    image: project2,
    description:
      "Developed a responsive finance management app using React and Firebase, enabling users to track income and expenses, securely store data with Firebase Auth, and import/export records through CSV.",
    technologies: ["React", "Firebase", "JavaScript", "CSS", "CSV"],
    github: "https://github.com/malamuru/MoneyMentor",
  },
  {
    title: "Sentiment & Trend Analysis on Historical Texts",
    image: project3,
    description:
      "Analyzed sentiment trends in 18th and 19th century digitized texts using Hadoop MapReduce and Hive.",
    technologies: ["Hadoop", "MapReduce", "Hive", "Java", "Text Processing"],
    github: "https://github.com/malamuru/Sentiment-Trend-Analysis-on-Historical-Texts",
  },
  {
    title: "IoT Sensor Data Analysis Using Apache Spark SQL",
    image: project4,
    description:
      "Analyzed IoT environmental sensor data using Apache Spark SQL for filtering, aggregations, time-based analysis, ranking, and pivot operations.",
    technologies: ["Apache Spark", "Spark SQL", "PySpark", "IoT Analytics"],
    github: "https://github.com/malamuru/iot-sensor-data-spark-sql-malamuru",
  },
];

export const CONTACT = {
  address: "Charlotte, North Carolina, USA",
  phoneNo: "+1 4848369762",
  email: "mnksalamuru95@gmail.com",
};