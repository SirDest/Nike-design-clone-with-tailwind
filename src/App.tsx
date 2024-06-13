import React from "react";
import "./App.css";
import Hero from "./components/Landing/Hero";
import Main from "./components/Main/Main";
import Products from "./components/Main/Products";

function App() {
  return (
    <div className='flex flex-col'>
      <Hero />
      <Products />
      <Main />
    </div>
  );
}

export default App;
