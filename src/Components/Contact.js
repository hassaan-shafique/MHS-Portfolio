import React from 'react'

import { useState } from 'react';






const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] =useState ("");

  const contactD


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
              name="name"
              type="text"
              placeholder="Your Name "
              required
            />
            {/* <label>Email</label> */}
            <input
              className="input"
              onChange={(e) =>setEmail(e.target.value)}
            value={email}
              name="email"
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
              name="message"
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
          <button className="submit-btn" type="submit">
            Send Message
          </button>
        </div>
      </>
    </section>
  );
}

export default Contact
