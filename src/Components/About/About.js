import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="container about-section">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-image">
            <img src="" alt="" />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <div className="about-title">
              <h5>About Me</h5>
              <span className="line"></span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              quo illum hic, amet pariatur quas. Laboriosam accusamus nemo
              deleniti officia ipsum, nisi error quod labore veritatis dolores
              nobis placeat! Perspiciatis sit ipsum nihil molestias dignissimos
              ab quis reiciendis facere. Saepe cumque consequuntur tempore qui
              temporibus, magni maxime alias earum vitae!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
