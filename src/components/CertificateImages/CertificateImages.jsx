import React from 'react'
import {comments} from '../../utils/data';
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerChildren,
  staggerContainer,
  textVariant2,
  zoomIn,
} from "../../utils/motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import css from './CertificateImages.module.scss'
const CertificateImages = () => {
        const { id } = useParams();
        const Comments = comments.find((project) => project.id === parseInt(id));

        if (!Comments) {
          return <div>Certificate not found</div>;
        }
        var technologies = Comments.screenshots;
   return (
     <motion.section
       variants={staggerContainer}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.25 }}
       className={`paddings ${css.wrapper}`}
     >
       <div className={`flexCenter innerWidth ${css.container}`}>
         <span className="primaryText yPaddings">Certificates ScreenShots</span>
       </div>
       <div className={`flexCenter ${css.imagecarousel}`}>
         <Carousel showThumbs={false} infiniteLoop autoPlay>
           {technologies.map((images, index) => (
             <motion.div
               variants={fadeIn("left", "tween", 0.3, 0.6)}
               key={index}
             >
               <img src={images.link} alt="" />
             </motion.div>
           ))}
         </Carousel>
       </div>
     </motion.section>
   );
}

export default CertificateImages