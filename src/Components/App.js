
import './App.css';
import Header from './Header';
import Home from './Home';
import Introduction from './Introduction';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Certifications from './Certifications';
import Contact from './Contact';
import Footer from './Footer';
import Experience from './Experience';
import Blog from './Blog';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Introduction />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      {/* <Blog/> */}
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
