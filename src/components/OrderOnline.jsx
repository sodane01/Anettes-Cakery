function OrderOnline() {
  return (
    <section id="order-online">
      <h2>Order Online</h2>

      <p className="section-intro">
        Choose the sweetest way to get your treats.
      </p>

      <div className="order-grid">
        <article className="order-card">
          <div className="order-icon">🧁</div>

          <h3>Pickup</h3>

          <p>
            Order ahead and collect your freshly baked treats in store.
          </p>

          <span className="order-note">Ready when you arrive</span>
        </article>

        <article className="order-card">
          <div className="order-icon">🚚</div>

          <h3>Local Delivery</h3>

          <p>
            Sweet treats delivered carefully to your door.
          </p>

          <span className="order-note">Perfect for cozy days</span>
        </article>

        <article className="order-card">
          <div className="order-icon">🎉</div>

          <h3>Events</h3>

          <p>
            Cupcakes, cakes and dessert tables for celebrations.
          </p>

          <span className="order-note">Birthdays, weddings & more</span>
        </article>
      </div>
    </section>
  );
}

export default OrderOnline;