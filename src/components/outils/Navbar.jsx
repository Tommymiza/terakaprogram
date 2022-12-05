import React, { useEffect, useContext, useState } from "react";
import { ActContext } from "../../App";
import "../../styles/navbar.scss";
import {
  KeyboardArrowDown,
  MenuRounded,
  CloseRounded,
} from "@mui/icons-material";
import { Divider, IconButton, Drawer } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { width } = useContext(ActContext);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(null);
  const handleClose = () => {
    setOpen(false);
    setState(null);
  };
  function handleClick(e) {
    if (state === e) {
      setState(null);
      return;
    }
    setState(e);
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50 && document.querySelector("header")) {
        document.querySelector("header").style.transform = "translateY(-200px)";
      } else {
        document.querySelector("header").style.transform = "translateY(0)";
      }
    });
    window.addEventListener("resize", () => {
      handleClose();
    });
  }, []);
  return (
    <>
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
          {width > 1050 ? (
            <ul id="principale">
              <li>
                <NavLink to={"/"} end>
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to={"/program"}>Programme</NavLink>{" "}
                <KeyboardArrowDown />
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
                <NavLink to={"/engage"}>S'engager</NavLink>{" "}
                <KeyboardArrowDown />
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
          ) : (
            <div>
              <IconButton size="medium" onClick={() => setOpen(true)}>
                <MenuRounded htmlColor="#fff" fontSize="large" />
              </IconButton>
              <Drawer
                open={open}
                anchor={"right"}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    width: "calc(100% - 40px)",
                    maxWidth: "340px",
                    background: "#162024",
                    padding: "20px",
                    height: "calc(100% - 40px)",
                  },
                }}
              >
                <ul id="smPrincipale">
                  <li
                    style={{
                      justifyContent: "flex-end",
                    }}
                  >
                    <IconButton onClick={handleClose}>
                      <CloseRounded htmlColor="#fff" fontSize="large" />
                    </IconButton>
                  </li>
                  <li>
                    <NavLink to={"/"} end onClick={handleClose}>
                      Accueil
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/program"} onClick={handleClose}>
                      Programme
                    </NavLink>{" "}
                    <KeyboardArrowDown
                      onClick={() => handleClick(0)}
                      htmlColor="#fff"
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          color: "var(--theme)",
                        },
                      }}
                    />
                  </li>
                  {state === 0 && (
                    <li>
                      <ul>
                        <li>
                          <NavLink
                            to={"/program/reboisement"}
                            onClick={handleClose}
                          >
                            Modèle de boisement/reboisement
                          </NavLink>
                        </li>
                        <Divider sx={{ width: "100%" }} color="grey"></Divider>
                        <li>
                          <NavLink
                            to={"/program/formation"}
                            onClick={handleClose}
                          >
                            Formation
                          </NavLink>
                        </li>
                        <Divider sx={{ width: "100%" }} color="grey"></Divider>
                        <li>
                          <NavLink
                            to={"/program/leadership"}
                            onClick={handleClose}
                          >
                            Gouvernance et Leadership
                          </NavLink>
                        </li>
                        <Divider sx={{ width: "100%" }} color="grey"></Divider>
                        <li>
                          <NavLink
                            to={"/program/fertilisation"}
                            onClick={handleClose}
                          >
                            Fertilisation croisée
                          </NavLink>
                        </li>
                        <Divider sx={{ width: "100%" }} color="grey"></Divider>
                        <li>
                          <NavLink
                            to={"/program/monitoring"}
                            onClick={handleClose}
                          >
                            Monitoring, rapportage et vérification
                          </NavLink>
                        </li>
                        <Divider sx={{ width: "100%" }} color="grey"></Divider>
                        <li>
                          <NavLink
                            to={"/program/valeurs"}
                            onClick={handleClose}
                          >
                            Valeurs TERAKA
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  )}
                  <li>
                    <NavLink to={"/partenaire"} onClick={handleClose}>
                      Partenaires
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/certification"} onClick={handleClose}>
                      Certification
                    </NavLink>{" "}
                    <KeyboardArrowDown
                      onClick={() => handleClick(1)}
                      htmlColor="#fff"
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          color: "var(--theme)",
                        },
                      }}
                    />
                  </li>
                  {state === 1 && (
                    <li>
                      <ul>
                        <li>
                          <NavLink
                            to={"/certification/vcs"}
                            onClick={handleClose}
                          >
                            VCS
                          </NavLink>
                        </li>
                        <Divider sx={{ width: "100%" }} color="grey"></Divider>
                        <li>
                          <NavLink
                            to={"/certification/ccb"}
                            onClick={handleClose}
                          >
                            CCB
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  )}
                  <li>
                    <NavLink to={"/odd"} onClick={handleClose}>
                      ODD
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/engage"} onClick={handleClose}>
                      S'engager
                    </NavLink>{" "}
                    <KeyboardArrowDown
                      onClick={() => handleClick(2)}
                      htmlColor="#fff"
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          color: "var(--theme)",
                        },
                      }}
                    />
                  </li>
                  {state === 2 && (
                    <li>
                      <ul>
                        <li>
                          <NavLink
                            to={"/engage/professionnel"}
                            onClick={handleClose}
                          >
                            Partenariat professionnel
                          </NavLink>
                        </li>
                        <Divider sx={{ width: "100%" }} color="grey"></Divider>
                        <li>
                          <NavLink
                            to={"/engage/philanthropique"}
                            onClick={handleClose}
                          >
                            Partenariat philanthropique
                          </NavLink>
                        </li>
                        <Divider sx={{ width: "100%" }} color="grey"></Divider>
                        <li>
                          <NavLink
                            to={"/engage/contribution"}
                            onClick={handleClose}
                          >
                            Contribution individuelle
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  )}
                  <li>
                    <NavLink to={"/news"} onClick={handleClose}>
                      News
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contact"} onClick={handleClose}>
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </Drawer>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
