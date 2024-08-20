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
    setOrderSent,
    // isOrderAgain,
    // setIsOrderAgain,
  } = useContext(BasketContext);
  const { restaurant } = useContext(DataContext);

  // const { setSessionId } = useContext(DataContext);

  const restaurantAddress = `${restaurant?.basicInfo.address.street}, ${restaurant?.basicInfo.address.postalCode}, ${restaurant?.basicInfo.address.city}`;

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("deliveryOption", deliveryOption);
    localStorage.setItem("restaurantName", JSON.stringify(restaurant?.basicInfo.businessName));
    localStorage.setItem("restaurantId", JSON.stringify(restaurant?._id));
    localStorage.setItem("restaurantAddress", JSON.stringify(restaurantAddress));
  }, [basket, deliveryOption, restaurant?.basicInfo.businessName, restaurant?._id, restaurantAddress]);

  console.log(id);

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
      const response = await fetch(`${import.meta.env.VITE_API}/create-checkout-session`, settings);

      if (response.ok) {
        const session = await response.json();
        // setSessionId(session.id);
        localStorage.setItem("sessionId", JSON.stringify(session.id));
        setOrderSent(false);
        localStorage.setItem("orderSent", JSON.stringify(false));

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
            className={deliveryOption === "Delivery" ? "active" : ""}
            onClick={() => setDeliveryOption("Delivery")}
          >
            delivery
          </button>
          <button className={deliveryOption === "Pickup" ? "active" : ""} onClick={() => setDeliveryOption("Pickup")}>
            pickup
          </button>
        </div>

        {basket.length === 0 ? (
          <p>No items in the basket</p>
        ) : (
          <ul>
            {basket.map((item) => (
              <li key={item._id} className="basket-item">
                <div className="basket-item-details">
                  <p className="basket-item-name">{item.name}</p>
                  <span>{item.description}</span>
                </div>
                <div className="basket-item-controls">
                  <div className="basket-item-quantity">
                    <button className="subtract" onClick={() => decreaseItemQuantity(item._id)}>
                      -
                    </button>

                    <span>{item.quantity}</span>
                    <button className="add" onClick={() => increaseItemQuantity(item._id)}>
                      +
                    </button>
                  </div>

                  <span className="basket-item-total">€{(item.price * item.quantity).toFixed(2)}</span>
                  <button className="basket-remove-button" onClick={() => removeItemFromBasket(item._id)}>
                    x
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <h3>Total: €{totalSum.toFixed(2)}</h3>
        <button onClick={handleCheckout} className="basket-checkout-button">
          Checkout (€{totalSum.toFixed(2)})
        </button>
      </div>
    </div>
  );
}

export default Basket;
