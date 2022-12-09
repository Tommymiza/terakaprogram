import React, { useContext } from "react";
import { ActContext } from "../../App";
import "../../styles/partenaire.scss";

const Partenaire = () => {
  const { width } = useContext(ActContext);
  return (
    <div id="partenaire">
      <h1 style={{ fontSize: width > 1000 ? "2rem" : "1.5rem" }}>
        Partenaires
      </h1>
      <div style={{backgroundColor: "#ebf1f4"}}>
        <p>
          TERAKA travaille directement avec des petits groupes d’agriculteurs
          volontaires qui désirent planter des arbres et qui, en retour,
          perçoivent 70% des profits liés à la vente de crédits carbone ainsi
          que de nombreux co-bénéfices.
        </p>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
};

export default Partenaire;
