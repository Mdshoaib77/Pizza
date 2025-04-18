import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import img3 from "../assets/img/pic3.png";

const Review = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-5 md:px-32">
      <h1 className="pt-24 pb-10 text-4xl font-semibold text-center lg:pt-16">
        Customer's Review
      </h1>

      {/* Animated grid of reviews */}
      <motion.div
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ReviewCard img={img1} name="Sophia Azura" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ReviewCard img={img2} name="John Deo" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <ReviewCard img={img3} name="Victoria Zoe" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Review;
