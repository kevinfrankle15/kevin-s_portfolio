import React, { useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Navbar from "./Navbar";
import "../../styles/Header.css";
const Header = () => {
  const [switchN, setSwitchN] = useState(false);
  const handle = (state) => {
    if (state === "clicked") {
      setSwitchN(false);
    } else if (state === "notClicked") setSwitchN(true);
  };
  const navbarSvg = () => {
    return (
      <Col
        xs
        lg="1"
        onClick={() => {
          setSwitchN(!switchN);
        }}
        className="navIconDiv"
      >
        {switchN ? (
          <Col style={{ width: "0%" }}>
            <svg
              width="38"
              height="43"
              viewBox="0 0 38 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 42L37 0.999999" stroke="#D0D9EE" />
            </svg>
            <svg
              width="38"
              height="43"
              viewBox="0 0 38 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M37 42L1 0.999999" stroke="#D0D9EE" />
            </svg>
          </Col>
        ) : (
          <Col>
            <Stack gap={3}>
              <svg
                width="74"
                height="7"
                viewBox="0 0 74 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M73.8822 3.45877L70.9545 0.613548L68.1093 3.54124L71.037 6.38646L73.8822 3.45877ZM1 4.99999L71.0029 3.99995L70.9886 3.00006L0.985717 4.0001L1 4.99999Z"
                  fill="#3A928A"
                />
              </svg>

              <svg
                width="46"
                height="7"
                viewBox="0 0 46 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.8868 3.5L43 0.613249L40.1132 3.5L43 6.38675L45.8868 3.5ZM0 4H43V3H0V4Z"
                  fill="#3A928A"
                />
              </svg>
            </Stack>
          </Col>
        )}
      </Col>
    );
  };

  return (
    <>
      <Container className="fixedMenu">
        <Row>
          <Col className="name">&#60;KevinFrankle&#8725;&#62;</Col>
          {navbarSvg()}
          {switchN ? <Navbar props={handle} state={switchN} /> : null}
        </Row>
      </Container>
    </>
  );
};
export default Header;
