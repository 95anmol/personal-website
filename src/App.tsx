import React from "react";
import main from "./imagesFolder/main1.jpg";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={main} className="App-logo" alt="image" />
        <div className="Name" style={{ top: "15%" }}>
          <h2>I'm Anmol</h2>
        </div>
        <div className="typewriter Name" style={{ top: "28%" }}>
          <h4>A tech enthusiast</h4>
        </div>
      </header>
      <footer>
        <div className="ICanHelp">
          <h2> I can help. </h2>
        </div>
        <div className="AvailWork">I’m currently available for work.</div>
        <div className="contactMe">
          If you have a project that you want to get started, think you need my
          help or just fancy saying hey, then lets get in touch.
        </div>
        <div style={{ margin: "1%" }}>
          <a
            href="https://www.facebook.com/anmol.goel.58/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/anmolgoel"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "5vh" }}
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <a
            href="mailto:95.anmol@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailIcon fontSize="large" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
