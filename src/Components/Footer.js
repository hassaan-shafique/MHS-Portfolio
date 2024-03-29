import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="mhs">
        MHS <span className="span"> Portfolio </span>
      </h1>
      <div className="links">
        <a href="/"> Home</a>
        <a href="/Introduction"> Introduction</a>
        <a href="/Skills"> Skills</a>
        <a href="/Projects"> Projects</a>
        <a href="/Education"> Education</a>
        <a href="/Certifications"> Certifications</a>
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
      <p className="rights">All rights are reserved@ M Hassaan shafique</p>
    </div>
  );
}

export default Footer
