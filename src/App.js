
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Introduction from './Components/Introduction';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Certifications from './Components/Certifications';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Experience from './Components/Experience';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MoreProjects from './Components/MoreProjects';

function App() {
  return (
    <>
    
      <Header />
      <Home />
      <Introduction />
      <Skills />
      <Projects />
      <Experience />

      {/* <Blog/> */}
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
