
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Introduction from './Components/Introduction';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Certifications from './Components/Certifications';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Experience from './Components/Experience';
import Blog from './Components/Blog';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Introduction />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Blog/>
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
