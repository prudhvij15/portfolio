import React from "react"; // Import React for JSX usage
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaNode,
  FaJava,
  FaNpm,
  FaDatabase,
} from "react-icons/fa";
import { SiAmazonaws, SiFirebase, SiPython, SiDocker } from "react-icons/si";

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
    "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks",
    "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean",
  ], // Add your skills here if needed

  softwareSkills: [
    {
      skillName: "html-5",
      icon: <FaHtml5 />,
    },
    {
      skillName: "css3",
      icon: <FaCss3Alt />,
    },
    {
      skillName: "sass",
      icon: <FaSass />,
    },
    {
      skillName: "JavaScript",
      icon: <FaJs />,
    },
    {
      skillName: "reactjs",
      icon: <FaReact />,
    },
    {
      skillName: "nodejs",
      icon: <FaNode />,
    },
    {
      skillName: "Java",
      icon: <FaJava />,
    },
    {
      skillName: "npm",
      icon: <FaNpm />,
    },
    {
      skillName: "sql-database",
      icon: <FaDatabase />,
    },
    {
      skillName: "aws",
      icon: <SiAmazonaws />,
    },
    {
      skillName: "firebase",
      icon: <SiFirebase />,
    },
    {
      skillName: "python",
      icon: <SiPython />,
    },
    {
      skillName: "docker",
      icon: <SiDocker />,
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

export default skillsSection;
