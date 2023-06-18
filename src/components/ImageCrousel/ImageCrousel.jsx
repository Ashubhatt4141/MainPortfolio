import React from 'react'
import css from './ImageCrousel.module.scss'
import { useParams } from 'react-router-dom';
import {projects} from '../../utils/data';
import {motion} from 'framer-motion';
import {fadeIn, staggerChildren,staggerContainer, textVariant2, zoomIn} from "../../utils/motion"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const ImageCrousel = () => {
    const { id } = useParams();
    const project = projects.find(project => project.id === parseInt(id));
  
    if (!project) {
      return <div>Project not found</div>;
    }
    var technologies=project.screenshots;
  return (
    <motion.section
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0.25}}
     className={`paddings ${css.wrapper}`}>
        <div className={`flexCenter innerWidth ${css.container}`}>
        <span className="primaryText yPaddings">
                Projects ScreenShots
            </span>
        </div>
        <div className={`flexCenter ${css.imagecarousel}`}>
            <Carousel showThumbs={false} infiniteLoop autoPlay>
            {technologies.map((images, index) => (
          <motion.div
          variants={fadeIn("left", "tween", .3, .6)}
          key={index}>
            <img src={images.link} alt="" />
          </motion.div>
        ))}
      </Carousel>
    </div>
    </motion.section>
  )
}

export default ImageCrousel