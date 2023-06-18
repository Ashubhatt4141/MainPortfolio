import React from "react";
import css from "./projectAbout.module.scss";
import { useParams } from "react-router-dom";
import { projects } from "../../utils/data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  fadeIn,
  staggerChildren,
  staggerContainer,
  textVariant2,
  zoomIn,
} from "../../utils/motion";

const projectAbout = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));
  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div variants={fadeIn("up", "tween", 0.2, 0.4)}>
        <div className={`flexCenter innerWidth ${css.container}`}>
          <Link
            to={project.link}
            style={{ textDecoration: "None", color: "inherit" }}
          >
            <span className="primaryText yPaddings">{project.title}</span>
          </Link>
        </div>
        <div className={`flexCenter innerWidth ${css.container}`}>
          <span className="secondaryText yPaddings">
            {project.completdescription}
          </span>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default projectAbout;
