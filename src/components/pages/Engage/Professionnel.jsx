import React, { useContext } from "react";
import { ActContext } from "../../../App";

const Professionnel = () => {
  const { t } = useContext(ActContext);
  return (
    <div className="engage">
      <h1>{t("engage.nb.0")}</h1>
      <h3>{t("engage.qst")}</h3>
      <p>{t("engage.content.0")}</p>
      <div>
        <div className="item-table">
          <h3>{t("engage.span.0")}</h3>
          <p>{t("engage.content.1")}</p>
        </div>
        <div className="item-table">
          <h3>{t("engage.span.1")}</h3>
          <p>{t("engage.content.2")}</p>
        </div>
        <div className="item-table">
          <h3>{t("engage.span.2")}</h3>
          <p>{t("engage.content.3")}</p>
        </div>
      </div>
    </div>
  );
};

export default Professionnel;
