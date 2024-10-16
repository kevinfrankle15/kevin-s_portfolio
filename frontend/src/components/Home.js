import React from "react";
import "../styles/Home.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header/Header";
import HomePageContent from "./HomePageContent";
import WhatIDo from "./whatIDo";
import MyExperience from "./Experience";
import MyResume from "./MyResume";
import GetInTouch from "./GetInTouch";
// import MyWork from "./MyWork";
import Footer from "./Footer/Footer";
import "../styles/Footer.css";
import "../styles/GetInTouch.css";
const Home = () => {
  return (
    <div className="" style={{ backgroundColor: "#0A192F" }}>
      <div style={{ height: "90vh" }} id="LandingPage">
        <Container fluid>
          <Row>
            <Header />
          </Row>
        </Container>
        <Container style={{ position: "absolute", top: "50%" }}>
          <Row lg="2">
            <HomePageContent />
          </Row>
        </Container>
      </div>
      <div style={{ height: "80vh" }} id="WhatIDo">
        <WhatIDo />
      </div>
      <div style={{ height: "65vh" }} id="Experiance">
        <MyExperience />
      </div>
      <div style={{ height: "25vh" }} id="MyResume">
        <MyResume />
      </div>
      {/* <div style={{ backgroundColor: "#0A192F", height: "80vh" }} id="MyWork">
        <MyWork />
      </div> */}
      <div
        // style={{ backgroundColor: "#0A192F", height: "50vh" }}
        className="GITContainer"
        id="GetInTouch"
      >
        <GetInTouch />
      </div>
      <div className="footerContainer" id="Footer">
        <Footer />
      </div>
      {/* <div id="xyz"></div> */}
    </div>
  );
};
export default Home;
