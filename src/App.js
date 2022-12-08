import React, { useEffect, createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/outils/Navbar";
import Home from "./components/pages/Home";
import IndexProg from "./components/pages/Program/index";
import IndexEng from "./components/pages/Engage/index";
import IndexCert from "./components/pages/Certificat/index";
import Partenaire from "./components/pages/Partenaire";
import Odd from "./components/pages/Odd";
import News from "./components/pages/News";
import Contact from "./components/pages/Contact";
import Test from "./components/pages/Test";
import "./styles/index.scss";
import Footer from "./components/outils/Footer";

export const ActContext = createContext();

function App() {
  const [width, setWidth] = useState(document.body.offsetWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(document.body.offsetWidth);
    });
  }, []);
  return (
    <BrowserRouter>
      <ActContext.Provider value={{width}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<IndexProg />} />
          <Route path="/partenaire" element={<Partenaire />} />
          <Route path="/certification" element={<IndexCert />} />
          <Route path="/odd" element={<Odd />} />
          <Route path="/engage" element={<IndexEng />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Test />} />
        </Routes>
      </ActContext.Provider>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
