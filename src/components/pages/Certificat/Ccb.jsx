import React, { useContext } from "react";
import { ActContext } from "../../../App";

export default function Ccb() {
  const { t } = useContext(ActContext);
  return (
    <div className="col-content">
      <img src="/images/ccb.png" alt="ccb" />
      <p>
        <span>{t("certification.span.1")}</span> {t("certification.content.1")}
      </p>
    </div>
  );
}
