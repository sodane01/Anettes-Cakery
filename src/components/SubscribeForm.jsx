import { useState } from "react";

function SubscribeForm({ setPopupMessage }) {
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim().includes("@")) {
      setPopupMessage("Please enter a valid email address.");
      return;
    }

    setPopupMessage("Thank you for subscribing to Cakery news!");
    setEmail("");
  }

  return (
    <section id="subscribe">
      <h2>Join Our Sweet List</h2>

      <p>
        Sign up for bakery news, seasonal treats and special offers.
      </p>

      <form className="subscribe-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <button type="submit" className="order-btn">
          Subscribe
        </button>
      </form>
    </section>
  );
}

export default SubscribeForm;