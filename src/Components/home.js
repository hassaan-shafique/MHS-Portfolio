import React from 'react'
import Contact from './Contact.js'
import { Link } from 'react-router-dom';





const Home = () => {

  const HandleContact = () => {
    const contactSection =document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
const redirectToCV = () => {
  
  window.location.href = "https://www.google.com/";
};
 



  return (
    <>
      <section className="home-content">
        <div className="hire">
          <div className="hire-div">
            <Link
              to="https://www.fiverr.com/hassaanshafique/convert-figma-ui-design-to-reactjs-and-nextjs-responsive"
              target="_blank"
            >
              <img
                width={50}
                height={35}
                src="/fiverr-1.svg"
                alt="fiver logo"
              />
              Hire me on Fiver
            </Link>
          </div>
          <div className="hire-div">
            <Link to="https://www.upwork.com/" target="_blank">
              <img
                width={50}
                height={35}
                src="/upwork-icon.svg"
                alt="Upwork logo"
              />
              Hire me on Upwork
            </Link>
          </div>
        </div>

        {/* <div className="home-main"> */}

        <section className="welcome-div">
          <div className="text-div">
           
              <h3 className='h-welcome'>Welcome To My Portfolio </h3>
            

            <h1 className="home-intro">
              Hello, I am Muhammad Hassaan Shafique <br />
              I'm a Software Engineer
            </h1>
            <div class="Contact-icons">
              <a
                href="https://www.facebook.com/hassaan.shafique.9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img width={40} height={40} src="/gmail.png" alt="gmail icon" />
              </a>
              <a
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
              </a>
              <a
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
              </a>
              <a
                href="https://www.facebook.com/hassaan.shafique.9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width={40}
                  height={40}
                  src="/linkedin.png"
                  alt="facebook icon"
                />
              </a>
              <a
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
              </a>
              <a
                href="https://www.facebook.com/hassaan.shafique.9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width={40}
                  height={40}
                  src="/github.png"
                  alt="facebook icon"
                />
              </a>
              <a
                href="https://www.facebook.com/hassaan.shafique.9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width={40}
                  height={40}
                  src="/medium.png"
                  alt="facebook icon"
                />
              </a>
            </div>


            <div className="home-btns">
              <button className="contact-btn" onClick={HandleContact}>
                Contact
              </button>
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
    </>
  );
}

export default Home
