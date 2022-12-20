import React, { useEffect, useContext } from "react";
import { ActContext } from "../../../App"
import { useLocation } from "react-router-dom";
import "../../../styles/engage.scss";
import Philanthropique from "./Philanthropique";
import Professionnel from "./Professionnel";
import Contribution from "./Contribution";
const IndexEng = () => {
  const { t } = useContext(ActContext)
  const state = useLocation();
  useEffect(() => {
    if (state.state !== null) {
      window.scrollTo({top: document.getElementById(state.state.param).offsetTop - 60 , behavior: "smooth"})
    } else {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [state]);
  return (
    <>
      <div id="engage">
        <h1>
        {t("engage.sousTitre")}
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
