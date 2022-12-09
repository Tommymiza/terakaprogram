import React, { useEffect } from "react";
import "../../styles/odd.scss";
import "../../styles/programme.scss";
import "../../styles/certificat.scss";

const Odd = () => {
  const odds = [
    {
      id: "1",
      text: "texte 1",
    },
    {
      id: "2",
      text: "texte 2",
    },
    {
      id: "3",
      text: "texte 3",
    },
    {
      id: "4",
      text: "texte 4",
    },
    {
      id: "5",
      text: "texte 5",
    },
    {
      id: "6",
      text: "texte 6",
    },
    {
      id: "7",
      text: "texte 7",
    },
    {
      id: "8",
      text: "texte 8",
    },
    {
      id: "9",
      text: "texte 9",
    },
    {
      id: "10",
      text: "texte 10",
    },
    {
      id: "11",
      text: "texte 11",
    },
    {
      id: "12",
      text: "texte 12",
    },
    {
      id: "13",
      text: "texte 13",
    },
    {
      id: "14",
      text: "texte 14",
    },
    {
      id: "15",
      text: "texte 15",
    },
    {
      id: "16",
      text: "texte 16",
    },
    {
      id: "17",
      text: "texte 17",
    },
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  return (
    <>
      <div id="odd">
        <h1>Objectifs de Développement Durable (ODD)</h1>
        <p>
          Le programme TERAKA offre de nombreux bénéfices dans une gamme de
          domaines variés. Ces avantages sont créés par une grande diversité de
          personnes dans différents climats et conditions. Étant donné que le
          programme TERAKA est volontaire, les avantages recueillis par chaque
          membre de TERAKA dépendent de sa volonté et de son implication
          individuelles.
        </p>
      </div>
      <div
        className="col-content"
        style={{ backgroundColor: "#ebf1f4", paddingTop: "50px" }}
      >
        <h2 style={{ fontSize: "25px" }}>
          TERAKA impacte les 17 ODD de l’ONU !
        </h2>
        <p>
          Même si nous ne prétendons pas atteindre pleinement les 17 objectifs
          de Développement durable des Nations Unies (ODD), nous y contribuons.
          Grâce à leur travail, les agriculteurs TERAKA ont un effet positif sur
          l’ensemble des ODD. Déplacez-vous sur les onglets ci- dessous pour
          voir comment le programme TERAKA répond aux ODD.
        </p>
        <img src="/images/oddTitle.png" alt="odd title" />
        <div className="programme">
          {odds.map((item) => (
            <div className="card" key={item.id}>
              <img
                src={"/images/odd" + item.id + ".png"}
                alt={"odd " + item.id}
              />
              <div>
                <p>{item.text}</p>
                <button>En savoir plus...</button>
              </div>
            </div>
          ))}
          <div className="card">
            <img src={"/images/odd18.png"} alt={"odd 18"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Odd;
