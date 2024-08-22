/* eslint-disable react/no-unescaped-entities */
import "../style/RSRegisterPage.css";

import RSNavbar from "../components/RSNavbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import RSRegisterAndLogin from "../components/RSRegisterAndLogin";
import growth from "../../assets/undraw_Growth_analytics_re_pyxf.png";
import moreOrders from "../../assets/undraw_Booking_re_gw4j.png";
import delivery from "../../assets/undraw_Deliveries_2r4y.png";

function RSRegisterPage() {
  const { toggleRegisterOrLoginRestaurant, setIsToRegisterRestaurant, setToggleRegisterOrLoginRestaurant } =
    useContext(DataContext);
  return (
    <>
      <RSNavbar />

      {toggleRegisterOrLoginRestaurant ? (
        <RSRegisterAndLogin />
      ) : (
        <>
          <section className="rs-section-register">
            <h1>Reach more customers and grow your business with DelivEats</h1>
            <p>Partner with DelivEats to create more sales</p>
            <button
              className="register-button"
              onClick={() => {
                setIsToRegisterRestaurant(true);
                setToggleRegisterOrLoginRestaurant(true);
              }}
            >
              Register
            </button>
          </section>

          <section className="rs-section-partner">
            <h2>Why partner with us? </h2>
            <div className="rs-section-container">
              <div className="rs-section-card">
                <div className="image-container">
                  <img src={growth} alt="" />
                </div>
                <h3>Grow with DelivEats</h3>
                <p>Unlock new growth opportunities with DelivEats – where your restaurant's success is our mission.</p>
              </div>
              <div className="rs-section-card">
                <div className="image-container">
                  <img src={moreOrders} alt="" />
                </div>
                <h3>Get more orders</h3>
                <p>More visibility means more orders – partner with DelivEats today and keep your kitchen busy.</p>
              </div>
              <div className="rs-section-card">
                <div className="image-container">
                  <img src={delivery} alt="" />
                </div>
                <h3>Deliver to more customers</h3>
                <p>
                  Reach customers far and wide with DelivEats – delivering your delicious meals to every corner of the
                  city.
                </p>
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </>
  );
}

export default RSRegisterPage;
