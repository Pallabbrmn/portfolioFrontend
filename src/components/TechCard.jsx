import React from "react";
import { motion } from "framer-motion";

const TechCard = ({ icon, name }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: "5deg" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="border p-2 bg-black w-[150px] rounded-lg cursor-pointer"
    >
      <div className="flex justify-center bg-white py-2 rounded-t-lg">
        {icon}
      </div>
      <p className="text-2xl text-center text-white">{name}</p>
    </motion.div>
  );
};

export default TechCard;
