import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather deafultCity="New York" />
        <footer>
          {" "}
          This project was coded by Camila Mejia and is
          <a
            href="https://github.com/camilamejiax/react-weather-app2"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
