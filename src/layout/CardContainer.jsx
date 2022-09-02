import React from "react";

const CardContainer = (props)=> {
	return (
    <>
      <div className="card-container">
        <ul className="card-nav">
          <li className="card-nav_nav-item">
            <a href="#home" className="active">
              <span className="menu-icon lnr lnr-home"></span>
			  <span className="hover-tab">Home</span>
            </a>
          </li>
          <li className="card-nav_nav-item">
            <a href="#about-me">
              <span className="menu-icon lnr lnr-user"></span>
			  <span className="hover-tab">About me</span>
            </a>
          </li>
          <li className="card-nav_nav-item">
            <a href="#resume">
              <span className="menu-icon lnr lnr-graduation-hat"></span>
			  <span className="hover-tab">Resume</span>
            </a>
          </li>
          <li className="card-nav_nav-item">
            <a href="#portfolio">
              <span className="menu-icon lnr lnr-briefcase"></span>
			  <span className="hover-tab">Portfolio</span>
            </a>
          </li>
          <li className="card-nav_nav-item">
            <a href="#blog">
              <span className="menu-icon lnr lnr-book"></span>
			  <span className="hover-tab">Blog</span>
            </a>
          </li>
		  <li className="card-nav_nav-item">
			<a href="#contact">
				<span className="menu-icon lnr lnr-envelope"></span>
				<span className="hover-tab">Contact</span>
			</a>
		  </li>
        </ul>
        <div className="toggle-nav"></div>
      </div>
    </>
  );
}

export default CardContainer;