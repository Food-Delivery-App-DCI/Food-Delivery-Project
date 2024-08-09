/* eslint-disable react/no-unescaped-entities */
import "../style/RSRegisterPage.css";

import RSNavbar from "../components/RSNavbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import RSRegisterAndLogin from "../components/RSRegisterAndLogin";

function RSRegisterPage() {
  const { toggleRegisterOrLoginRestaurant } = useContext(DataContext);
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
            <button>Register</button>
          </section>

          <section className="rs-section-partner">
            <h2>Why partner with us? </h2>
            <div>
              <div>
                <img
                  src="https://img.freepik.com/free-vector/profit-growth-strategy-idea-business-development-solution_335657-3160.jpg?t=st=1721644680~exp=1721648280~hmac=b43fef2c7278504fe9c128bcb4c6108a3f94c1afdaca832ace7a19b684d0ddad&w=1480"
                  alt=""
                  width={400}
                />
                <h3>Grow with DelivEats</h3>
                <p>Unlock new growth opportunities with DelivEats – where your restaurant's success is our mission.</p>
              </div>
              <div>
                <img
                  src="https://img.freepik.com/free-vector/signing-contract-official-document-agreement-deal-commitment-businessmen-cartoon-characters-shaking-hands-legal-contract-with-signature-concept-illustration_335657-2040.jpg?t=st=1721645087~exp=1721648687~hmac=a191bb1c4081c1721227bee8ec8d97e0a4619a84af9faead9234f90d2a2a5fdc&w=996"
                  alt=""
                  width={400}
                />
                <h3>Get more orders</h3>
                <p>More visibility means more orders – partner with DelivEats today and keep your kitchen busy.</p>
              </div>
              <div>
                <img
                  src="https://img.freepik.com/free-vector/online-chatting-app-cartoon-characters-communicating-internet-gadget-addiction-blogging-posting-modern-digital-technologies-design-element_335657-2655.jpg?w=996&t=st=1721644574~exp=1721645174~hmac=f42f68fcf357bee58015a34b22853ccb3cb930e9df444a5678ebdab5c587e495"
                  alt=""
                  width={400}
                />
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
