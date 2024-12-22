import React from "react";
import { Link } from "react-router-dom";
import Hero from "../pages/home/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <h3>this is home page</h3>
      <Link to="/dashboard">Go Dash</Link>
    </div>
  );
};

export default Home;
