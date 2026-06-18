
function CustomCakeGrid({ cakes, addToOrder, setSelectedImage }) {
  return (
    <section id="custom-cakes">
      <h2>Custom Cakes</h2>

      <div className="cake-grid">
        {cakes.map((cake) => (
          <article className="product-card" key={cake.name}>
            {cake.image && (
              <img
                src={cake.image}
                alt={cake.name}
                className="product-image clickable-image"
                onClick={() => setSelectedImage(cake.image)}
              />
            )}

            <h3>{cake.name}</h3>

            <p className="price">{cake.price}</p>

            <p>{cake.description}</p>

            <button
              className="order-btn"
              onClick={() => addToOrder(cake)}
            >
              Add to Order
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CustomCakeGrid;