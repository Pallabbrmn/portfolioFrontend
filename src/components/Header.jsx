import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[80px] w-full flex items-center justify-between py-4 px-6 fixed top-0 z-50 bg-white">
      <div>
        <Link to="/" className="title text-2xl md:text-5xl">
          pallab_b
        </Link>
      </div>
      <div className="flex items-center gap-10">
        <a href="#about" className="text-2xl hidden md:block">
          About
        </a>
        <a href="#services" className="text-2xl hidden md:block">
          Services
        </a>
        <a href="#projects" className="text-2xl hidden md:block">
          Projects
        </a>
        <a
          href="#contact"
          className="px-4 py-2  text-xl md:text-2xl rounded-full text-white bg-black"
        >
          Let's Talk
        </a>
      </div>
    </div>
  );
};

export default Header;
