import React, { useContext } from "react";
import { ActContext } from "../../../App";

export default function Vcs() {
  const { t } = useContext(ActContext);
  return (
    <div className="col-content">
      <img src="/images/vcs.png" alt="vcs" />
      <p>
        <span>{t("certification.span.0")}</span>
        {" " + t("certification.content.0")}
      </p>
    </div>
  );
}
