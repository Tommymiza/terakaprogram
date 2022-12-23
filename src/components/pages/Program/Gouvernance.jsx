import React, { useContext } from "react";
import { ActContext } from "../../../App";

const Gouvernance = () => {
  const { t, width } = useContext(ActContext);
  return (
    <div className="content">
      <h1 style={{ fontSize: width > 1000 ? "2rem" : "1.5rem" }}>
        {t("program.nb.3")}
      </h1>
      <div>
        <div>
          <div className="textCard">
            <p>{t("program.leadership.content.0")}</p>
          </div>
        </div>
        <img src="/images/IMG_9961.jpeg" alt="Gouvernance et leadership" />
      </div>
      <div className="reverse">
        <div>
          <h3 style={{ marginBottom: "10px" }}>
            {t("program.leadership.span.0")}
          </h3>
          <div className="textCard">
            <p>{t("program.leadership.content.1")}</p>
            <br />
          </div>
          <div className="textCard">
            <p>{t("program.leadership.content.2")}</p>
          </div>
        </div>
        <img src="/images/IMG_9837.jpeg" alt="Gouvernance et leadership" />
      </div>
    </div>
  );
};

export default Gouvernance;
