import React from "react";
import { motion } from "framer-motion";
import img from "../assets/img/heroNew.png";
import Button from "../layouts/Button";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10 px-4 py-12 text-black bg-white md:flex-row md:px-12">
      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full space-y-6 text-center md:w-1/2 md:text-left"
      >
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Discover <span className="text-red-600">Pizza</span> Like Never Before
        </h1>
        <p className="max-w-md mx-auto text-sm sm:text-base md:text-lg md:mx-0">
          Indulge in the finest ingredients and bold flavors, all baked fresh to perfection.
        </p>
        <div className="flex justify-center md:justify-start">
          <Button title="Explore Now" />
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ rotate: 10, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="flex justify-center w-full md:w-1/2"
      >
        <img
          src={img}
          alt="Pizza"
          className="w-64 rounded-lg shadow-lg sm:w-80 md:w-96 lg:w-104"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
