import { easeInOut } from "motion";
import { motion } from "motion/react";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-gray-100">
      <div className="my-container grid grid-cols-2 justify-between items-center h-screen">
        {/* Hero section info */}
        <div className="flex justify-center items-center">
          <motion.h2
            animate={{ translateY: 30 }}
            className="text-5xl font-semibold text-blue-500 text-center"
          >
            Welcome to my new website...
          </motion.h2>
        </div>
        {/* hero section images */}
        <div className="hero-info">
          <motion.button
            className="ball"
            initial={{
              translateY: -300,
              translateX: 300,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              translateY: 0,
              translateX: 0,
              opacity: 1,
              rotate: 360,
              scale: 1.2,
            }}
            transition={{ duration: 4 }}
          >
            B
          </motion.button>
          <motion.button
            className="ball"
            initial={{
              translateX: -150,
            }}
            animate={{
              translateX: 150,
              rotate: 360,
            }}
            exit={{ translateX: -150 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            B
          </motion.button>
          <motion.button
            className="ball"
            initial={{
              translateY: -300,
              translateX: -300,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              translateY: 0,
              translateX: 300,
              opacity: 1,
              rotate: 360,
              scale: 1.2,
            }}
            transition={{ duration: 4 }}
          >
            B
          </motion.button>
          <p className="p-[1px] bg-red-600"></p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
