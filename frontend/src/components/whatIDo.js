import React, { useEffect, useRef, useState } from "react";
import "../styles/WhatIDo.css";
import "../index.css";
const WhatIDo = () => {
  const [show, setShow] = useState("");
  const ref1 = useRef();
  const ref2 = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShow("show");
        } else setShow("");
      });
    });
    observer.observe(ref1.current);
  }, []);
  return (
    <div className="" style={{ position: "relative", top: "10%" }}>
      <p className="headingStyleProp">WHAT I DO</p>
      <div className="itemContainer">
        <div className={`items ${show}`} ref={ref1}>
          <i className="fa fa-laptop" id="fa" />
          <b style={{ color: "#5BE9B9" }}>DESIGN</b>
          <p className="textStyleProperties">
            Design isn't just what a product looks like and feels like on the
            outside. Design encompasses the internal functionality of a product
            as well as the overall user experience. I strive to design
            interfaces and experiences that people can enjoy on all digital
            mediums.
          </p>
        </div>
        <div className={`items ${show}`} ref={ref2}>
          <i className="fa fa-code" id="fa" />
          <b style={{ color: "#5BE9B9" }}>DEVELOPMENT</b>
          <p className="textStyleProperties">
            With a strong foundation in computer science, I'm passionate about
            web design and development, and interested in web app development.
            As I grow as a developer, I hope to write clean, readable code that
            can be used by others and leveraged to create beautiful software.
          </p>
        </div>
      </div>
    </div>
  );
};
export default WhatIDo;
