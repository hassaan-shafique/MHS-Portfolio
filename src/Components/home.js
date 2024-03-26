import React from 'react'


const Home = () => {
  return (
    <div>
    <h2 className='welcome'> Welcome To My Portfolio</h2>
      <h1 className="home-intro">
        Hello, I am Muhammad Hassaan Shafique <br />
        I'm a Software Engineer
      </h1>

      <div>
        <button className="Resume-btn">
          Download CV
          {/* <img src="" alt=''
           ></img> */}
        </button>
        <a
          href="https://www.facebook.com/hassaan.shafique.9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width={50} height={50} src="/gmail.png" alt="gmail icon" />
        </a>
      </div>

      <div class="Contact-icons">
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
        <a
          href="https://www.facebook.com/hassaan.shafique.9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width={50} height={50} src="/github.png" alt="facebook icon" />
        </a>
        <a
          href="https://www.facebook.com/hassaan.shafique.9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width={50} height={50} src="/medium.png" alt="facebook icon" />
        </a>
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
