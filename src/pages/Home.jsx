import React from "react";
import { motion } from "framer-motion";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <div className="relative h-[60vh] md:h-[100vh] md:w-[full] overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="./images/pixelBG1.jpg"
        />
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 150 },
            visible: { opacity: 1, y: 50 },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 3,
            delay: 0.25,

            type: "spring",
          }}
          className="absolute inset-0 m-auto flex flex-col  mt-20"
        >
          <h1 className="text-4xl md:text-[8rem] leading-none text-center">
            Pixel-perfect Greetings!
          </h1>
          <p className="text-2xl md:text-4xl text-center">
            Where pixels are the stars, and we are the pixel-perfect directors.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 100 }}
          transition={{
            duration: 2,
            ease: "backInOut",
          }}
          className="w-[150px] h-[50px] md:w-[200px] md:h-[50px] absolute bottom-[10%] left-[-20%] md:left-0 md:bottom-[10%]"
        >
          <img src="/images/car1.png" />
        </motion.div>
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: -20 }}
          transition={{ duration: 2, ease: "backInOut" }}
          className="w-[150px] h-[50px] md:w-[200px] md:h-[50px] absolute bottom-[10%] right-[2%] md:bottom-[10%] md:right-[10%]"
        >
          <img src="/images/car2.png" />
        </motion.div>
      </div>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
