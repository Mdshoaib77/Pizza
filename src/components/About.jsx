import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const About = () => {
  return (
    <div className="min-h-screen text-white flex flex-col items-end justify-center mt-14 bg-[url('./assets/img/aboutUs.jpg')] bg-cover bg-no-repeat">
      <div className="mx-auto mr-44">
        {/* Title animation */}
        <motion.h3
          className="pr-16 text-5xl font-semibold text-white"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          The Best
        </motion.h3>

        {/* Main Heading animation */}
        <motion.h1
          className="font-bold text-yellow-400 text-7xl md:text-9xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          PIZZA
        </motion.h1>

        {/* Subtitle animation */}
        <motion.h3
          className="pl-32 text-6xl text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Around
        </motion.h3>
      </div>
    </div>
  );
};

export default About;
