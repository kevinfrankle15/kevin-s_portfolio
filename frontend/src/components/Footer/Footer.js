import React, { useState } from "react";
import scotty from "../../Images/rocket12.jpg";
const Footer = () => {
  const [hide, setHide] = useState(false);
  var iconNamesAndLinks = [
    { name: "fa fa-twitter", link: "" },
    { name: "fa fa-instagram", link: "" },
    { name: "fa fa-github", link: "https://github.com/kevinfrankle15" },
    { name: "fa fa-linkedin", link: "https://linkedin.com/in/kevin-frankle15" },
  ];
  return (
    <>
      <div className="toCenterAText" style={{ paddingTop: "90px" }}>
        <div>
          {iconNamesAndLinks?.map((item, id) => {
            return (
              <span className="socialMediaIcon" key={id}>
                <a href={item?.link} target="_blank" rel="noreferrer">
                  <i className={item.name} id={item.name.split(" ")[1]} />
                </a>
              </span>
            );
          })}
        </div>
      </div>
      <span
        style={{
          paddingTop: "15px",
        }}
        className="toCenterAText"
        onClick={() => {
          window.scrollTo({ top: -1, behavior: "smooth" });
        }}
      >
        <img
          src={scotty}
          alt="loading"
          style={{ height: "50px", cursor: "pointer" }}
          onMouseOver={() => setHide(true)}
          onMouseLeave={() => setHide(false)}
        />
      </span>
      {hide ? (
        <p className="toCenterAText" style={{ color: "#F0F0F0", display: {} }}>
          Beam me up. Scooty!
        </p>
      ) : null}
    </>
  );
};

export default Footer;
