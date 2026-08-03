
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">
          <h2>FreshCart</h2>
          <p>
            Fresh groceries delivered to your doorstep with quality,
            affordability, and fast delivery.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Categories</li>
            <li>Offers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Categories</h3>

          <ul>
            <li>Fresh Fruits</li>
            <li>Vegetables</li>
            <li>Dairy Products</li>
            <li>Bakery</li>
            <li>Beverages</li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Contact</h3>

          <p>📍 Pune, Maharashtra</p>
          <p>📞 +91 98765 43210</p>
          <p>✉ support@freshcart.com</p>

          <div className="social-icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
          </div>

        </div>

      </div>

      <hr />

      <div className="copyright">
        © 2026 FreshCart. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;