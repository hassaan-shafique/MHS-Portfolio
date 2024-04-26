import React from 'react'





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
    <div className="home-main">
      <div className="welcome">
        <h3>Welcome To My Portfolio </h3>
      </div>
      <div>
        <h1 className="home-intro">
          Hello, I am Muhammad Hassaan Shafique <br />
          I'm a Software Engineer
        </h1>
      </div>
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
          <img width={40} height={40} src="/facebook.png" alt="facebook icon" />
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
          <img width={40} height={40} src="/linkedin.png" alt="facebook icon" />
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
          <img width={40} height={40} src="/github.png" alt="facebook icon" />
        </a>
        <a
          href="https://www.facebook.com/hassaan.shafique.9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width={40} height={40} src="/medium.png" alt="facebook icon" />
        </a>
      </div>

      <div className="home-btn">
        <button className="contact" onClick={HandleContact}>
          Contact
        </button>
        <div className="resume">
          <button className="Resume-btn" onClick={redirectToCV}>
            Download CV
            {/* <img src="" alt=''
           ></img> */}
          </button>
        </div>
      </div>

      <div className="Home-image">
        <img
          width={600}
          height={600}
          src="/man-working-on-laptop.svg"
          alt="homeImage"
        />
      </div>
    </div>
  );
}

export default Home
