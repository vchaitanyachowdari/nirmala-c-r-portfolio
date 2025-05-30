import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiNextdotjs } from "react-icons/si";

import carhubImg from "@/public/carhub.png";
import realtorImg from "@/public/realtor.png";
import ecommerceImg from "@/public/ecommerce.png";

// Navigation links
export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
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

// External links
export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/dr-nirmala-c-r-71b38824/",
  github: "https://github.com/sanidhyy",
  resume: "/resume.pdf",
  source_code: "https://github.com/vchaitanyachowdari/portfolio-new",
  email: "sanidhya.verma12345@gmail.com",
} as const;

// Data for work experience
export const EXPERIENCES_DATA = [
  {
    title: "Bapuji Institute of Engineering & Technology",
    description: "Dean of Placement",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - Present",
  },
  {
    title: "Bapuji Institute of Engineering & Technology",
    description: "Professor and Head of Department Computer Science and Engineering",
    icon: React.createElement(LuGraduationCap),
    date: "2013 - Present",
  },
  {
    title: "Bapuji Institute of Engineering & Technology",
    description: "Associate Professor",
    icon: React.createElement(LuGraduationCap),
    date: "2012 - 2013",
  },
  {
    title: "Bapuji Institute of Engineering & Technology",
    description: "Assistant Professor",
    icon: React.createElement(LuGraduationCap),
    date: "2007 - 2012",
  },
  {
    title: "Bapuji Institute of Engineering & Technology",
    description: "Lecture",
    icon: React.createElement(LuGraduationCap),
    date: "1995 - 2007",
  },
  {
    title: "Trainee Engineer",
    description: "Bharat Electronics Limited",
    icon: React.createElement(LuGraduationCap),
    date: "1993 - 1994",
  },
] as const;


// Data for skills
export const SKILLS_DATA = [
  "C",
  "Teaching",
  "C++",
  "Java",
  "Research",
  "Algorithms",
  "Artificial Intelligence",
  "Python",
  "Presentation",
] as const;

// Owner name
export const OWNER_NAME = "Dr. Nirmala C R";
// Add this at the top or where appropriate
