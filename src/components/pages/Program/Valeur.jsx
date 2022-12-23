import React, { useContext } from "react";
import { ActContext } from "../../../App";

const Valeur = () => {
  const { t, width } = useContext(ActContext);
  return (
    <div className="content">
      <h1 style={{ fontSize: width > 1000 ? "2rem" : "1.5rem" }}>
        {t("program.nb.0")}
      </h1>
      <div>
        <div>
          <p>{t("program.valeur.txt")}</p>
          <ul>
            <li>{t("program.valeur.list.0")}</li>
            <li>{t("program.valeur.list.1")}</li>
            <li>{t("program.valeur.list.2")}</li>
            <li>{t("program.valeur.list.3")}</li>
            <li>{t("program.valeur.list.4")}</li>
            <li>{t("program.valeur.list.5")}</li>
            <li>{t("program.valeur.list.6")}</li>
          </ul>
        </div>
        <img src="/images/IMG_0232.jpg" alt="valeur" />
      </div>
      <div className="reverse">
        <div>
          <h3 style={{ marginBottom: "10px" }}>{t("program.valeur.qst")}</h3>
          <div className="textCard">
            <h4>{t("program.valeur.span.0")}</h4>
            <p>{t("program.valeur.content.0")}</p>
          </div>
          <div className="textCard">
            <h4>{t("program.valeur.span.1")}</h4>
            <p>{t("program.valeur.content.1")}</p>
          </div>
          <div className="textCard">
            <h4>{t("program.valeur.span.2")}</h4>
            <p>{t("program.valeur.content.2")}</p>
          </div>
          <div className="textCard">
            <h4>{t("program.valeur.span.3")}</h4>
            <p>{t("program.valeur.content.3")}</p>
          </div>
        </div>
        <img src="/images/IMG_0233.jpg" alt="valeur" />
      </div>
    </div>
  );
};

export default Valeur;
