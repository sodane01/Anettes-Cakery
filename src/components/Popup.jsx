function Popup({ closePopup }) {
  return (
    <div id="order-popup" className="popup">
      <div className="popup-content">
        <h2>Thank you for your order!</h2>

        <p>Your sweet treats are being prepared.</p>

        <button className="order-btn" onClick={closePopup}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Popup;