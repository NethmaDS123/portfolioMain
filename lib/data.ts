import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wlcImg from "@/public/wildlifecropped.png";
import pingImg from "@/public/pingpals.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated High School",
    location: "Colombo, Sri Lanka",
    description:
      "I graduated in 2021 from Lyceum International School, Nugegoda, Sri Lanka after doing my Cambridge A Levels",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Enrolled in the Informatics Insitiute of Technology Sri Lanka",
    location: "Colombo, Sri Lanka",
    description:
      "Started by Bacelors of Science(Hons) in Computer Science in 2022 and completed 2 years of the degree before transferring to UoW.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Bynery (Start up) - Software Engineer",
    location: "Remote",
    description:
      "Worked as a Software Engineer at a Start up based in Amsterdam for 6 months after my 2nd year of university.",
    icon: React.createElement(FaReact),
    date: "2024 March - 2024 September",
  },
  {
    title: "University of Westminster",
    location: "London, UK",
    description:
      "Transferred to the University of Westminster in 2024 to complete my degree in Computer Science.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Wildlife Connect",
    description:
      "A social media mobile application aimed at wildlife conservation in Sri Lanka. ",
    tags: [
      "Flutter",
      "Machine learning",
      "MongoDB",
      "NodeJS",
      "Express",
      "AWS s3",
      "Render",
      "Google cloud run",
    ],
    imageUrl: wlcImg,
    githubLink: "https://github.com/NethmaDS123/WildLifeConnect.git",
    videoLink: "https://www.youtube.com/watch?v=6gYeV1SxqvA",
    images: ["/home.png", "/library.png"],
  },
  {
    title: "Ping Pals",
    description:
      "A mobile application aimed at simplifying event creation and management by allowing users to notify selected friends of events with a single action.",
    tags: ["Flutter", "Dart", "SpringBoot", "MongoDB", "Firebase"],
    imageUrl: pingImg,
    githubLink: "https://github.com/user/project1",
    videoLink: "https://youtu.be/demo1",
    images: ["/images/project1-1.png", "/images/project1-2.png"],
  },
  {
    title: "Bynery Website",
    description:
      "Spearheaded the development of Bynery's official website, with a focus on delivering a modern and visually engaging user experience.",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "FramerMotion",
      "Spline",
    ],
    imageUrl: wordanalyticsImg,
    githubLink: "https://github.com/user/project1",
    videoLink: "https://youtu.be/demo1",
    images: ["/images/project1-1.png", "/images/project1-2.png"],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Flask",
  "Framer Motion",
  "Flutter",
  "Dart",
  "SpringBoot",
  "AWS",
  "Google Cloud",
  "Firebase",
  "Spline",
  "Render",
  "Java Swing",
  "PHP",
  "MySQL",
  "Postman",
] as const;
