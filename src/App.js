import './App.css';
import React from "react";
import Top from "./Top"
import Middle from "./Middle"
import Bottom from "./Bottom"
import Contact from "./Contact"
import Skills from "./Skills"

function App() {


  return (
    <div className="App">
  <Top/>
  <Middle/>
  <Skills/>
  <Contact/>
  <Bottom/>
    </div>
  );
}

export default App;
