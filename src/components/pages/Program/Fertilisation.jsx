import React, { useContext } from "react";
import { ActContext } from "../../../App";

const Fertilisation = () => {
  const { t, width } = useContext(ActContext);
  return (
    <div className="content">
      <h1 style={{ fontSize: width > 1000 ? "2rem" : "1.5rem" }}>
        {t("program.nb.4")}
      </h1>
      <div>
        <div>
          <h3 style={{ marginBottom: "10px" }}>
            {t("program.fertilisation.span.0")}
          </h3>
          <div className="textCard">
            <p>{t("program.fertilisation.content.0")}</p>
          </div>
        </div>
        <img src="/images/IMG_0449.jpg" alt="Fertilisation" />
      </div>
    </div>
  );
};

export default Fertilisation;
