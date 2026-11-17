import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

import capitalLogo from "../assets/experience-1.jpg";
import cvsLogo from "../assets/experience.jpeg";

export const HERO_CONTENT = `I am a passionate and adaptable software professional with experience in building scalable applications, data-driven solutions, and modern web platforms. My background includes full-stack development, data engineering concepts, AI interests, cloud-based analytics, and big data technologies such as Apache Spark and Hadoop. I enjoy solving real-world problems, learning emerging technologies, and building efficient, user-focused solutions across software and data domains.`;

export const ABOUT_TEXT = `I am a versatile technology professional with experience in software development, data analytics, AI-focused learning, and modern web technologies. I have worked on projects involving full-stack applications, big data processing, cloud-based systems, and analytical solutions using technologies such as React, Next.js, Node.js, SQL, MongoDB, Apache Spark, and Hadoop.`;

export const EXPERIENCES = [
   {
    year: "Jan 2026 - Present",
    role: "Senior AI ML Engineer & Python Developer",
    company: "Capital Group",
    image: capitalLogo,
    description:
      "Developing Python APIs, data pipelines, and AI-powered research applications using RAG and LLMs, with responsibilities spanning integration, testing, deployment, and production support.",
    technologies: ["Python", "FastAPI", "LangChain", "RAG", "Pinecone", "AWS", "SQL", "Docker"],
  },
    {
    year: "May 2024 - Dec 2024",
    role: "AI ML Engineer Python Developer",
    company: "CVS Health",
    image: cvsLogo,
    description:
      "Developed Python data pipelines, machine-learning models, and REST APIs for healthcare claims analysis, including data validation, model evaluation, testing, and deployment support.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Flask", "Django REST Framework", "PostgreSQL", "PySpark", "AWS"],
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
  email: "amounikaoff@gmail.com",
};
