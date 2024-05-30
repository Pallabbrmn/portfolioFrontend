import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Project = ({ link, thumbnail, stack, name, type }) => {
  return (
    <div className="mb-10 px-2">
      <Link
        to={link}
        target="blank"
        className="md:h-[90vh] flex justify-center items-center py-2 md:px-10 md:py-6 bg-gradient-to-r from-slate-300 to-slate-500 rounded-xl border-black border-2 overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="h-[90%] w-[90%] rounded-xl overflow-hidden"
        >
          <img className="h-full w-full object-cover" src={thumbnail} />
        </motion.div>
      </Link>
      <div className=" flex flex-col gap-2 md:gap-0">
        <h1 className=" mt-4 text-xl md:text-4xl border-black border-2 px-4 py-4 rounded-full inline-block min-w-[50%]">
          {stack}
        </h1>
        <h1 className="text-2xl md:text-[5rem] leading-none">{name}</h1>
        <h1 className="text-xl md:text-4xl">{type}</h1>
      </div>
    </div>
  );
};

export default Project;
