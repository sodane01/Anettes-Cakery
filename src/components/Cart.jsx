function Cart({ cart, removeFromCart, placeOrder }) {
  const total = cart.reduce((sum, item) => {
    return sum + parseFloat(item.price.replace("$", ""));
  }, 0);

  return (
    <aside id="cart">
      <h2>Your Order</h2>

      <ul id="cart-items">
        {cart.map((item, index) => (
          <li key={`${item.name}-${index}`}>
            <span>
              {item.name} - {item.price}
            </span>

            <button
              className="remove-btn"
              onClick={() => removeFromCart(index)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      <p id="cart-total">Total: ${total.toFixed(2)}</p>

      <button id="place-order-btn" className="order-btn" onClick={placeOrder}>
        Place Order
      </button>
    </aside>
  );
}

export default Cart;