import React, { useEffect, useState, useContext, useRef } from "react";
import "../../styles/home.scss";
import { useNavigate } from "react-router-dom";
import { ActContext } from "../../App";

const Home = () => {
  const navigate = useNavigate();
  const [surface, setSurface] = useState(0);
  const [people, setPeople] = useState(0);
  const [espece, setEspece] = useState(0);
  const [tree, setTree] = useState(0);
  const { width, t } = useContext(ActContext);
  const video = useRef(null);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    video.current?.play().catch((err) => {
      console.log("cannot play video", err);
    });
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
        <video
          onCanPlay={() => video.current?.play()}
          playsInline
          muted
          alt="background"
          loop={true}
          src={"/images/fond.mp4"}
          ref={video}
        />
        <div id="contentTitle">
          <h1 style={{ fontSize: width > 1000 ? "5rem" : "3rem" }}>Teraka</h1>
          <p>
            {t("home.sousTitre")}
          </p>
          <div>
            <button
              className="nav-btn"
              onClick={() => navigate("/program")}
              style={{ fontSize: "20px", width: "140px" }}
            >
              {t("navbar.1")}
            </button>
            <button
              className="nav-btn"
              onClick={() => navigate("/engage")}
              style={{ fontSize: "20px", width: "140px" }}
            >
              {t("navbar.5")}
            </button>
          </div>
        </div>
        <div id="homeNb">
          <div>
            <h1>{surface}</h1>
            <h3>{t("home.nb.0")}</h3>
          </div>
          <div>
            <h1>{people}</h1>
            <h3>{t("home.nb.1")}</h3>
          </div>
          <div>
            <h1>{espece}</h1>
            <h3>{t("home.nb.2")}</h3>
          </div>
          <div>
            <h1>{tree} Million</h1>
            <h3>{t("home.nb.3")}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
