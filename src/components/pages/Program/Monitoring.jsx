import React, { useContext } from "react";
import { ActContext } from "../../../App";

const Monitoring = () => {
  const { t, width } = useContext(ActContext);
  return (
    <div className="content">
      <h1 style={{ fontSize: width > 1000 ? "2rem" : "1.5rem" }}>
        {t("program.nb.5")}
      </h1>
    </div>
  );
};

export default Monitoring;
