import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../../styles/certificat.scss";
import Ccb from "./Ccb";
import Vcs from "./Vcs";

const IndexCert = () => {
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
      <div id="certificat">
        <h1>TERAKA est doublement certifié par Verra: VCS + CCB.</h1>
        <p>
          Ces certifications tierces ajoutent une deuxième couche de garantie,
          externe à TERAKA, pour une transparence et une intégrité maximale sur
          le Carbone séquestré par le projet et ses co-bénéfices sur le Climat,
          les Communautés et la Biodiversité.
        </p>
      </div>
      <div id="vcs" style={{backgroundColor: "#ebf1f4"}}>
        <Vcs />
      </div>
      <div id="ccb">
        <Ccb />
      </div>
    </>
  );
};

export default IndexCert;
