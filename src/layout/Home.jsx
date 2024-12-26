import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Hero from "../pages/home/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <motion.h3>
        this is home page
      </motion.h3>
      <Link to="/dashboard">Go Dash</Link>
    </div>
  );
};

export default Home;
