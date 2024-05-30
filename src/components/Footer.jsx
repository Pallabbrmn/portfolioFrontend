import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { SiAseprite } from "react-icons/si";

const Footer = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="px-4 md:px-20 mx-auto border-t-2 py-4 bg-black  relative">
      <motion.div
        whileHover={{ x: 400 }}
        initial={{ x: 0 }}
        transition={{
          duration: 2,
          ease: "backInOut",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-[100px] h-[40px] md:w-[150px] md:h-[50px] absolute top-[-33px] md:top-[-50px]"
      >
        <img src="/images/car1.png" />
      </motion.div>
      <motion.div
        whileHover={{ x: -400 }}
        whileTap={handleMouseEnter}
        initial={{ x: 0 }}
        transition={{ duration: 2, ease: "backInOut" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-[100px] h-[40px] md:w-[150px] md:h-[50px] absolute top-[-33px] right-[30px] md:top-[-50px] md:right-[100px]"
      >
        <img src="/images/car2.png" />
      </motion.div>
      {hover && (
        <div className="absolute bottom-16 md:bottom-20 left-[29%] md:left-[45%]">
          <p className="flex items-center gap-2 text-lg">
            <SiAseprite />I pixel art as well!
          </p>
        </div>
      )}
      <div className="flex justify-between">
        <h1 className="md:text-4xl text-white">
          pallab_b <span className="md:text-2xl">@2024</span>
        </h1>
        <button onClick={scrollToTop} className="md:text-2xl text-white">
          BACK TO TOP ^
        </button>
      </div>
    </div>
  );
};

export default Footer;
