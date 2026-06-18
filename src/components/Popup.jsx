function Popup({ message, closePopup }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>theCakery</h2>

        <p>{message}</p>

        <button className="order-btn" onClick={closePopup}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Popup;