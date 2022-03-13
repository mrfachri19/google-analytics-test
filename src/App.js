import "./App.css";
import React, { useEffect } from "react";
import ReactGa from "react-ga";

function App() {
  useEffect(() => {
    ReactGa.initialize('G-MJZND62ME7');
    // repeat view page
    ReactGa.pageview("/");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World !</h1>
      </header>
    </div>
  );
}

export default App;
