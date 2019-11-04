import React from "react";
// @ts-ignore
import profilePicture from "../../../static/assets/images/bio/myimage.jpg";

const About = () => {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ")",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="rigth-column">
        <p>
          Born and Grew up in Mexico City, Mexico, I am proactive, resourceful
          and always looking for ways to improve my work and the process I take
          to achieve the desired goal. I have mostly worked in the area of sales
          and customer service, so I have experience at work teams in small
          stores and the responsive train new staff constantly. I love to do
          amateur photography as a hobby and spend time with my family. One of
          my biggest dreams is to workin educational websites and bring new and
          incredible knowledge in schools, available for students and teachers
          so they can grew up together as a team.
        </p>
      </div>
    </div>
  );
};

export default About;
