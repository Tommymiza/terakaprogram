import React, { useContext, useEffect } from "react";
import { ActContext } from "../../App";
import "../../styles/partenaire.scss";

const Partenaire = () => {
  const { width } = useContext(ActContext);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  return (
    <div id="partenaire">
      <h1 style={{ fontSize: width > 1000 ? "2rem" : "1.5rem" }}>
        Partenaires
      </h1>
      <div style={{ backgroundColor: "#ebf1f4" }}>
        <p>
          TERAKA travaille directement avec des petits groupes d’agriculteurs
          volontaires qui désirent planter des arbres et qui, en retour,
          perçoivent 70% des profits liés à la vente de crédits carbone ainsi
          que de nombreux co-bénéfices.
        </p>
      </div>
      <div>
        <p>
          TERAKA collabore avec TIST et deux association locales: l’ASA et
          PARTAGE
        </p>
        <p>
          A travers sa collaboration avec l’association ASA, TERAKA soutient la
          réinsertion….
        </p>
        <img
          src="/images/tist.png"
          alt="tist logo"
          onClick={() => {
            window.open("https://program.tist.org", "_blank");
          }}
        />
      </div>
    </div>
  );
};

export default Partenaire;
