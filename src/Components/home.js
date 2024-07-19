import React from 'react'
import Contact from './Contact.js'
import { Link } from 'react-router-dom';
import Introduction from './Introduction.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Experience from './Experience.js';
import Certifications from './Certifications.js';
import Footer from './Footer.js';
import Header from './Header.js';
import Blog from './Blog.js';






const Home = () => {




  const HandleContact = () => {
    const contactSection =document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
const redirectToCV = () => {
  window.open("/Muhammad_Hassaan_Shafique-CV.pdf", '_blank');

};
 



  return (
    <>
      <Header />
      <section className="home-content">
        <div className="hire">
          <Link
            className="hire-div"
            to="https://www.fiverr.com/hassaanshafique/convert-figma-ui-design-to-reactjs-and-nextjs-responsive"
            target="_blank"
          >
            <img width={50} height={35} src="/fiverr-1.svg" alt="fiver logo" />
            Hire me on Fiver
          </Link>

          <Link
            className="hire-div"
            to="https://www.upwork.com/freelancers/~017aa4bff4acd7fe70"
            target="_blank"
          >
            <img
              width={50}
              height={35}
              src="/upwork-icon.svg"
              alt="Upwork logo"
            />
            Hire me on Upwork
          </Link>
        </div>

        {/* <div className="home-main"> */}

        <section className="welcome-div">
          <div className="text-div">
            <h3 className="h-welcome">Welcome To My Portfolio </h3>

            <h1 className="home-intro">
              Hello, I am Muhammad Hassaan Shafique <br />
              I'm a Software Engineer
            </h1>
            <div class="Contact-icons">
              <Link
                to="https://mail.google.com/mail/u/0/#inbox?compose=new"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img width={40} height={40} src="/gmail.png" alt="gmail icon" />
              </Link>
              {/* <a
                href="https://www.facebook.com/hassaan.shafique.9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width={40}
                  height={40}
                  src="/facebook.png"
                  alt="facebook icon"
                />
              </a> */}
              {/* <a
                href="https://www.facebook.com/hassaan.shafique.9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width={40}
                  height={40}
                  src="/instagram.png"
                  alt="instagram icon"
                />
              </a> */}
              <Link
                to="https://www.linkedin.com/in/m-hassaan-shafique-558479212/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width={40}
                  height={40}
                  src="/linkedin.png"
                  alt="facebook icon"
                />
              </Link>
              {/* <a
                href="https://www.facebook.com/hassaan.shafique.9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width={40}
                  height={40}
                  src="/twitter (1).png"
                  alt="facebook icon"
                />
              </a> */}
              <Link
                to="https://github.com/hassaan-shafique"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width={40}
                  height={40}
                  src="/github-1.svg"
                  alt="github icon"
                />
              </Link>
              <Link
                to="https://medium.com/@hassaanshafique398"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width={40}
                  height={40}
                  src="/medium-2.svg"
                  alt="medium icon"
                />
              </Link>
            </div>

            <div className="home-btns">
              <Link className="link-div" to="/service">
                <button className="contact-btn">Request a Service</button>
              </Link>

              <button className="Resume-btn" onClick={redirectToCV}>
                Download CV
              </button>
            </div>
          </div>

          <div>
            <img
              className="home-image"
              width={500}
              height={500}
              src="/home-1.png"
              alt="homeImage"
            />
          </div>
        </section>

        {/* home div */}

        {/* </div> */}
      </section>
      <Introduction />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Blog/>
      <Contact />
      <Footer />
    </>
  );
}

export default Home
