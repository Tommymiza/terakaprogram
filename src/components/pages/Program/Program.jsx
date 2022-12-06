import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Test from "../Test";
import "../../../styles/program.scss";
import Svg from "../../outils/Svg";
import { ActContext } from "../../../App"

const Program = () => {
  const data = [
    {
      id: "reboisement",
    },
    {
      id: "formation",
    },
    {
      id: "leadership",
    },
    {
      id: "fertilisation",
    },
    {
      id: "monitoring",
    },
    {
      id: "valeurs",
    },
  ];

  const { id } = useParams();
  const {width} = useContext(ActContext)

  const [state, setState] = useState(data.filter((item) => item.id === id)[0]);
  useEffect(() => {
    setState(data.filter((item) => item.id === id)[0]);
    // eslint-disable-next-line
  }, [id]);

  return (
    <div>
      {state ? (
        <div id="program">
          {state.id === "reboisement" && (
            <>
              <div className="title">
                <h3>Modèle de BOISEMENT/REBOISEMENT</h3>
              </div>
              <Svg color={"#fff"} />
              <div className="content">
                <div className={width < 1000 ? "xs" : ""}>
                  <img src="/images/prog1.jpg" alt="programme 1" />
                  <div>
                    <h3>TERAKA est construit sur base du modèle TIST</h3>
                    <p>
                      TERAKA est basé sur le modèle TIST, un programme de
                      boisement/reboisement reconnu internationalement et
                      récompensé par de nombreux prix. Après 20 ans de succès,
                      TIST rassemble aujourd’hui plus de 137 000 fermiers sur 4
                      pays ayant planté plus de 23 000 000 d’arbres, séquestrant
                      plus de 9 000 0000 de tonnes de CO2.
                      <br />
                      <br />
                      TERAKA facilite et encourage de petits groupes
                      d'agriculteurs de subsistance à travailler ensemble pour
                      améliorer leur environnement local et leurs terres en
                      plantant et en entretenant des arbres sur des terres
                      dégradées et/ou inutilisées.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <Test />
      )}
    </div>
  );
};

export default Program;
