import React, { useEffect, useContext } from "react";
import { ActContext } from "../../../App";
import { useLocation } from "react-router-dom";
import "../../../styles/certificat.scss";
import Ccb from "./Ccb";
import Vcs from "./Vcs";

const IndexCert = () => {
  const state = useLocation();
  const { t } = useContext(ActContext);
  useEffect(() => {
    if (state.state !== null) {
      window.scrollTo({
        top: document.getElementById(state.state.param).offsetTop - 60,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [state]);
  return (
    <>
      <div id="certificat">
        <h1>{t("certification.sousTitre")}</h1>
        <p>{t("certification.txt")}</p>
      </div>
      <div id="vcs" style={{ backgroundColor: "#ebf1f4" }}>
        <Vcs />
      </div>
      <div id="ccb">
        <Ccb />
      </div>
    </>
  );
};

export default IndexCert;
