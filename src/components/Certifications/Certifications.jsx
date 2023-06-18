import React from "react";
import css from "./Certfications.module.scss";
import { comments, sliderSettings } from "../../utils/data";
import { motion } from "framer-motion";
import Slider from "react-slick"
import { footerVariants, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
import { Link, useNavigate } from "react-router-dom";
const Certifications = () => {
    const navigate = useNavigate();

    const handleExploreMoreClick = () => {
      // Reload the page from the starting point
      window.scrollTo(0, 0);
    };
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div 
      variants={footerVariants}
      className={`yPaddings innerWidth ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">My Certficates</span>
          <p style={{ marginTop: "2rem" }}>
            Certificates I have earned from various platforms like Coursera, Simplilearn, etc.
          </p>
          <p>Development, Data Science,Data Analytics,SQL,Machine Learning</p>
        </div>
        <div className={css.comments}>
        <Slider {...sliderSettings} className={css.slider}>
            {comments.map((comment, i) => {
              return (
                <div
                  //  onClick={() => window.location.href = comment.link}
                  className={`flexCenter ${css.comment}`}
                >
                  <Link
                    to={`/certificates/${comment.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                    onClick={handleExploreMoreClick}
                  >
                    <img src={comment.img} alt="" />
                    <p>{comment.comment}</p>
                    <div className={css.line}></div>
                    <div className={css.bio}>
                      <span className="secondaryText">{comment.name}</span>
                      <span>{comment.post}</span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
      </motion.div>
    </motion.section>
    
  );
};

export default Certifications;
