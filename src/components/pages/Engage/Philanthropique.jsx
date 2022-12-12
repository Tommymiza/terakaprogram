import React, { useContext } from "react";
import { ActContext } from "../../../App";

const Philanthropique = () => {
  const { t } = useContext(ActContext);
  return (
    <div className="engage">
      <h2>{t("engage.nb.1")}</h2>
    </div>
  );
};

export default Philanthropique;
