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
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { width, t } = useContext(ActContext);
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(null);
  function handleClose() {
    setOpen(false);
    setState(null);
  }
  function handleClick(e) {
    if (state === e) {
      setState(null);
      return;
    }
    setState(e);
  }
  useEffect(() => {
    if (window.scrollY <= 50) {
      if (hover) {
        document.querySelector("header").style.background = "white";
      } else {
        document.querySelector("header").style.background =
          "rgba(255,255,255,0.6)";
      }
    }
  }, [hover]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50 && document.querySelector("header")) {
        document.querySelector("header").style.background = "white";
      } else {
        document.querySelector("header").style.background =
          "rgba(255,255,255,0.6)";
      }
    });
    window.addEventListener("resize", () => {
      handleClose();
    });
  }, []);
  return (
    <>
      <header
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <nav>
          <div style={{ cursor: "pointer" }}>
            <img
              src="/images/logo.png"
              alt=""
              onClick={() => navigate("/")}
              style={{
                height: "100px",
                objectFit: "contain",
              }}
            />
          </div>
          <div>

          </div>
          {width > 1280 ? (
            <ul id="principale">
              <li>
                <NavLink to={"/"} end>
                  {t("navbar.0")}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/program"}>{t("navbar.1")}</NavLink>{" "}
                <KeyboardArrowDown />
                <ul style={{ width: "230px" }}>
                  <li>
                    <p
                      onClick={() =>
                        navigate("/program", { state: { param: "valeurs" } })
                      }
                    >
                      Valeurs TERAKA
                    </p>
                  </li>
                  <Divider sx={{ width: "100%" }} color="grey"></Divider>
                  <li>
                    <p
                      onClick={() =>
                        navigate("/program", {
                          state: { param: "reboisement" },
                        })
                      }
                    >
                      Modèle de boisement/reboisement
                    </p>
                  </li>
                  <Divider sx={{ width: "100%" }} color="grey"></Divider>
                  <li>
                    <p
                      onClick={() =>
                        navigate("/program", { state: { param: "formation" } })
                      }
                    >
                      Formation
                    </p>
                  </li>
                  <Divider sx={{ width: "100%" }} color="grey"></Divider>
                  <li>
                    <p
                      onClick={() =>
                        navigate("/program", { state: { param: "leadership" } })
                      }
                    >
                      Gouvernance et Leadership
                    </p>
                  </li>
                  <Divider sx={{ width: "100%" }} color="grey"></Divider>
                  <li>
                    <p
                      onClick={() =>
                        navigate("/program", {
                          state: { param: "fertilisation" },
                        })
                      }
                    >
                      Fertilisation croisée
                    </p>
                  </li>
                  <Divider sx={{ width: "100%" }} color="grey"></Divider>
                  <li>
                    <p
                      onClick={() =>
                        navigate("/program", { state: { param: "monitoring" } })
                      }
                    >
                      Monitoring, rapportage et vérification
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to={"/partenaire"}>{t("navbar.2")}</NavLink>
              </li>
              <li>
                <NavLink to={"/certification"}>{t("navbar.3")}</NavLink>{" "}
                <KeyboardArrowDown />
                <ul>
                  <li>
                    <p
                      onClick={() =>
                        navigate("/certification", { state: { param: "vcs" } })
                      }
                    >
                      VCS
                    </p>
                  </li>
                  <Divider sx={{ width: "100%" }} color="grey"></Divider>
                  <li>
                    <p
                      onClick={() =>
                        navigate("/certification", { state: { param: "ccb" } })
                      }
                    >
                      CCB
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to={"/odd"}>{t("navbar.4")}</NavLink>
              </li>
              <li>
                <NavLink to={"/engage"}>{t("navbar.5")}</NavLink>{" "}
                <KeyboardArrowDown />
                <ul style={{ width: "230px" }}>
                  <li>
                    <p
                      onClick={() =>
                        navigate("/engage", {
                          state: { param: "professionnel" },
                        })
                      }
                    >
                      Partenariat professionnel
                    </p>
                  </li>
                  <Divider sx={{ width: "100%" }} color="grey"></Divider>
                  <li>
                    <p
                      onClick={() =>
                        navigate("/engage", {
                          state: { param: "philanthropique" },
                        })
                      }
                    >
                      Partenariat philanthropique
                    </p>
                  </li>
                  <Divider sx={{ width: "100%" }} color="grey"></Divider>
                  <li>
                    <p
                      onClick={() =>
                        navigate("/engage", {
                          state: { param: "contribution" },
                        })
                      }
                    >
                      Contribution individuelle
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to={"/news"}>{t("navbar.6")}</NavLink>
              </li>
              <li>
                <button
                  className="nav-btn"
                  onClick={() => navigate("/contact")}
                  style={{ fontSize: "14px" }}
                >
                  {t("navbar.7")}
                </button>
              </li>
            </ul>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <IconButton size="medium" onClick={() => setOpen(true)}>
                <MenuRounded htmlColor="#133A32" fontSize="large" />
              </IconButton>
              <button
                className="nav-btn"
                onClick={() => navigate("/contact")}
                style={{ fontSize: width < 400 ? "12px" : "14px" }}
              >
                {t("navbar.7")}
              </button>
              <Drawer
                open={open}
                anchor={"right"}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    width: "calc(100% - 40px)",
                    maxWidth: "340px",
                    background: "#fff",
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
                      <CloseRounded htmlColor="#133A32" fontSize="large" />
                    </IconButton>
                  </li>
                  <li>
                    <NavLink to={"/"} end onClick={handleClose}>
                    {t("navbar.0")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/program"} onClick={handleClose}>
                    {t("navbar.1")}
                    </NavLink>{" "}
                    <KeyboardArrowDown
                      onClick={() => handleClick(0)}
                      htmlColor="#133A32"
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          color: "var(--active)",
                        },
                      }}
                    />
                  </li>
                  {state === 0 && (
                    <li>
                      <ul>
                        <li>
                          <p
                            onClick={() => {
                              handleClose();
                              navigate("/program", {
                                state: { param: "valeurs" },
                              });
                            }}
                          >
                            Valeurs TERAKA
                          </p>
                        </li>
                        <Divider sx={{ width: "100%" }} color="grey"></Divider>
                        <li>
                          <p
                            onClick={() => {
                              handleClose();
                              navigate("/program", {
                                state: { param: "reboisement" },
                              });
                            }}
                          >
                            Modèle de boisement/reboisement
                          </p>
                        </li>
                        <Divider sx={{ width: "100%" }} color="grey"></Divider>
                        <li>
                          <p
                            onClick={() => {
                              handleClose();
                              navigate("/program", {
                                state: { param: "formation" },
                              });
                            }}
                          >
                            Formation
                          </p>
                        </li>
                        <Divider sx={{ width: "100%" }} color="grey"></Divider>
                        <li>
                          <p
                            onClick={() => {
                              handleClose();
                              navigate("/program", {
                                state: { param: "leadership" },
                              });
                            }}
                          >
                            Gouvernance et Leadership
                          </p>
                        </li>
                        <Divider sx={{ width: "100%" }} color="grey"></Divider>
                        <li>
                          <p
                            onClick={() => {
                              handleClose();
                              navigate("/program", {
                                state: { param: "fertilisation" },
                              });
                            }}
                          >
                            Fertilisation croisée
                          </p>
                        </li>
                        <Divider sx={{ width: "100%" }} color="grey"></Divider>
                        <li>
                          <p
                            onClick={() => {
                              handleClose();
                              navigate("/program", {
                                state: { param: "monitoring" },
                              });
                            }}
                          >
                            Monitoring, rapportage et vérification
                          </p>
                        </li>
                      </ul>
                    </li>
                  )}
                  <li>
                    <NavLink to={"/partenaire"} onClick={handleClose}>
                    {t("navbar.2")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/certification"} onClick={handleClose}>
                    {t("navbar.3")}
                    </NavLink>{" "}
                    <KeyboardArrowDown
                      onClick={() => handleClick(1)}
                      htmlColor="#133A32"
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          color: "var(--active)",
                        },
                      }}
                    />
                  </li>
                  {state === 1 && (
                    <li>
                      <ul>
                        <li>
                          <p
                            onClick={() => {
                              handleClose();
                              navigate("/certification", {
                                state: { param: "vcs" },
                              });
                            }}
                          >
                            VCS
                          </p>
                        </li>
                        <Divider sx={{ width: "100%" }} color="grey"></Divider>
                        <li>
                          <p
                            onClick={() => {
                              handleClose();
                              navigate("/certification", {
                                state: { param: "ccb" },
                              });
                            }}
                          >
                            CCB
                          </p>
                        </li>
                      </ul>
                    </li>
                  )}
                  <li>
                    <NavLink to={"/odd"} onClick={handleClose}>
                    {t("navbar.4")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/engage"} onClick={handleClose}>
                    {t("navbar.5")}
                    </NavLink>{" "}
                    <KeyboardArrowDown
                      onClick={() => handleClick(2)}
                      htmlColor="#133A32"
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          color: "var(--active)",
                        },
                      }}
                    />
                  </li>
                  {state === 2 && (
                    <li>
                      <ul>
                        <li>
                          <p
                            onClick={() => {
                              handleClose();
                              navigate("/engage", {
                                state: { param: "professionnel" },
                              });
                            }}
                          >
                            Partenariat professionnel
                          </p>
                        </li>
                        <Divider sx={{ width: "100%" }} color="grey"></Divider>
                        <li>
                          <p
                            onClick={() => {
                              handleClose();
                              navigate("/engage", {
                                state: { param: "philanthropique" },
                              });
                            }}
                          >
                            Partenariat philanthropique
                          </p>
                        </li>
                        <Divider sx={{ width: "100%" }} color="grey"></Divider>
                        <li>
                          <p
                            onClick={() => {
                              handleClose();
                              navigate("/engage", {
                                state: { param: "contribution" },
                              });
                            }}
                          >
                            Contribution individuelle
                          </p>
                        </li>
                      </ul>
                    </li>
                  )}
                  <li>
                    <NavLink to={"/news"} onClick={handleClose}>
                    {t("navbar.6")}
                    </NavLink>
                  </li>
                </ul>
              </Drawer>
            </div>
          )}
        </nav>
      </header>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0px 20px",
          gap: "20px",
          flexWrap: "nowrap",
          background: "transparent",
          position: "fixed",
          top: "140px",
          zIndex: "2",
        }}
      >
        <button
          className="nav-btn"
          style={{ fontSize: "12px", width: "170px" }}
        >
          {t("navbar.8")}
        </button>
        <button
          className="nav-btn"
          style={{ fontSize: "12px", width: "170px" }}
        >
          {t("navbar.9")}
        </button>
      </div>
    </>
  );
};

export default Navbar;
