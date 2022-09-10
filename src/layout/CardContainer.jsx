import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Resume from "../pages/Resume";
import Portfolio from "../pages/Portfolio";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

const CardContainer = (props) => {
  const [activeItem, setActiveItem] = useState("home");
  const itemList = [
    "home",
    "about-me",
    "resume",
    "portfolio",
    // "blog",
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
        <section className="card-container_content">
          <div className="card-container_content--animated-sections">
			<section className={index === 0 ? "animated-section section-active": "animated-section"}>
              <Home />
            </section>
            <section className={index === 1 ? "animated-section section-active": "animated-section"}>
              <AboutMe />
            </section>
            <section className={index === 2 ? "animated-section section-active": "animated-section"}>
              <Resume />
            </section>
            <section className={index === 3 ? "animated-section section-active": "animated-section"}>
              <Portfolio />
            </section>
            {/* <section className={index === 4 ? "animated-section section-active": "animated-section"}>
              <Blog />
            </section> */}
            <section className={index === 4 ? "animated-section section-active": "animated-section"}>
              <Contact />
            </section>
          </div>
        </section>
        {/* Nav Section */}
        <ul className="card-nav">
          <li className="card-nav_nav-item">
            <a
              href="#home"
              className={activeItem === "home" ? "active" : ""}
              onClick={() => {
                setActiveItem("home");
                setIndex(0);
              }}
            >
              <span className="menu-icon lnr lnr-home"></span>
              <span className="hover-tab">Home</span>
            </a>
          </li>
          <li className="card-nav_nav-item">
            <a
              href="#about-me"
              className={activeItem === "about-me" ? "active" : ""}
              onClick={() => {
                setActiveItem("about-me");
                setIndex(1);
              }}
            >
              <span className="menu-icon lnr lnr-user"></span>
              <span className="hover-tab">About me</span>
            </a>
          </li>
          <li className="card-nav_nav-item">
            <a
              href="#resume"
              className={activeItem === "resume" ? "active" : ""}
              onClick={() => {
                setActiveItem("resume");
                setIndex(2);
              }}
            >
              <span className="menu-icon lnr lnr-graduation-hat"></span>
              <span className="hover-tab">Resume</span>
            </a>
          </li>
          <li className="card-nav_nav-item">
            <a
              href="#portfolio"
              className={activeItem === "portfolio" ? "active" : ""}
              onClick={() => {
                setActiveItem("portfolio");
                setIndex(3);
              }}
            >
              <span className="menu-icon lnr lnr-briefcase"></span>
              <span className="hover-tab">Portfolio</span>
            </a>
          </li>
          {/* <li className="card-nav_nav-item">
            <a
              href="#blog"
              className={activeItem === "blog" ? "active" : ""}
              onClick={() => {
                setActiveItem("blog");
                setIndex(4);
              }}
            >
              <span className="menu-icon lnr lnr-book"></span>
              <span className="hover-tab">Blog</span>
            </a>
          </li> */}
          <li className="card-nav_nav-item">
            <a
              href="#contact"
              className={activeItem === "contact" ? "active" : ""}
              onClick={() => {
                setActiveItem("contact");
                setIndex(4);
              }}
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
