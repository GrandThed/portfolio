import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <section className="header">
      <div className=" left">
        <h1>Portfolio</h1>
        <h1>Benjamin</h1>
        <h1>Canas<span>.</span> </h1>
      </div>
      <div className="right">
          <h1>Web Developer</h1>
        <ul>
            <li>Projects</li>
            <li>Tecnologies</li>
            <li className="contact" >Contact me</li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
