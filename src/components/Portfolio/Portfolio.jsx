import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { Link, useNavigate } from 'react-router-dom';
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";

const Portfolio = () => {
  const navigate = useNavigate();

  const handleExploreMoreClick = () => {
    // Reload the page from the starting point
    window.scrollTo(0, 0);

    // Navigate to the projects page
    // navigate('/projects');
  };

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="projects"></a>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <span className="primaryText">My Latest Projects</span>
            <p style={{ marginTop: "10px" }}>
              Projects on React, Data Science, Data Analytics{" "}
            </p>
          </div>
          <span className="secondaryText">
            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={handleExploreMoreClick}
            >
              Explore More Works
            </Link>
          </span>
        </motion.div>
        <div className={`flexCenter ${css.showCase}`}>
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="/WinPred/Screen1.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src="/DrugPred/Screen2.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="/A++/Screen4.png"
            alt="project"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
