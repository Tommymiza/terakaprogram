import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../../styles/engage.scss";
import Philanthropique from "./Philanthropique";
import Professionnel from "./Professionnel";
import Contribution from "./Contribution";
const IndexEng = () => {
  const state = useLocation();
  useEffect(() => {
    if (state.state !== null) {
      document
        .getElementById(state.state.param)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [state]);
  return (
    <>
      <div id="engage">
        <h1>
          Comment s’engager avec TERAKA pour reverdir Madagascar et soutenir les
          populations locales:
        </h1>
      </div>
      <div id="professionnel" style={{ backgroundColor: "#ebf1f4" }}>
        <Professionnel />
      </div>
      <div id="philanthropique">
        <Philanthropique />
      </div>
      <div id="contribution" style={{ backgroundColor: "#ebf1f4" }}>
        <Contribution />
      </div>
    </>
  );
};

export default IndexEng;
