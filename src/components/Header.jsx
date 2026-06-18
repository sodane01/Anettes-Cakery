import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header>
      <h1>theCakery</h1>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      <nav className={menuOpen ? "nav-open" : ""}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#shop" onClick={closeMenu}>Shop</a>
        <a href="#custom-cakes" onClick={closeMenu}>Custom Cakes</a>
        <a href="#order-online" onClick={closeMenu}>Order Online</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;