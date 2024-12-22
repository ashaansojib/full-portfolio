import { motion } from "motion/react";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-gray-100">
      <div className="my-container grid grid-cols-2 justify-between items-center h-screen">
        {/* Hero section info */}
        <div className="flex justify-center items-center">
          <h2 className="text-5xl font-semibold text-blue-500 text-center">
            Welcome to my new website...
          </h2>
        </div>
        {/* hero section images */}
        <div className="hero-info">
          <motion.span
            className="ball"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            B
          </motion.span>
          <p className="p-[1px] bg-red-600"></p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
