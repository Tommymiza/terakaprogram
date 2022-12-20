import React, { useContext } from "react";
import { ActContext } from "../../../App";

const Reboisement = () => {
  const { t } = useContext(ActContext);
  return (
    <div className="content">
      <h2>{t("program.nb.1")}</h2>
      <div>
        <div>
          <h3 style={{ marginBottom: "10px" }}>
            {t("program.reboisement.span.0")}
          </h3>
          <div className="textCard">
            <p>{t("program.reboisement.content.0")}</p>
            <br />
          </div>
          <div className="textCard">
            <p>{t("program.reboisement.content.1")}</p>
          </div>
        </div>
        <img src="/images/IMG_0015.jpeg" alt="Reboisement" />
      </div>
      <div className="reverse">
        <div>
          <h3 style={{ marginBottom: "10px" }}>
            {t("program.reboisement.span.1")}
          </h3>
          <div className="textCard">
            <p>{t("program.reboisement.content.2")}</p>
            <br />
          </div>
          <div className="textCard">
            <p>{t("program.reboisement.content.3")}</p>
          </div>
        </div>
        <img src="/images/IMG_0308.jpg" alt="Reboisement" />
      </div>
      <div>
        <div>
          <h3 style={{ marginBottom: "10px" }}>
            {t("program.reboisement.span.2")}
          </h3>
          <div className="textCard">
            <p>{t("program.reboisement.content.4")}</p>
            <br />
          </div>
          <div className="textCard">
            <p>{t("program.reboisement.content.5")}</p>
          </div>
        </div>
        <img src="/images/IMG_9903.jpeg" alt="Reboisement" />
      </div>
    </div>
  );
};

export default Reboisement;
