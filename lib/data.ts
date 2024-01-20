import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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
