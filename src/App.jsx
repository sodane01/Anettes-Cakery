import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";
import CustomCakeGrid from "./components/CustomCakeGrid";
import OrderOnline from "./components/OrderOnline";
import ContactForm from "./components/ContactForm";
import Popup from "./components/Popup";
import Footer from "./components/Footer";

import { products, customCakes } from "./data/products";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  function addToOrder(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(indexToRemove) {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  }

  function placeOrder() {
    if (cart.length === 0) {
      alert("Your order is empty.");
      return;
    }

    setCart([]);
    setShowPopup(true);
  }

  function closePopup() {
    setShowPopup(false);
  }

  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />

        <section id="shop">
          <h2>Shop</h2>

          <div className="filter-buttons">
            {["all", "cupcakes", "cookies", "pies", "brownies"].map(
              (category) => (
                <button
                  key={category}
                  className={
                    selectedCategory === category
                      ? "filter-btn active"
                      : "filter-btn"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === "all"
                    ? "All"
                    : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              )
            )}
          </div>

          <div className="shop-layout">
            <ProductGrid
              products={filteredProducts}
              addToOrder={addToOrder}
            />

            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              placeOrder={placeOrder}
            />
          </div>
        </section>

        <CustomCakeGrid cakes={customCakes} addToOrder={addToOrder} />

        <OrderOnline />

        <ContactForm />
      </main>

      <Footer />

      {showPopup && <Popup closePopup={closePopup} />}
    </>
  );
}

export default App;