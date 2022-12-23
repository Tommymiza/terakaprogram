import React, { useEffect, useContext } from "react";
import "../../styles/odd.scss";
import "../../styles/programme.scss";
import "../../styles/certificat.scss";
import { ActContext } from "../../App";

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
  const { t } = useContext(ActContext);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  return (
    <>
      <div id="odd">
        <h1>{t("odd.titre")}</h1>
        <p>{t("odd.sousTitre")}</p>
      </div>
      <div
        className="col-content"
        style={{ backgroundColor: "#ebf1f4", paddingTop: "50px" }}
      >
        <h1>{t("odd.span.0")}</h1>
        <p>{t("odd.content.0")}</p>
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
                <button>{t("more")}</button>
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
