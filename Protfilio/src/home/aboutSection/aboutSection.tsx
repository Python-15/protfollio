import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

import "./style.css";

export function Sidebar() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="sidebar">
      <div className="image_conatiner"></div>
      <img className="profile_pic" src="src\images\adiee2.png" alt="" />
      <div className="name_container">
        <h4>Aaditya Kumar</h4>
        <p>Software engineer</p>
      </div>

      <ul className="sidebar-nav">
        <li className="sidebar-nav-items">
          <Link
            smooth
            to="https://windowaapclones.netlify.app/"
            className="links"
          >
            <span>Projects</span>
          </Link>
        </li>
        <li className="sidebar-nav-items">
          <Link
            smooth
            to="https://drive.google.com/file/d/1yy4ajKppeqLtPLcI-ZiOD9nhWz7FtggA/view?usp=drive_link"
            className="links"
          >
            Resume
          </Link>
        </li>
      </ul>

      <div>
        <motion.ul
          className="sidebar-nav"
          variants={container}
          initial="hidden"
          animate="visible"
        ></motion.ul>
      </div>
      <div
        style={{
          color: "black",
          fontWeight: "bold",
          paddingTop: "30%",
        }}
        className="tagtop"
      ></div>
      <footer className="footer_sidebar">
        <a className="footer-linkgmail" href="mailto: raaz.aditya15@gmail.com">
          <img className="github_icon" src="src\images\new.png"></img>
        </a>

        <a className="footer-link" href="https://www.linkedin.com/">
          <img className="github_icon" src="src\images\linkedin.png"></img>
        </a>
        <a className="footer-link" href="https://github.com/Python-15">
          <img className="github_icon" src="src\images\github.png"></img>
        </a>
        <p>© Aaditya.</p>
      </footer>
    </div>
  );
}
