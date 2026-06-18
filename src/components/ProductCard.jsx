function ProductCard({ product, addToOrder, setSelectedImage }) {
  return (
    <article className="product-card">
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          onClick={() => {
            console.log("Clicked:", product.image);

            if (setSelectedImage) {
              setSelectedImage(product.image);
            }
          }}
        />
      ) : (
        <div className="product-emoji">
          {product.emoji}
        </div>
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