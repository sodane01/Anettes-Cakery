function Footer() {
  return (
    <footer>
      <h3>theCakery</h3>

      <p>Handcrafted treats for every occasion.</p>

      <div className="footer-contact">
        <p> 123 Sweet Street, Cupcake City</p>
        <p> (555) 123-CAKE</p>
        <p> hello@cakery.com</p>
      </div>

      <div className="footer-socials">
        <a href="https://facebook.com/cakery" target="_blank">
           Facebook
        </a>

        <a href="https://instagram.com/cakery" target="_blank">
           Instagram
        </a>
      </div>
      <p className="copyright">
        © 2026 Cakery. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;