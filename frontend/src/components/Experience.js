import React, { useEffect, useRef, useState } from "react";
import "../index.css";
import "../styles/Experience.css";
import html from "../Images/TechStack/html.jpg";
import css from "../Images/TechStack/css.jpg";
import js from "../Images/TechStack/js.jpg";
import b1 from "../Images/TechStack/bootstrap1.png";
import py1 from "../Images/TechStack/python1.png";
import p1 from "../Images/TechStack/powerbi1.png";
import g1 from "../Images/TechStack/git1.png";
import node1 from "../Images/TechStack/node1.png";
import postgre1 from "../Images/TechStack/postgreSql1.png";
import r1 from "../Images/TechStack/react1.png";
const MyExperience = () => {
  const [showIcon, setShowIcon] = useState("");
  var tectStackImages = [html, css, js, b1, py1, p1, g1, node1, r1, postgre1];
  const iconRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowIcon("show");
        } else setShowIcon("");
      });
    });
    observer.observe(iconRef.current);
  });
  return (
    <div style={{ position: "relative", top: "10%", padding: "10px" }}>
      <p className="headingStyleProp">EXPERIENCE</p>
      <p
        className="textStyleProperties"
        style={{ display: "flex", justifyContent: "center" }}
      >
        I've been doing web development for about 1.5 years now, and I'm always
        eager to learn more in this fast paced industry
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p className="textStyleProperties">
          Some technologies I've worked with:
        </p>
        <div className={`itemContainerExperience ${showIcon}`} ref={iconRef}>
          {tectStackImages.map((name, id) => {
            return (
              <>
                <img src={name} alt="loading" className="imgStyle" key={id} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MyExperience;
