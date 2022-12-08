import React from "react";

const Valeur = () => {
  return (
    <div className="content">
      <h2>Valeurs TERAKA</h2>
      <div>
        <div>
          <p>
            Tous les membres de TERAKA, où qu'ils habitent, suivent les valeurs
            TIST. Ces valeurs sont essentielles au succès du programme et elles
            sont au cœur de qui nous sommes en tant que communauté. Ces valeurs
            sont :
          </p>
          <ul>
            <li>Nous sommes honnêtes</li>
            <li>Nous sommes précis</li>
            <li>Nous sommes transparents</li>
            <li>Nous sommes mutuellement responsables</li>
            <li>Nous sommes au service les uns des autres</li>
            <li>Nous sommes bénévoles</li>
            <li>Nous créons de GRANDS résultats avec des petits budgets</li>
          </ul>
        </div>
        <img src="/images/IMG_0232.jpg" alt="valeur" />
      </div>
      <div className="reverse">
        <div>
          <h3 style={{marginBottom: "10px"}}>Comment sommes-nous différents?</h3>
          <div className="textCard">
            <h4>Nous sommes bénévoles</h4>
            <p>
              TERAKA est composé d'agriculteurs qui se portent volontaires pour
              rejoindre la communauté TERAKA. Ils aiment se former, recueillir
              des connaissances agricoles et aider l'environnement.
            </p>
          </div>
          <div className="textCard">
            <h4>Nous développons et utilisons les meilleures pratiques</h4>
            <p>
              TERAKA est composé d'agriculteurs qui se portent volontaires pour
              rejoindre la communauté TERAKA. Ils aiment se former, recueillir
              des connaissances agricoles et aider l'environnement.Lorsque nous
              travaillons ensemble, nous pouvons trouver des moyens d'améliorer
              nos fermes qui conviennent à notre région. Nous pouvons également
              partager nos meilleures idées avec d'autres agriculteurs proches
              ou éloignés.
            </p>
          </div>
          <div className="textCard">
            <h4>Nous faisons le travail nous-mêmes en petits groupes</h4>
            <p>
              TERAKA est composé de petits groupes. Nous travaillons ensemble
              pour développer les meilleures pratiques et améliorer nos fermes
              et notre environnement.
            </p>
          </div>
          <div className="textCard">
            <h4>Nous utilisons notre tête et nos mains</h4>
            <p>
              Nous travaillons dur avec notre tête et nos mains. Notre
              engagement envers les valeurs TERAKA signifie que nous faisons les
              choses de la bonne manière, pas de la manière la plus simple.
            </p>
          </div>
        </div>
        <img src="/images/IMG_0233.jpg" alt="valeur" />
      </div>
    </div>
  );
};

export default Valeur;
