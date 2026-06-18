import "./App.css";
import { useState } from "react";

import SubscribeForm from "./components/SubscribeForm";
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
  const [popupMessage, setPopupMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

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
      setPopupMessage("Your cart is empty.");
      return;
    }

    setCart([]);
    setPopupMessage(
      "Thank you for your order! Your sweet treats are being prepared."
    );
  }

  function closePopup() {
    setPopupMessage("");
  }

  function closeImageModal() {
    setSelectedImage(null);
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

        <CustomCakeGrid
          cakes={customCakes}
          addToOrder={addToOrder}
          setSelectedImage={setSelectedImage}
        />

        <OrderOnline />

        <ContactForm />
      </main>

      <SubscribeForm setPopupMessage={setPopupMessage} />

      <Footer />

      {popupMessage && (
        <Popup
          message={popupMessage}
          closePopup={closePopup}
        />
      )}

      {selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="image-modal-content">
            <img src={selectedImage} alt="Cake preview" />
          </div>
        </div>
      )}
    </>
  );
}

export default App;