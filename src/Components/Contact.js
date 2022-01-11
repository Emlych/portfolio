import React, { useRef } from "react";
import "./contact.css";

function Contact() {
  const firstNameRef = useRef(null);
  const lasttNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      firstName: firstNameRef.current.value,
      lasttName: lasttNameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    alert("Following message: " + JSON.stringify(data));
  };

  return (
    <div className="contact" id="contact">
      <h2>Contact</h2>
      <p>
        Have a question or want to work together? Feel free to send me a
        message.
      </p>
      <div className="form-container">
        <label for="lastName">Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          required
          tabIndex={1}
          ref={lasttNameRef}
        />
        <label for="firstName">First Name</label>
        <input
          type="text"
          placeholder="First Name"
          required
          tabIndex={2}
          ref={firstNameRef}
        />
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="exemple@gmail.com"
          required
          tabIndex={3}
          ref={emailRef}
        />
        <label for="message">Message</label>
        <textarea
          placeholder="Start typing..."
          name="message"
          required
          ref={messageRef}
        />
        <button type="submit" className="form-button" onClick={handleSubmit}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Contact;
