import React from "react";

const About = () => {
  return (
    <div className="md:w-[90%] mx-auto md:h-[100vh] md:grid md:grid-cols-2 py-10 px-10 border-b-2">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-[8rem] leading-none">weaving</h1>
        <h1 className="text-5xl md:text-[8rem] leading-none">wonders</h1>
        <h1 className="text-5xl md:text-[8rem] leading-none">_in Pixels</h1>
      </div>
      <div className="flex justify-between items-center mt-4 md:mt-0">
        <p className="text-3xl">
          As a Frontend Developer, I specialize in crafting intuitive and
          engaging user experiences on the web. With a keen eye for design and a
          passion for coding, I transform ideas into visually stunning and
          functional websites.
          <span className="hidden md:block">
            With my technical knowledge, I thrive on creating responsive and
            dynamic interfaces that seamlessly merge aesthetics with
            functionality.
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
