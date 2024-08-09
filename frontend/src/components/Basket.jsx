/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { BasketContext } from "../contexts/BasketContext";
import { loadStripe } from "@stripe/stripe-js";
import { DataContext } from "../contexts/DataContext";

import "../style/Basket.css";

function Basket({ id }) {
  const {
    basket,
    deliveryOption,
    setDeliveryOption,
    removeItemFromBasket,
    increaseItemQuantity,
    decreaseItemQuantity,
    totalSum,
  } = useContext(BasketContext);
  const { restaurant } = useContext(DataContext);
  // const { setSessionId } = useContext(DataContext);

  const restaurantAddress = `${restaurant?.basicInfo.address.street}, ${restaurant?.basicInfo.address.postalCode}, ${restaurant?.basicInfo.address.city}`;

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("deliveryOption", deliveryOption);
    localStorage.setItem("restaurantName", JSON.stringify(restaurant?.basicInfo.businessName));
    localStorage.setItem("restaurantId", JSON.stringify(restaurant?.restaurantId));
    localStorage.setItem("restaurantAddress", JSON.stringify(restaurantAddress));
  }, [basket, deliveryOption, restaurant?.basicInfo.businessName, restaurant?.restaurantId, restaurantAddress]);

  async function handleCheckout() {
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

    const settings = {
      body: JSON.stringify({ basket: basket, id: id }),
      headers: {
        "Content-Type": "application/JSON",
      },
      method: "POST",
    };

    try {
      const response = await fetch("http://localhost:5002/create-checkout-session", settings);

      if (response.ok) {
        const session = await response.json();
        // setSessionId(session.id);
        localStorage.setItem("sessionId", JSON.stringify(session.id));

        stripe.redirectToCheckout({
          sessionId: session.id,
        });
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="basket-container">
      <div className="basket">
        <h2>Basket</h2>

        <div className="delivery-toggle">
          <button
            className={deliveryOption === "delivery" ? "active" : ""}
            onClick={() => setDeliveryOption("delivery")}
          >
            delivery
          </button>
          <button className={deliveryOption === "pickup" ? "active" : ""} onClick={() => setDeliveryOption("pickup")}>
            pickup
          </button>
        </div>

        {basket.length === 0 ? (
          <p>No items in the basket</p>
        ) : (
          <ul>
            {basket.map((item) => (
              <li key={item._id} className="basket-item">
                <div className="item-details">
                  <span className="item-name">{item.name}</span>
                </div>
                <div className="item-controls">
                  <div className="item-quantity">
                    <button onClick={() => decreaseItemQuantity(item._id)}>-</button>

                    <span>{item.quantity}</span>
                    <button onClick={() => increaseItemQuantity(item._id)}>+</button>
                  </div>

                  <span className="item-total">€{(item.price * item.quantity).toFixed(2)}</span>
                  <button className="remove-button" onClick={() => removeItemFromBasket(item._id)}>
                    x
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <h3>Total: €{totalSum.toFixed(2)}</h3>
        <button onClick={handleCheckout} className="checkout-button">
          Checkout (€{totalSum.toFixed(2)})
        </button>
      </div>
    </div>
  );
}

export default Basket;
