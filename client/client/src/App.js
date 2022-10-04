import "./App.css";
import Aside from "./components/Aside";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { Resume } from "./components/Resume";
import { Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Impressum } from "./components/Impressum";
import { Projects } from "./components/Projects";
import {Footer} from "./components/Footer";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <div id="firstDiv">
        <ResponsiveAppBar />

        <div id="secondDiv">
          <Container id="aside" component={"aside"} fixed>
            <Aside />
          </Container>

          <Container component={"main"} id="mainContainer">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/impressum" element={<Impressum />} />
            </Routes>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
