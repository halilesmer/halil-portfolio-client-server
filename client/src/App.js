import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { About } from "./components/About.js";
import { Contact } from "./components/Contact.js";
import { Impressum } from "./components/Impressum.js";
import { Projects } from "./components/Projects.js";
import {Footer} from "./components/Footer.js";
import Aside from "./components/Aside.js";
import ResponsiveAppBar from "./components/ResponsiveAppBar.js";
import { Resume } from "./components/Resume.js";
import  {InsertImageForm}  from "./components/insertImage/InsertImageForm.js";

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
              <Route path="/insert" element={<InsertImageForm />} />
            </Routes>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
