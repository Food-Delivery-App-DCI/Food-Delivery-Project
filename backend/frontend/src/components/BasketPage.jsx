/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { BasketContext } from "../contexts/BasketContext";
import { loadStripe } from "@stripe/stripe-js";
import Searchbar from "./Searchbar"; // Import Searchbar component

function BasketPage({ id, restaurants }) {
  const { basket, removeItemFromBasket, increaseItemQuantity, decreaseItemQuantity, totalSum } =
    useContext(BasketContext);

  const [deliveryOption, setDeliveryOption] = useState("Delivery");
  const [searchQuery, setSearchQuery] = useState("");

  async function handleCheckout() {
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ basket, id }),
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API}/create-checkout-session`, settings);

      if (response.ok) {
        const session = await response.json();
        stripe.redirectToCheckout({
          sessionId: session.id,
        });
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.error("Checkout error:", error.message);
      // Display error in UI instead of alert
      // Optionally: Set state to display error message to user
    }
  }

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="basket-page-container">
      <div className="basket">
        <h2>Basket</h2>

        <div className="delivery-toggle">
          <button
            className={deliveryOption === "Delivery" ? "active" : ""}
            onClick={() => setDeliveryOption("Delivery")}
          >
            Delivery
          </button>
          <button className={deliveryOption === "Pickup" ? "active" : ""} onClick={() => setDeliveryOption("Pickup")}>
            Pickup
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
                  <span className="item-total">${(item.price * item.quantity).toFixed(2)}</span>
                  <button className="remove-button" onClick={() => removeItemFromBasket(item._id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <h3>Total: ${totalSum.toFixed(2)}</h3>
        <button onClick={handleCheckout} className="checkout-button">
          Checkout (${totalSum.toFixed(2)})
        </button>
      </div>

      <div className="search-bar-container">
        <h2>Order Your Favorite Food Here</h2>
        <Searchbar className="restaurant-search" setSearchQuery={setSearchQuery} />
      </div>

      <div className="restaurant-list">
        <ul>
          {filteredRestaurants.map((restaurant) => (
            <li key={restaurant.id}>{restaurant.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

BasketPage.defaultProps = {
  restaurants: [],
};

export default BasketPage;
