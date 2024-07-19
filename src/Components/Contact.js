import React from 'react'

import { useState } from 'react';

const Contact = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] =useState ("");

  const handleClick = (e) => {
    e.preventDefault();
    const contactData = {
      name,
      email,
      message,
      
    };
    
    console.log(contactData);
    setName('');
    setEmail('');
    setMessage('');
    

  }

  return (
    <section id="contact">
      <>
        <h1 className="contact-head"> Contact </h1>
        <div className="formm">
          <form>
            {/* <label>Name:</label> */}
            <input
              className="input"
              onChange={(e) => setName(e.target.value)}
             value={name}
              
              type="text"
              placeholder="Your Name "
              required
            />
            {/* <label>Email</label> */}
            <input
              className="input"
              onChange={(e) =>setEmail(e.target.value)}
            value={email}
            
              type="text"
              placeholder="Your Email"
              required
            />
            <br /> <br />
            {/* <label>Message</label> */}
            <br />
            <textarea
              className="input-2"
              onChange={(e) =>setMessage(e.target.value)}
           value={message}
              
              
              rows="9"
              cols="70"
              placeholder="Enter your message here..."
              required
            />
            <br /> <br />
          </form>
          <br />
        </div>
        <div className="message-btn">
          <button  type= "submit" onClick= {handleClick} className="submit-btn" >
            Send Message
          </button>
        </div>
      </>
    </section>
  );
}

export default Contact
