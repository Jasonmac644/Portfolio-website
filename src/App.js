import React from "react";
import './App.css'
import AboutMe from "./components/Aboutme";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="app">
        <NavBar />
        <AboutMe />
    </div>
  );
}

export default App;
