import React from 'react'
import { useParams } from "react-router-dom";
import css from './CertfificateAbout.module.scss'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import {
  fadeIn,
  staggerChildren,
  staggerContainer,
  textVariant2,
  zoomIn,
} from "../../utils/motion";
import {comments} from '../../utils/data';
const CertficateAbout = () => {
   const { id } = useParams();
   const Comments = comments.find((project) => project.id === parseInt(id));

   if (!Comments) {
     return <div>Certificate not found</div>;
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
            to={Comments.link}
            style={{ color: "inherit", textDecoration: "None" }}
          >
            <span className="primaryText yPaddings">{Comments.name} </span>
          </Link>
          <span className="secondaryText yPaddings">By :-{Comments.post}</span>
          <div className={css.imageWrapper}>
            <img src={Comments.img} alt="" className={css.image} />
          </div>
        </div>
        <div className={`flexCenter innerWidth ${css.container}`}>
          <span className="secondaryText yPaddings">
            {Comments.description}
          </span>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default CertficateAbout