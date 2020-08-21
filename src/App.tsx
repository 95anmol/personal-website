import React from 'react';
import logo from './logo.svg';
import main from './imagesFolder/main1.jpg'
// import fb from './imagesFolder/fb.png'
// import linkedin from './imagesFolder/linkedIn.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={main} className="App-logo" alt="image" />
        <div className = "Name" style={{top: "15%"}}>
            <h2>I'm Anmol</h2>
        </div>
          <div className="typewriter Name" style={{top: "25%"}}>
              <h4>A tech enthusiast</h4>
          </div>
      </header>
        <footer>
            <div className="ICanHelp">
               <h2> I can help. </h2>
            </div>
            <div className="AvailWork">
                I’m currently available for work.
            </div>
            <div className="contactMe">
                If you have a project that you want to get started, think you need my help or just fancy saying hey, then lets get in touch.
            </div>
            <div style={{margin: "1%"}}>
                <a
                className="App-link"
                href="https://www.facebook.com/anmol.goel.58/"
                target="_blank"
                rel="noopener noreferrer"
                style={{margin: "5vh"}}
            >
                    <FontAwesomeIcon icon={faFacebookF} size="3x"/>
            </a>
                <a
                    className="App-link"
                    href="https://www.linkedin.com/in/anmolgoel"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedinIn} size="3x"/>

                </a>
            </div>
        </footer>
    </div>

  );
}

export default App;
