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
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
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
    title: "Visvesvaraya Technological University",
    description: "Completed Ph.D in Artificial Intelligence",
    icon: React.createElement(LuGraduationCap),
    date: "2003 - 2013",
  },
  {
    title: "National Institute of Technology Karnataka",
    description: "Completed M.Tech in Computer Engineering",
    icon: React.createElement(LuGraduationCap),
    date: "1999 - 2001",
  },
  {
    title: "Bapuji Institute of Engineering & technology",
    description: "Completed B.E in Electronics & Communication",
    icon: React.createElement(LuGraduationCap),
    date: "1988 - 1992",
  },
] as const;

// Data for projects
export const PROJECTS_DATA = [
  // {
  //   title: "CarHub",
  //   description:
  //     "A web app that is built using NextJS and enables users to quickly search and obtain information about cars.",
  //   tags: ["React", "Next.js", "TypeScript", "Tailwind", "Headless UI"],
  //   imageUrl: carhubImg,
  //   projectUrl: "https://carhb.vercel.app/",
  // },
  // {
  //   title: "Realtor",
  //   description:
  //     "Buy and rent homes for everyone. I was the front-end developer. It has features like filtering, sorting, and pagination.",
  //   tags: ["React", "Chakra UI", "Next.js", "Framer Motion", "React Icons"],
  //   imageUrl: realtorImg,
  //   projectUrl: "https://real-estate-app-react.vercel.app/",
  // },
  // {
  //   title: "ECommerce Store",
  //   description:
  //     "A NextJS-based eCommerce store that allows users to order different products. It supports real-time payments using Stripe.",
  //   tags: ["React", "Next.js", "Sanity", "React Router", "Stripe"],
  //   imageUrl: ecommerceImg,
  //   projectUrl: "https://ecommerce-app-next.vercel.app/",
  // },
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
