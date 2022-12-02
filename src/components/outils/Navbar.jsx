import React from "react";
import "../../styles/navbar.scss";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div>
          <img
            src="/images/logo.png"
            alt=""
            style={{
              height: "100px",
              objectFit: "contain",
            }}
          />
        </div>
        <ul id="principale">
          <li>
            <NavLink to={"/"} end>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to={"/program"}>Programme</NavLink> <KeyboardArrowDown />
            <ul>
              <li>
                <NavLink to={"/program/reboisement"}>
                  Modèle de boisement/reboisement
                </NavLink>
              </li>
              <Divider sx={{ width: "100%" }} color="grey"></Divider>
              <li>
                <NavLink to={"/program/formation"}>Formation</NavLink>
              </li>
              <Divider sx={{ width: "100%" }} color="grey"></Divider>
              <li>
                <NavLink to={"/program/leadership"}>
                  Gouvernance et Leadership
                </NavLink>
              </li>
              <Divider sx={{ width: "100%" }} color="grey"></Divider>
              <li>
                <NavLink to={"/program/fertilisation"}>
                  Fertilisation croisée
                </NavLink>
              </li>
              <Divider sx={{ width: "100%" }} color="grey"></Divider>
              <li>
                <NavLink to={"/program/monitoring"}>
                  Monitoring, rapportage et vérification
                </NavLink>
              </li>
              <Divider sx={{ width: "100%" }} color="grey"></Divider>
              <li>
                <NavLink to={"/program/valeurs"}>Valeurs TERAKA</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to={"/partenaire"}>Partenaires</NavLink>
          </li>
          <li>
            <NavLink to={"/certification"}>Certification</NavLink>{" "}
            <KeyboardArrowDown />
            <ul>
              <li>
                <NavLink to={"/certification/vcs"}>VCS</NavLink>
              </li>
              <Divider sx={{ width: "100%" }} color="grey"></Divider>
              <li>
                <NavLink to={"/certification/ccb"}>CCB</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to={"/odd"}>ODD</NavLink>
          </li>
          <li>
            <NavLink to={"/engage"}>S'engager</NavLink> <KeyboardArrowDown />
            <ul>
              <li>
                <NavLink to={"/engage/professionnel"}>
                  Partenariat professionnel
                </NavLink>
              </li>
              <Divider sx={{ width: "100%" }} color="grey"></Divider>
              <li>
                <NavLink to={"/engage/philanthropique"}>
                  Partenariat philanthropique
                </NavLink>
              </li>
              <Divider sx={{ width: "100%" }} color="grey"></Divider>
              <li>
                <NavLink to={"/engage/contribution"}>
                  Contribution individuelle
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to={"/news"}>News</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
