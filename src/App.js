import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>What's the weather in...</h1>
        </header>
        <Weather defaultCity="Caracas" />

        <footer>
          Coded by Nai Antillano and is{" "}
          <a
            href="https://github.com/naianti/react-w-app
"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on Netlify
        </footer>
      </div>
    </div>
  );
}
