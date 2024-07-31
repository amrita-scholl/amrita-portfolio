import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React, { Route, Routes } from "react-router-dom";
import "./common/Commoncss.css";
import Learn from "./common/Learn";
import Nav from "./common/Nav";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import Services from "./Pages/Services";
import Work from "./Pages/Work";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Nav />
      <Learn />
      {/* <Home/>
      <About />
      <Services/>s
      <Education/>
      <Work/>
      <Contact/> */}
      <Routes>
        <Route exact="true" path="/amrita-portfolio" element={<Home />}></Route>
        <Route path="/myportfolio" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/education" element={<Education />}></Route>
        {/* <Route path="/projects" element={<Jsprojects />}></Route> */}
        {/* <Route path="/portfolio" element={<Projects />}></Route> */}
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;