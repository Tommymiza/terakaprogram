import React, { useEffect, useRef, useState, useContext } from "react";
import "../../styles/contact.scss";
import {
  TextField,
  ThemeProvider,
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { theme } from "../outils/theme";
import emailjs from "@emailjs/browser";
import { LoadingButton } from "@mui/lab";
import { ActContext } from "../../App";

const Contact = () => {
  const { t } = useContext(ActContext);
  const [loading, setLoading] = useState(false);
  const [dialog, setDialog] = useState("");
  const form = useRef();
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_h10iqrm",
        "template_wetucyu",
        form.current,
        "HD9xs_a5O8rm-EC-4"
      )
      .then((result) => {
        form.current.nom.value = "";
        form.current.email.value = "";
        form.current.message.value = "";
        setLoading(false);
        setDialog("success");
      })
      .catch((err) => {
        setLoading(false);
        setDialog(err);
      });
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  return (
    <div id="contact">
      <h1>{t("navbar.7")}</h1>
      <ThemeProvider theme={theme}>
        <form id="formContact" ref={form} onSubmit={handleSubmit}>
          <TextField
            label={t("contact.0")}
            required
            sx={{
              width: "70%",
              minWidth: "300px",
              fontFamily: "var(--fontText)",
            }}
            name="nom"
            InputLabelProps={{
              style: {
                fontSize: "17px",
                fontFamily: "var(--fontText)",
              },
            }}
            inputProps={{
              style: {
                fontSize: "17px",
                fontFamily: "var(--fontText)",
              },
            }}
          />
          <TextField
            label={t("contact.1")}
            type="email"
            required
            sx={{
              width: "70%",
              minWidth: "300px",
              fontFamily: "var(--fontText)",
            }}
            name="email"
            InputLabelProps={{
              style: {
                fontSize: "17px",
                fontFamily: "var(--fontText)",
              },
            }}
            inputProps={{
              style: {
                fontSize: "17px",
                fontFamily: "var(--fontText)",
              },
            }}
          />
          <TextField
            label={t("contact.2")}
            multiline
            maxRows={5}
            required
            name="message"
            sx={{
              width: "70%",
              minWidth: "300px",
            }}
            InputLabelProps={{
              style: {
                fontSize: "17px",
                fontFamily: "var(--fontText)",
              },
            }}
            inputProps={{
              style: {
                fontSize: "17px",
                fontFamily: "var(--fontText)",
                height: "150px",
              },
            }}
          />
          <LoadingButton
            type="submit"
            sx={{
              background: "var(--active)",
              fontFamily: "Open Sans",
              textTransform: "none",
              fontWeight: "bolder",
              color: "white",
              padding: "10px 15px",
              borderRadius: "7px",
              "&:hover": {
                background: "var(--theme)",
              },
            }}
            loading={loading}
          >
            {t("contact.3")}
          </LoadingButton>
        </form>
      </ThemeProvider>
      <Dialog open={dialog !== ""}>
        <DialogTitle sx={{ margin: 0, padding: 0 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "calc(100% - 20px)",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              fontFamily: "SF",
              margin: 0,
            }}
          >
            <h3 style={{ margin: 0 }}>Alert:</h3>
            <IconButton onClick={() => setDialog("")}>
              <Close />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>{dialog}</DialogContent>
      </Dialog>
    </div>
  );
};

export default Contact;
