import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {projects,sliderSettings} from '../../utils/data';
import Slider from "react-slick"
import { motion } from "framer-motion";
import NewHeader from '../NewHeader/NewHeader';
import Footer from '../Footer/Footer';
import css from "./ProjectList.module.scss"
import { footerVariants, staggerChildren, textVariant, textVariant2,fadeIn } from "../../utils/motion";
// import { Link, useNavigate } from 'react-router-dom';


const ProjectList = () => {
  const navigate = useNavigate();

  const handleExploreMoreClick = () => {
    // Reload the page from the starting point
    window.scrollTo(0, 0);
  };
  
  return (
    <div>
      <NewHeader/>
    <motion.section 
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      <motion.div 
      variants={fadeIn("left", "tween", 0.2, 1)}
      className={`yPaddings innerWidth ${css.container}`}>
    <div>
    <div className={`flexCenter innerWidth ${css.heading}`}>
            <span className="primaryText yPaddings">
                My Projects
            </span>
    </div>
      <div className={css.comments}>
        <Slider {...sliderSettings} className={css.slider}>
            {projects.map((project, i) => {
              return (
                <div  className={`flexCenter ${css.comment}`} key={i}>
                  <Link to={`/projects/${project.id}`} className={`${css.link}`} onClick={handleExploreMoreClick}>
                  <img src={project.image} alt=""  className='flexCenter'/>
                    {/* <project.image size={25} color="white"/> */}
                  <p className='secondaryText'>{project.shortdescription}</p>
                  <div className={css.line}></div>
                  <div className={css.bio}>
                    <span className='flexCenter' style={{marginTop:"20px"}}>{project.title}</span>
                    <span>{project.Basedon}</span>
                  </div>
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
    </div>
    </motion.div>
    </motion.section>
    <Footer/>
    </div>
  );
};

export default ProjectList;
