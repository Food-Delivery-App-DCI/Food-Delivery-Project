import { useContext, useEffect, useState } from "react";
import { BasketContext } from "../contexts/BasketContext";
import DeliveryTracker from "./DeliveryTracker";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { DataContext } from "../contexts/DataContext";

import "../style/SuccessPage.css";
// import { useNavigate } from "react-router-dom";

function SuccessPage() {
  const {
    deliveryOption,
    totalSum,
    totalSumPurchasedItems,
    basket,
    purchasedItems,
    // setPurchasedItems,
    completePurchase,
    setOrderId,
    orderSent,
    setOrderSent,
  } = useContext(BasketContext);
  const { sessionId, loggedInUser } = useContext(DataContext);
  const [restaurantName, setRestaurantName] = useState(JSON.parse(localStorage.getItem("restaurantName") || ""));
  const [restaurantId, setRestaurantId] = useState(JSON.parse(localStorage.getItem("restaurantId") || ""));
  const [restaurantAddress, setRestaurantAddress] = useState(JSON.parse(localStorage.getItem("restaurantAddress")));
  const [newOrderId, setNewOrderId] = useState("");
  // const navigate = useNavigate();

  useEffect(() => {
    const getRestaurantName = JSON.parse(localStorage.getItem("restaurantName"));
    const getRestaurantId = JSON.parse(localStorage.getItem("restaurantId"));
    const getRestaurantAddress = JSON.parse(localStorage.getItem("restaurantAddress"));
    // const getPurchasedItems = JSON.parse(localStorage.getItem("purchasedItems"));

    if (getRestaurantName) {
      setRestaurantName(getRestaurantName);
    }

    if (getRestaurantId) {
      setRestaurantId(getRestaurantId);
    }

    if (getRestaurantAddress) {
      setRestaurantAddress(getRestaurantAddress);
    }

    // if (getPurchasedItems) {
    //   setPurchasedItems(getPurchasedItems);
    // }
  }, []);

  useEffect(() => {
    async function setOrder() {
      const settings = {
        body: JSON.stringify({
          sessionId,
          basket,
          totalSum,
          deliveryOption,
          restaurantName,
          restaurantAddress,
          restaurantId,
        }),
        headers: {
          "Content-Type": "application/JSON",
        },
        method: "POST",
      };

      try {
        const response = await fetch(`${import.meta.env.VITE_API}/create-checkout-session/setOrder`, settings);

        if (response.ok) {
          const { id } = await response.json();
          setNewOrderId(id);

          if (loggedInUser) {
            const settings = {
              body: JSON.stringify({ orderId: id }),
              method: "PATCH",
              headers: {
                "Content-Type": "application/JSON",
              },
            };
            const response = await fetch(
              `${import.meta.env.VITE_API}/create-checkout-session/setOrder/${loggedInUser.id}`,
              settings
            );
            if (response.ok) {
              await response.json();
            } else {
              const { error } = await response.json();
              throw new Error(error.message);
            }
          }
        } else {
          const { error } = await response.json();
          throw new Error(error.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    const savedOrderSent = JSON.parse(localStorage.getItem("orderSent"));
    if (savedOrderSent) {
      setOrderSent(true);
    } else {
      setOrder();
    }

    // if (!orderSent) {
    //   setOrder();
    // }
  }, [sessionId, orderSent]);

  useEffect(() => {
    async function sendOrderToRestaurant() {
      const settings = {
        body: JSON.stringify({ sessionId, newOrderId }),
        headers: {
          "Content-Type": "application/JSON",
        },
        method: "POST",
      };

      try {
        const response = await fetch(
          `${import.meta.env.VITE_API}/create-checkout-session/send-to-restaurant/${restaurantId}`,
          settings
        );

        if (response.ok) {
          const { message, orderId } = await response.json();
          setOrderId(orderId);
          console.log(message);

          // Update state and localStorage after successful order
          setOrderSent(true);
          localStorage.setItem("orderSent", JSON.stringify(true));
        } else {
          const { error } = await response.json();
          throw new Error(error.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    if (newOrderId && !orderSent) {
      sendOrderToRestaurant();
    }
  }, [basket, deliveryOption, restaurantId, sessionId, totalSum, newOrderId]);

  useEffect(() => {
    completePurchase();
  }, []);

  return (
    <>
      <Navbar />
      <div className="successPage">
        <div className="success-card-container">
          <div className="success-card">
            <h1 className="success-title">Thank you! 🎉</h1>
            <h1 className="success-title">Order Successful.</h1>
            <p className="success-message">
              Your order will be {deliveryOption === "delivery" ? "delivered" : "ready for pickup"} soon.
            </p>
          </div>
          <div className="success-card-order-details">
            <h2>Order Details</h2>
            {/* <small>order: {newOrderId}</small> */}

            {purchasedItems.map((item) => (
              <p key={item._id}>
                {item.quantity} x {item.name}
              </p>
            ))}
            <p className="success-total">Total: €{totalSumPurchasedItems.toFixed(2)}</p>
          </div>
        </div>
        <div className="success-trackerContainer">
          <DeliveryTracker />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SuccessPage;
