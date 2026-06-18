import ProductCard from "./ProductCard";

function ProductGrid({ products, addToOrder }) {
  return (
    <div id="product-list" className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.name}
          product={product}
          addToOrder={addToOrder}
        />
      ))}
    </div>
  );
}

export default ProductGrid;