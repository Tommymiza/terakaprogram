import React, { useMemo, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/programme.scss";
import { ActContext } from "../../../App"

const IndexProg = () => {
  const navigate = useNavigate();
  const {width} = useContext(ActContext)
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
  return (
    <>
      <div id="progTitle">
        <h1 style={{fontSize: width > 1000 ? "2rem": "1.5rem"}}>TERAKA est un programme certifié de reboisement communautaire et de développement durable</h1>
      </div>
      <div id="programme">
        {prog.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.title}</h3>
            <img src={"/images/" + item.img} alt={item.link} loading="lazy" />
            <div>
              <p>{item.content}</p>
              <button
                onClick={() => {
                  navigate("/program/" + item.link);
                }}
              >
                En savoir plus
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IndexProg;
