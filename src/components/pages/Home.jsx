import React, { useEffect, useState } from "react";
import "../../styles/home.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [surface, setSurface] = useState(0);
  const [people, setPeople] = useState(0);
  const [espece, setEspece] = useState(0);
  const [tree, setTree] = useState(0);
  useEffect(() => {
    var initialS = 0;
    var initialP = 0;
    var initialE = 0;
    var initialT = 0;
    const interval = setInterval(() => {
      initialS = initialS + 50;
      initialP = initialP + 13;
      initialE = initialE + 1;
      initialT = initialT + 1;
      setSurface(initialS < 31300 ? initialS : 31300);
      setPeople(initialP < 8500 ? initialP : 8500);
      setEspece(initialE < 34 ? initialE : 34);
      setTree(initialT < 10 ? initialT : 10);
      if (
        initialS > 31300 &&
        initialP > 8500 &&
        initialE > 34 &&
        initialT > 10
      ) {
        clearInterval(interval);
      }
    }, 1);
  }, []);
  return (
    <section>
      <div id="homeTitle">
        <div id="contentTitle">
          <div></div>
          <div>
            <h1>
              TERAKA est un programme certifié de boisement/reboisement mené par
              des petits groupes d’agriculteurs à Madagascar
            </h1>
            <p>
              Basé sur un modèle primé internationalement, TERAKA contribue aux
              Objectifs de Développement Durable (ODD) des Nations Unies
            </p>
            <div>
              <button onClick={() => navigate("/program")}>Programme</button>
              <button onClick={() => navigate("/engage")}>S'engager</button>
            </div>
          </div>
        </div>
        <div id="homeNb">
          <div>
            <h1>{surface}</h1>
            <h3>hectares</h3>
          </div>
          <div>
            <h1>{people}</h1>
            <h3>bénéficiaires</h3>
          </div>
          <div>
            <h1>{espece}</h1>
            <h3>espèces</h3>
          </div>
          <div>
            <h1>{tree} Million</h1>
            <h3>arbres plantés</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
