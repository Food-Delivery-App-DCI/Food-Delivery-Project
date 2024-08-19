import { useContext } from "react";
import "../style/Footer.css";
import { DataContext } from "../contexts/DataContext";

function Footer() {
  const { loggedInRestaurant } = useContext(DataContext);
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>DelivEats</h2>
          <p>
            DelivEats is your go-to app for fast, reliable food delivery from your favorite restaurants. Savor the
            flavors of the city from the comfort of your home!
          </p>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            {/* <li>
              <a href="#">Menu</a>
            </li> */}
            {/* <li>
              <a href="#">Orders</a>
            </li> */}
            {/* <li>
              <a href="#">Contact</a>
            </li> */}
            <li>
              {/* check this link */}
              <a href={loggedInRestaurant ? "/rs-home/orders-active" : "/rs-register"}>Register Restaurant</a>
            </li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
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
