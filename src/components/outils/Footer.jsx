import React from "react";
import "../../styles/footer.scss";
import { FacebookRounded, LinkedIn } from "@mui/icons-material";

const Footer = ({t}) => {
  return (
    <div id="footer">
      <div>
        <img
          src="/images/logo-footer.png"
          alt="logo"
          style={{ width: "200px", objectFit: "contain", marginBottom: "20px" }}
        />
        <div>
          <h3>{t("navbar.7")}</h3>
          <h5>TERAKA MADAGASCAR</h5>
          <p>212 route Circulaire Ambanidia</p>
          <p>Antananarivo 101</p>
          <p>MADAGASCAR</p>
          <p>+261 (0) 32 15 951 92</p>
          <p>+261 (0) 34 88 14 236</p>
          <a href="mailto:info@TERAKA.org">info@TERAKA.org</a>
          <h5>iTERAKA France</h5>
          <p>21 rue du Col de Dyane</p>
          <p>78180 Montigny le Bretonneux</p>
          <p>FRANCE</p>
          <p>+ 33(0) 6 44 95 15 54</p>
        </div>
        <div>
          <h3>{t("footer.0")}</h3>
          <FacebookRounded
            sx={{
              marginRight: 2,
              marginTop: 2,
              fontSize: "50px",
              transition: "0.2s",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.1)",
                color: "white",
              },
            }}
          />
          <LinkedIn
            sx={{
              marginTop: 2,
              fontSize: "50px",
              transition: "0.2s",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.1)",
                color: "white",
              },
            }}
          />
        </div>
      </div>
      <div>
        <p>{t("navbar.2")}</p>
        <p>{t("navbar.6")}</p>
      </div>
      <div style={{ background: "black" }}>
        <p style={{ color: "#ccc" }}>&copy; teraka.org 2022, photos reserved</p>
      </div>
    </div>
  );
};

export default Footer;
