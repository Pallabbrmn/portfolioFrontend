import React from "react";
import TechCard from "./TechCard";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const tech = [
  {
    icon: <FaHtml5 size={50} />,
    name: "HTML",
  },
  {
    icon: <FaCss3Alt size={50} />,
    name: "CSS",
  },
  {
    icon: <IoLogoJavascript size={50} />,
    name: "JAVASCRIPT",
  },
  {
    icon: <GrReactjs size={50} />,
    name: "REACTJS",
  },
  {
    icon: <RiTailwindCssFill size={50} />,
    name: "TAILWINDCSS",
  },
  {
    icon: <FaGitAlt size={50} />,
    name: "GIT",
  },
  {
    icon: <FaGithub size={50} />,
    name: "GITHUB",
  },
  {
    icon: <FaFigma size={50} />,
    name: "FIGMA",
  },
  {
    icon: <FaNodeJs size={50} />,
    name: "NODEJS",
  },
  {
    icon: <SiMongodb size={50} />,
    name: "MONGODB",
  },
];

const Services = () => {
  return (
    <div className="w-[90%] mx-auto md:h-[100vh] p-4 border-b-2">
      <h1 className="text-center text-5xl font-extrabold py-4 ">
        Technologies
      </h1>
      <div className=" grid place-items-center grid-cols-3 gap-2 md:gap-10">
        {tech.map((item) => {
          return <TechCard key={item.name} icon={item.icon} name={item.name} />;
        })}
      </div>
    </div>
  );
};

export default Services;
