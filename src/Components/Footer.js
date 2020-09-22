import "../CSS/Footer.css";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li>
          Feel free to visit{" "}
          <a
            href="https://mechamic38.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            my own Portfolio
          </a>
          , and have a look to some of my works!
        </li>
      </ul>

      <ul className="copyright">
        <li>
          &copy; All credit goes to Pluda Michael (aka{" "}
          <a
            href="https://github.com/MechaMic38"
            target="_blank"
            rel="noopener noreferrer"
          >
            MechaMic_38
          </a>
          ) - Copyright 2020 Pluda Michael
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
