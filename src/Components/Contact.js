import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1> Contact </h1>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Your Name " /> <br/>
        <label>Email</label>
        <input type="text" placeholder="Your Email" /><br/>
        <label>Suggestions</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          cols="5"
          placeholder="Enter your message here..."
          required
        />
      </form>
      <button type='submit'> Submit</button>
    </div>
  );
}

export default Contact
