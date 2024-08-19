import "../style/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>DelivEats</h2>
          <p>
            DelivEats is your go-to app for fast, reliable food delivery from
            your favorite restaurants. Savor the flavors of the city from the
            comfort of your home!
          </p>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="rs-register">Register Restaurant</a>
            </li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/DelivEats"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.twitter.com/DelivEats"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/DelivEats"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="contact-info">
            <p>Contact Us: (123) 456-7890</p>
            <p>Fax: (098) 765-4321</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 DelivEats. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
