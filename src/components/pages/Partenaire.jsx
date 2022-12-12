import React, { useContext, useEffect } from "react";
import { ActContext } from "../../App";
import "../../styles/partenaire.scss";

const Partenaire = () => {
  const { width, t } = useContext(ActContext);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  return (
    <div id="partenaire">
      <h1 style={{ fontSize: width > 1000 ? "2rem" : "1.5rem" }}>
        {t("navbar.2")}
      </h1>
      <div style={{ backgroundColor: "#ebf1f4" }}>
        <p>{t("partenaire.content.0")}</p>
      </div>
      <div>
        <p>{t("partenaire.content.1")}</p>
        <p>{t("partenaire.content.2")}</p>
        <img
          src="/images/tist.png"
          alt="tist logo"
          onClick={() => {
            window.open("https://program.tist.org", "_blank");
          }}
        />
      </div>
    </div>
  );
};

export default Partenaire;
