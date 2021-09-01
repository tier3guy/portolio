import About from "./Components/About";
import Education from "./Components/Education";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects"
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div>
        <Hero/>
        <About/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
