

import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

import "./style.css"

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
  const iconList = [
    {
      component: "",
      href: "https://github.com/",
    },
    {
      component: "",
      href: "",
    },
    {
      component: "",
      href: "",
    },
    {
      component: "",
      href: "",
    },
    {
      component: "",
      href: "",
    },
  ];
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="sidebar">
      <div className="image_conatiner"></div>
      <img src="src\images\adiee2.png" alt="" />
      <div className="name_container">
        <h4>
          <Link smooth to="/#start" className="h1_links">
            Aaditya Kumar
          </Link>
        </h4>
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
          <Link smooth to="https://drive.google.com/file/d/1yy4ajKppeqLtPLcI-ZiOD9nhWz7FtggA/view?usp=drive_link" className="links">
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
        >
          {iconList.map((val, index) => (
            <motion.li key={index} variants={item}>
              <img
                onClick={() => {
                  window.open(val.href, "_blank");
                }}
                src={val.component}
                className="icon-img"
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div
        style={{
          color: "black",
          fontWeight: "bold",
          paddingTop: "30%",
        }}
        className="tagtop"
      ></div>
      <footer></footer>
    </div>
  );
}
