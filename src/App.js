
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
import {BrowserRouter,Switch,Routes,Route} from 'react-router-dom'
import MoreProjects from './Components/MoreProjects';
import Services from './Components/Services';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<Introduction />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/moreprojects" element={<MoreProjects />} />
          <Route path="/service" element={<Services />} />
        </Routes>
      </BrowserRouter>

      {/* <Header />
      <Home />
      <Introduction />
      <Skills />
      <Projects />
      <Experience />

      {/* <Blog/> */}
      {/* <Certifications />
      <Contact />
      <Footer />    */}
    </>
  );
}

export default App;
