
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
   const onSubmit = async (event) => {
     event.preventDefault();
     const formData = new FormData(event.target);

     formData.append("access_key", "d6cebf0a-1fe3-48a3-b6c8-5815c098b02b");

     const object = Object.fromEntries(formData);
     const json = JSON.stringify(object);

     const res = await fetch("https://api.web3forms.com/submit", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
       },
       body: json,
     }).then((res) => res.json());

     if (res.success) {
       console.log("Success", res);
     }
   };

 
  return (
    <section id="contact">
      <>
        <h1 className="contact-head"> Contact </h1>
        <div className="formm">
          <form onSubmit={onSubmit}>
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setMessage(e.target.value)}
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

          <div className="message-btn">
            <button type="submit" onClick={handleClick} className="submit-btn">
              Send Message
            </button>
          </div>
        </div>
        
      </>
    </section>
  );
}

export default Contact
