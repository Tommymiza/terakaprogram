import React, { useContext } from "react";
import { ActContext } from "../../../App";

const Formation = () => {
  const { t } = useContext(ActContext);
  return (
    <div className="content">
      <h2>{t("program.nb.2")}</h2>
    </div>
  );
};

export default Formation;
