import React from "react";
import "./App.css";
import Hero from "./components/Landing/Hero";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className='flex flex-col'>
      <Hero />
      <Main />
    </div>
  );
}

export default App;
