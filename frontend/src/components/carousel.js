import React from "react";
import Carousel from "react-bootstrap/Carousel";

function IndividualIntervalsExample({ prop }) {
  console.log(prop.length);
  const carousel = () => {
    let len = prop.length;
    for (var i = 0; i <= len; i++) {}
  };
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Carousel.Caption>
          <img src={prop?.html} alt=";" />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
