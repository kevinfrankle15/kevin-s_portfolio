import React from "react";
import { useNavigate } from "react-router-dom";

const GetInTouch = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "30px",
          // padding: "10px",
        }}
      >
        <i
          className="fa fa-paper-plane"
          style={{ fontSize: "50px", color: "#6E07F3" }}
        />
        <p className="headingStyleProp">Get In Touch!</p>
        <p className="textStyleProperties" style={{ padding: "10px" }}>
          Whether you have an idea for a project , need Freelance or just want
          to chat, feel free to shoot me an email!
        </p>
        <button
          className="button"
          onClick={() => {
            navigate("/contact");
          }}
        >
          Say Hello
        </button>
      </div>
    </>
  );
};

export default GetInTouch;
