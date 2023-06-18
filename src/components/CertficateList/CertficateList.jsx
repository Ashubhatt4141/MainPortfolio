import React from 'react'
import { useParams } from "react-router-dom";
import { comments } from '../../utils/data';
import { motion } from "framer-motion";
import css from './CertificateList.module.scss';
import { Link, useNavigate } from "react-router-dom";
import NewHeader from "../NewHeader/NewHeader";
import CertficateAbout from '../CertficateAbout/CertficateAbout';
import CertificateImages from '../CertificateImages/CertificateImages';
import {
  fadeIn,
  staggerChildren,
  staggerContainer,
  textVariant2,
  zoomIn,
} from "../../utils/motion";
import Footer from "../Footer/Footer";
const CertficateList = () => {
        const { id } = useParams();
        const project = comments.find((project) => project.id === parseInt(id));

        if (!project) {
          return <div>Project not found</div>;
        }
        
  return (
   <div>
    <NewHeader/>
    <CertficateAbout/>
    <CertificateImages/>
    <Footer/>
   </div>
  )
}

export default CertficateList