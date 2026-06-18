function ProductCard({ product, addToOrder }) {
  return (
    <article className="product-card">
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      ) : (
        <div className="product-emoji">{product.emoji}</div>
      )}

      <h3>{product.name}</h3>

      <p className="price">{product.price}</p>

      <p>{product.description}</p>

      <button className="order-btn" onClick={() => addToOrder(product)}>
        Add to Order
      </button>
    </article>
  );
}

export default ProductCard;