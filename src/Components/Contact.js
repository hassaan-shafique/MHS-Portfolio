import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1> Contact </h1>
      <div className='formm'>
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Your Name " /> 
          <label>Email</label>
          <input type="text" placeholder="Your Email" />
          <br />
          <label>Message</label>

          <textarea
            id="message"
            name="message"
            rows="4"
            cols="5"
            placeholder="Enter your message here..."
            required
          />
        </form>
        <button  className="submit-btn"type="submit"> Send Message</button>
      </div>
    </div>
  );
}

export default Contact
