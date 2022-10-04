import React from "react";
import Header from "./Header";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/**header */}
      <Header />
      {/* home -> body */}
      <Home />
    </div>
  );
}

export default App;
