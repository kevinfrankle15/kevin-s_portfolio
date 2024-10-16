import React from "react";
import { useNavigate } from "react-router-dom";
const MyResume = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ position: "relative", top: "10%", padding: "10px" }}>
        <p className="headingStyleProp"> My résumé!</p>
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={() => navigate("/resume")}>
            Grab A Copy
          </button>
        </div>
      </div>
    </>
  );
};
export default MyResume;
