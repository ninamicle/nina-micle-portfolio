import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import p_1 from "@/public/projects_images/p_1.jpg";
import p_2 from "@/public/projects_images/p_2.jpg";
import p_3 from "@/public/projects_images/p_3.jpg";
import p_4 from "@/public/projects_images/p_4.jpg";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Portfolio",
    hash: "#prtfolio",
  },
  {
    name: "Timeline",
    hash: "#timeline",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Università degli Studi di Bergamo",
    location: "Bergamo, BG",
    description:
      "Laurea triennale in Scienze della comunicazione (percorso comunicazione aziendale)",
    icon: React.createElement(LuGraduationCap),
    date: "2014 - 2018",
  },
  {
    title: "Code Master",
    location: "Milano, MI",
    description: "Bootcamp",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "SAEP - ICT",
    location: "Milano, MI",
    description: "Junior Front End Developer",
    icon: React.createElement(FaReact),
    date: "2020 - 2022",
  },
] as const;

export const projects = [
  {
    title: "ToDo App",
    tags: ["HTML", "React", "Tailwind"],
    description:
      "Laurea triennale in Scienze della comunicazione (percorso comunicazione aziendale)",
    image: p_1,
    link: "https//project_url.com",
  },
  {
    title: "Code Master",
    tags: ["HTML", "React", "Tailwind"],
    description: "Bootcamp",
    image: p_2,
    link: "https//project_url.com",
  },
  {
    title: "SAEP - ICT",
    tags: ["HTML", "React", "Tailwind"],
    description: "Junior Front End Developer",
    image: p_3,
    link: "https//project_url.com",
  },
  {
    title: "SAEP - ICT",
    tags: ["HTML", "React", "Tailwind"],
    description: "Junior Front End Developer",
    image: p_4,
    link: "https//project_url.com",
  },
] as const;
