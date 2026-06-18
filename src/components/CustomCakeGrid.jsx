import ProductCard from "./ProductCard";

function CustomCakeGrid({ cakes, addToOrder }) {
  return (
    <section id="custom-cakes">
      <h2>Custom Cakes</h2>

      <div id="custom-cake-list" className="cake-grid">
        {cakes.map((cake) => (
          <ProductCard
            key={cake.name}
            product={cake}
            addToOrder={addToOrder}
          />
        ))}
      </div>
    </section>
  );
}

export default CustomCakeGrid;