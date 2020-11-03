import React from "react";

const Contact = () => {
  return (
    <form className="form">
      <h1> contact form </h1>

      <label>Name</label>
      <input placeholder="name" />

      <label>Email</label>
      <input placeholder="name" />

      <label>Message</label>
      <textarea placeholder="message"></textarea>
    </form>
  );
};

export default Contact;
