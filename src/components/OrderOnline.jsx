function OrderOnline() {
  return (
    <section id="order-online">
      <h2>Order Online</h2>

      <div className="order-grid">
        <article className="product-card">
          <div className="product-emoji">🛍️</div>

          <h3>Pickup</h3>

          <p>Order online and collect your treats in store.</p>
        </article>

        <article className="product-card">
          <div className="product-emoji">🚚</div>

          <h3>Delivery</h3>

          <p>Get your favorite baked goods delivered to your door.</p>
        </article>
      </div>
    </section>
  );
}

export default OrderOnline;