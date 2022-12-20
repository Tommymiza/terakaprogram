import React, { useMemo, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/programme.scss";
import { ActContext } from "../../../App";
import Valeur from "./Valeur";
import { useLocation } from "react-router-dom";
import Reboisement from "./Reboisement";
import Formation from "./Formation";
import Gouvernance from "./Gouvernance";
import Fertilisation from "./Fertilisation";
import Monitoring from "./Monitoring";

const IndexProg = () => {
  const navigate = useNavigate();
  const { width, t } = useContext(ActContext);
  const prog = useMemo(() => {
    return [
      {
        title: t("program.nb.0"),
        content: t("program.valeur.txt").substr(0, 55) + "...",
        img: "prog6.jpg",
        link: "valeurs",
      },
      {
        title: t("program.nb.1"),
        content: t("program.reboisement.content.0").substr(0, 61) + "...",
        img: "prog1.jpg",
        link: "reboisement",
      },
      {
        title: t("program.nb.2"),
        content: "...",
        img: "prog2.jpg",
        link: "formation",
      },
      {
        title: t("program.nb.3"),
        content: t("program.leadership.content.0").substr(0, 65) + "...",
        img: "prog3.jpg",
        link: "leadership",
      },
      {
        title: t("program.nb.4"),
        content: t("program.fertilisation.content.0").substr(0, 63) + "...",
        img: "prog4.jpg",
        link: "fertilisation",
      },
      {
        title: t("program.nb.5"),
        content: "...",
        img: "prog5.jpg",
        link: "monitoring",
      },
    ];
  }, [t]);
  const state = useLocation();
  useEffect(() => {
    if (state.state !== null) {
      window.scrollTo({top: document.getElementById(state.state.param).offsetTop - 60 , behavior: "smooth"})
    } else {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [state]);
  return (
    <>
      <div id="progTitle">
        <h1 style={{ fontSize: width > 1000 ? "2rem" : "1.5rem" }}>
          {t("program.sousTitre")}
        </h1>
      </div>
      <div className="programme" style={{paddingTop: "50px"}}>
        {prog.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.title}</h3>
            <img src={"/images/" + item.img} alt={item.link} loading="lazy" />
            <div>
              <p>{item.content}</p>
              <button
                onClick={() => {
                  navigate("/program", { state: { param: item.link } });
                }}
              >
                {t("more")}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div id="valeurs">
        <Valeur />
      </div>
      <div id="reboisement" style={{ backgroundColor: "#ebf1f4" }}>
        <Reboisement />
      </div>
      <div id="formation">
        <Formation />
      </div>
      <div id="leadership" style={{ backgroundColor: "#ebf1f4" }}>
        <Gouvernance />
      </div>
      <div id="fertilisation">
        <Fertilisation />
      </div>
      <div id="monitoring" style={{ backgroundColor: "#ebf1f4" }}>
        <Monitoring />
      </div>
    </>
  );
};

export default IndexProg;
