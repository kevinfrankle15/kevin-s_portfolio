import React, { useEffect, useRef, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "../styles/HomePageContent.css";
import kevinPic from "../Images/kevin.jpg";
import image from "../Images/TechStack/hero-devices.svg";
import avatar from "../Images/TechStack/mf-avatar.svg";
const HomePageContent = () => {
  const [changeImg, setChangeImg] = useState(true);
  const [show, setShow] = useState("");
  const imgRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setShow("show");
      } else setShow("");
    });
    observer.observe(imgRef.current);
  }, []);
  return (
    <>
      <Container className="HPCContainer">
        <Row className="HPCDiv">
          <span className="hand">&#9757;</span>
          <img
            src={changeImg ? avatar : kevinPic}
            alt="wait"
            className="HPCImg"
            onClick={() => {
              setChangeImg(!changeImg);
            }}
          />
          <br />
          <br />
          Hey! My name is Kevin Frankle and I'm a web developer with a passion
          for full stack development. I'm currently a second year student at
          Bharathiar University pursuing a degree in Master of Computer
          Applicaitons with a minor in interaction design. I aspire toward a
          career that will allow me to channel my creativity through crafting
          beautiful software and engaging experiences.
        </Row>
      </Container>
      <img src={image} alt="wait" className={`homeSvg ${show}`} ref={imgRef} />
    </>
  );
};
export default HomePageContent;
