import React, { useContext } from "react";
import { ActContext } from "../../../App";

const Formation = () => {
  const { t, width } = useContext(ActContext);
  return (
    <div className="content">
      <h1 style={{ fontSize: width > 1000 ? "2rem" : "1.5rem" }}>
        {t("program.nb.2")}
      </h1>
    </div>
  );
};

export default Formation;
