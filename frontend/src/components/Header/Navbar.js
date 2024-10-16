import React, { useEffect, useState } from "react";
import { Container, Row, Stack, Col } from "react-bootstrap";
import "../../styles/Navbar.css";

const Navbar = ({ props, state }) => {
  const [storeWidth, setStoreWidth] = useState(window.innerWidth);
  const [storeHeight, setStoreHeight] = useState(window.innerHeight);
  const [scrollActive, setScrollActive] = useState("notClick");
  var systemSizeScrollPx = {
    whatIDo: 830,
    experience: 1500,
    resume: 2500,
    contact: 2500,
  };
  var laptopScrollPx = {
    whatIDo: 680,
    experience: 1200,
    resume: 2000,
    contact: 2000,
  };
  var mobileSizeScrollPx = {
    whatIDo: 730,
    experience: 1300,
    resume: 2500,
    contact: 2500,
  };
  useEffect(() => {
    props(scrollActive);
  }, [storeWidth, storeHeight, scrollActive, props, state]);
  const forScrolling = (pageTitle) => {
    setScrollActive("clicked");
    if (storeWidth >= 1900 && storeHeight >= 900) {
      window.scrollTo({
        top: systemSizeScrollPx[pageTitle],
        behavior: "smooth",
      });
    } else if (storeWidth >= 900 && storeHeight >= 695) {
      window.scrollTo({
        top: laptopScrollPx[pageTitle],
        behavior: "smooth",
      });
    } else if (storeWidth < 600 && storeHeight < 800) {
      window.scrollTo({
        top: mobileSizeScrollPx[pageTitle],
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <Container>
        <Col xs lg="">
          <Row>
            {state ? (
              <Stack gap={3} className="navContainerT">
                <button
                  className="atag"
                  onClick={() => {
                    forScrolling("whatIDo");
                  }}
                >
                  What I Do'
                </button>
                <button
                  className="atag"
                  onClick={() => forScrolling("experience")}
                >
                  Experience'
                </button>
                <span
                  style={{
                    fontWeight: "200px",
                    color: "rgb(235, 232, 232)",
                    fontSize: "1.25em",
                    opacity: "0.5",
                  }}
                >
                  SAY HELLO
                </span>
                <button className="atag" onClick={() => forScrolling("resume")}>
                  Resume
                </button>
                {/* <button href="" className="atag">
                Work
              </button> */}
                <button
                  className="atag"
                  onClick={() => forScrolling("contact")}
                >
                  Contact
                </button>
                <a href="xyz">xyz</a>
              </Stack>
            ) : null}
          </Row>
        </Col>
      </Container>
    </>
  );
};
export default Navbar;
