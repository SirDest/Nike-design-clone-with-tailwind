import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Landing/Hero";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className='flex flex-col'>
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
