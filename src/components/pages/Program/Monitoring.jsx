import React, { useContext } from "react";
import { ActContext } from "../../../App";

const Monitoring = () => {
  const { t } = useContext(ActContext);
  return (
    <div className="content">
      <h2>{t("program.nb.5")}</h2>
    </div>
  );
};

export default Monitoring;
