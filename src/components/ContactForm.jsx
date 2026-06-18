import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim().length < 2) {
      setFormMessage("Name must be at least 2 characters.");
      setMessageColor("red");
      return;
    }

    if (!email.trim().includes("@")) {
      setFormMessage("Please enter a valid email address.");
      setMessageColor("red");
      return;
    }

    if (message.trim().length < 10) {
      setFormMessage("Message must be at least 10 characters.");
      setMessageColor("red");
      return;
    }

    setFormMessage("Thank you! Your message has been sent.");
    setMessageColor("green");

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section id="contact">
      <h2>Contact Us</h2>

      <form id="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>

        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="email">Email</label>

        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="message">Message</label>

        <textarea
          id="message"
          rows="5"
          placeholder="Write your message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />

        <button type="submit" className="order-btn">
          Send Message
        </button>
      </form>

      <p id="form-message" style={{ color: messageColor }}>
        {formMessage}
      </p>
    </section>
  );
}

export default ContactForm;