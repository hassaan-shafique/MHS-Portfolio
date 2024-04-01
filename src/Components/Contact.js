import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1> Contact </h1>
      <div className="formm">
        <form>
          {/* <label>Name:</label> */}
          <input
            className="input"
            id="name"
            name="name"
            type="text"
            placeholder="Your Name "
            required
          />
          {/* <label>Email</label> */}
          <input
            className="input"
            id="email"
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
            id="message"
            name="message"
            rows="9"
            cols="70"
            placeholder="Enter your message here..."
            required
          />
          <br /> <br />
          <button className="submit-btn" type="submit">
            Send Message
          </button>
        </form>
        <br />
      </div>
    </div>
  );
}

export default Contact
