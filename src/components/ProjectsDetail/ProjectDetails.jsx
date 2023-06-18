import React from 'react'
import css from './ProjectDetails.module.scss'
import { useParams } from 'react-router-dom';
import {projects} from '../../utils/data';
import {motion} from 'framer-motion';
import {fadeIn, staggerChildren,staggerContainer, textVariant2, zoomIn} from "../../utils/motion"
import NewHeader from '../NewHeader/NewHeader';
import Footer from '../Footer/Footer';
import ImageCrousel from '../ImageCrousel/ImageCrousel';
import ProjectTimeLine from '../ProjectTimeline/ProjectTimeLine';
import ProjectAbout from '../projectAbout/projectAbout';
const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find(project => project.id === parseInt(id));
  
    if (!project) {
      return <div>Project not found</div>;
    }
    var technologies=project.screenshots;
  return (
    <div>
        <NewHeader/>
        <ProjectAbout/>
        <ImageCrousel/>
        <ProjectTimeLine/>
        <Footer/>
    </div>
  )
}

export default ProjectDetails