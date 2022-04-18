import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      
        <Weather defaultCity="New York" />
        <footer>
          {" "}
          This project was coded by Camila Mejia and is
          <a
            href="https://github.com/camilamejiax/react-weather-app2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
  );
}

export default App;
