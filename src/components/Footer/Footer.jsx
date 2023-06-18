import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="footer"></a>
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:ashubhatt4141@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Follow Me</span>
            <p>Chandigarh, Punjab</p>
          </div>
          <ul className={css.menu}>
            <li>
              <a
                href="https://www.linkedin.com/in/ashu-bhatt/"
                style={{ fontWeight: "bolder" }}
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ashu4141/"
                style={{ fontWeight: "bolder" }}
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Ashubhatt4141"
                style={{ fontWeight: "bolder" }}
              >
                Git-Hub
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/ashu.bhatt.16121471"
                style={{ fontWeight: "bolder" }}
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;