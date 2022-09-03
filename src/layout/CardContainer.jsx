import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/Header";

const CardContainer = (props) => {
  const [activeItem, setActiveItem] = useState("home");
  const itemList = [
    "home",
    "about-me",
    "resume",
    "portfolio",
    "blog",
    "contact",
  ];
  const [index, setIndex] = useState(0);
  const addItem = () => {
    if (index < itemList.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const minItem = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(itemList.length - 1);
    }
  };
  useEffect(() => {
    setActiveItem(itemList[index]);
	window.location.replace(`/#${itemList[index]}`)
  }, [index]);

  return (
    <>
      <div className="card-container">
		<section className="card-container_header">
			<Header />
		</section>
        <ul className="card-nav">
          <li className="card-nav_nav-item">
            <a
              href="#home"
              className={activeItem === "home" ? "active" : ""}
              onClick={() => setActiveItem("home")}
            >
              <span className="menu-icon lnr lnr-home"></span>
              <span className="hover-tab">Home</span>
            </a>
          </li>
          <li className="card-nav_nav-item">
            <a
              href="#about-me"
              className={activeItem === "about-me" ? "active" : ""}
              onClick={() => setActiveItem("about-me")}
            >
              <span className="menu-icon lnr lnr-user"></span>
              <span className="hover-tab">About me</span>
            </a>
          </li>
          <li className="card-nav_nav-item">
            <a
              href="#resume"
              className={activeItem === "resume" ? "active" : ""}
              onClick={() => setActiveItem("resume")}
            >
              <span className="menu-icon lnr lnr-graduation-hat"></span>
              <span className="hover-tab">Resume</span>
            </a>
          </li>
          <li className="card-nav_nav-item">
            <a
              href="#portfolio"
              className={activeItem === "portfolio" ? "active" : ""}
              onClick={() => setActiveItem("portfolio")}
            >
              <span className="menu-icon lnr lnr-briefcase"></span>
              <span className="hover-tab">Portfolio</span>
            </a>
          </li>
          <li className="card-nav_nav-item">
            <a
              href="#blog"
              className={activeItem === "blog" ? "active" : ""}
              onClick={() => setActiveItem("blog")}
            >
              <span className="menu-icon lnr lnr-book"></span>
              <span className="hover-tab">Blog</span>
            </a>
          </li>
          <li className="card-nav_nav-item">
            <a
              href="#contact"
              className={activeItem === "contact" ? "active" : ""}
              onClick={() => setActiveItem("contact")}
            >
              <span className="menu-icon lnr lnr-envelope"></span>
              <span className="hover-tab">Contact</span>
            </a>
          </li>
        </ul>
        <div className="toggle-nav"></div>
        <div className="arrow-nav">
          <div className="arrow-nav_right" onClick={() => addItem()}>
            <i className="lnr lnr-chevron-right"></i>
          </div>
          <div className="arrow-nav_left" onClick={() => minItem()}>
            <i className="lnr lnr-chevron-left"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContainer;
