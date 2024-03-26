import React from 'react'


const Home = () => {
  return (
    <div>
      <h1 className="home-intro">
        Hello, I am Muhammad Hassaan Shafique <br />
        I'm a Software Engineer
      </h1>

      <div className="Contact-icons">
        <a
          href="https://www.facebook.com/hassaan.shafique.9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width={50} height={50} src="/facebook.png" alt="facebook icon" />
        </a>
        <a
          href="https://www.facebook.com/hassaan.shafique.9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width={50}
            height={50}
            src="/instagram.png"
            alt="instagram icon"
          />
        </a>
        <a
          href="https://www.facebook.com/hassaan.shafique.9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width={50} height={50} src="/linkedin.png" alt="facebook icon" />
        </a>
        <a
          href="https://www.facebook.com/hassaan.shafique.9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width={50}
            height={50}
            src="/twitter (1).png"
            alt="facebook icon"
          />
        </a>
      </div>
    </div>
  );
}

export default Home
