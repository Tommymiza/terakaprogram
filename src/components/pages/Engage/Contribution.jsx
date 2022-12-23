import React, { useContext } from "react";
import { ActContext } from "../../../App";

const Contribution = () => {
  const { t } = useContext(ActContext);
  return (
    <div className="engage">
      <h1>{t("engage.nb.2")}</h1>
    </div>
  );
};

export default Contribution;
