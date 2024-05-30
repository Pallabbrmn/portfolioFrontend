import React from "react";
import Project from "./Project";
import thumbnail1 from "/images/footballApp.png";
import thumbnail2 from "/images/GifeeApp.png";
import thumbnail3 from "/images/youclone.png";
import thumbnail4 from "/images/personal.png";

const Projects = () => {
  return (
    <div className="sm:w-[90%] mx-auto border-b-2">
      <h1 className="text-5xl font-extrabold text-center py-10">PROJECTS</h1>
      <div className="flex flex-col gap-4">
        <Project
          link={"https://football-it.netlify.app"}
          thumbnail={thumbnail1}
          stack={"REACTJS | TAILWINDCSS | REDUX "}
          name={"FOOTBALL-IT APP"}
          type={"FRONTEND DEVELOPMENT"}
        />
        <Project
          link={"https://gifee.netlify.app"}
          thumbnail={thumbnail2}
          stack={"REACTJS | TAILWINDCSS | GIPHY-API "}
          name={"GIFEE APP"}
          type={"FRONTEND DEVELOPMENT"}
        />
        <Project
          link={"https://youcloneapp.netlify.app"}
          thumbnail={thumbnail3}
          stack={"REACTJS | MATERIAL-UI | RAPID-API "}
          name={"YOUCLONE APP"}
          type={"FRONTEND DEVELOPMENT"}
        />
        <Project
          link={"https://youcloneapp.netlify.app"}
          thumbnail={thumbnail4}
          stack={"HTML | CSS | JAVASCRIPT | GSAP "}
          name={"PERSONAL WEBSITE"}
          type={"WEB DESIGN | Frontend Development | Animation"}
        />
      </div>
    </div>
  );
};

export default Projects;
