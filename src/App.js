import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/outils/Navbar";
import Home from "./components/pages/Home"
import IndexProg from "./components/pages/Program";
import IndexEng from "./components/pages/Engage";
import IndexCert from "./components/pages/Certificat";
import Program from "./components/pages/Program/Program";
import Engage from "./components/pages/Engage/Engage";
import Certificat from "./components/pages/Certificat/Certificat";
import Partenaire from "./components/pages/Partenaire"
import Odd from "./components/pages/Odd"
import News from "./components/pages/News"
import Contact from "./components/pages/Contact"
import Test from "./components/pages/Test"
import "./styles/index.scss"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<IndexProg />} />
        <Route path="/program/:id" element={<Program />} />
        <Route path="/partenaire" element={<Partenaire />} />
        <Route path="/certification" element={<IndexCert />} />
        <Route path="/certification/:id" element={<Certificat />} />
        <Route path="/odd" element={<Odd />} />
        <Route path="/engage" element={<IndexEng />} />
        <Route path="/engage/:id" element={<Engage />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
