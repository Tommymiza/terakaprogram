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
  const { width } = useContext(ActContext);
  const prog = useMemo(() => {
    return [
      {
        title: "Valeurs TERAKA",
        content:
          "Tous les membres de TERAKA, où qu'ils habitent, suivent les valeurs TIST. Ces valeurs sont essentielles au succès du programme...",
        img: "prog6.jpg",
        link: "valeurs",
      },
      {
        title: "Modèle de boisement/reboisement",
        content:
          "TERAKA est basé sur le modèle TIST, un programme de boisement/reboisement reconnu internationalement et récompensé...",
        img: "prog1.jpg",
        link: "reboisement",
      },
      {
        title: "Formation",
        content: "...",
        img: "prog2.jpg",
        link: "formation",
      },
      {
        title: "Gouvernance et leadership",
        content:
          "Grâce à l’organisation des petits groupes TERAKA, les participants bénéficient de l’expérience du programme...",
        img: "prog3.jpg",
        link: "leadership",
      },
      {
        title: "Fertilisation croisée",
        content:
          "Les agriculteurs découvrent TERAKA auprès d'autres agriculteurs TERAKA et rejoignent de petits groupes de 6 à 12 personnes...",
        img: "prog4.jpg",
        link: "fertilisation",
      },
      {
        title: "Monitoring, rapportage et vérification",
        content: "...",
        img: "prog5.jpg",
        link: "monitoring",
      },
    ];
  }, []);
  const state = useLocation();
  useEffect(() => {
    if (state.state !== null) {
      document.getElementById(state.state.param)?.scrollIntoView({behavior: "smooth"})
    } else {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [state]);
  return (
    <>
      <div id="progTitle">
        <h1 style={{ fontSize: width > 1000 ? "2rem" : "1.5rem" }}>
          TERAKA est un programme certifié de reboisement communautaire et de
          développement durable
        </h1>
      </div>
      <div className="programme">
        {prog.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.title}</h3>
            <img src={"/images/" + item.img} alt={item.link} loading="lazy" />
            <div>
              <p>{item.content}</p>
              <button
                onClick={() => {
                  navigate("/program", {state: {param: item.link}});
                }}
              >
                En savoir plus
              </button>
            </div>
          </div>
        ))}
      </div>
      <div id="valeurs">
        <Valeur />
      </div>
      <div id="reboisement" style={{backgroundColor: "#ebf1f4"}}>
        <Reboisement />
      </div>
      <div id="formation">
        <Formation />
      </div>
      <div id="leadership" style={{backgroundColor: "#ebf1f4"}}>
        <Gouvernance />
      </div>
      <div id="fertilisation">
        <Fertilisation />
      </div>
      <div id="monitoring" style={{backgroundColor: "#ebf1f4"}}>
        <Monitoring />
      </div>
    </>
  );
};

export default IndexProg;
