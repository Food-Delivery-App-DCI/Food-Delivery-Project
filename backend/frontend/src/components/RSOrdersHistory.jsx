import { useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";
import "../style/RSOrdersHistory.css";

function RSOrdersHistory() {
  const { loggedInRestaurant, /* getRestaurantOrderHistory */ setLoggedInRestaurant } = useContext(DataContext);

  useEffect(() => {
    async function getRestaurantOrderHistory() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API}/restaurants/get-restaurant-order-history/${loggedInRestaurant._id}`
        );

        if (response.ok) {
          const updatedRestaurant = await response.json();
          setLoggedInRestaurant(updatedRestaurant);
        } else {
          const { error } = await response.json();
          throw new Error(error.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    if (loggedInRestaurant && !loggedInRestaurant.orderHistory) {
      getRestaurantOrderHistory();
    }
  }, [loggedInRestaurant, setLoggedInRestaurant]);

  async function handleDeleteOrder(orderId) {
    if (confirm("Are you sure you want to delete this order?")) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API}/restaurants/deleteOrder/${loggedInRestaurant._id}/${orderId}`,
          {
            method: "DELETE",
            credentials: "include",
          }
        );
        if (response.ok) {
          const { restaurant, message } = await response.json();
          setLoggedInRestaurant(restaurant);
          alert(message);
        } else {
          const { error } = await response.json();
          throw new Error(error.message);
        }
      } catch (error) {
        console.error("Error deleting order:", error.message);
      }
    }
  }

  async function handleDeleteOrderHistoryOfRestaurant() {
    if (confirm("Are you sure you want to delete all orders from your order history?")) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API}/restaurants/deleteOrderHistory/${loggedInRestaurant._id}`,
          {
            method: "DELETE",
            credentials: "include",
          }
        );

        if (response.ok) {
          const { restaurant, message } = await response.json();

          setLoggedInRestaurant(restaurant);
          alert(message);
        } else {
          const { error } = await response.json();
          throw new Error(error.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  return (
    <div className="rs-orderHistory-container">
      {loggedInRestaurant.orderHistory.length === 0 ? (
        <h2 className="no-order-history-info">You have no orders in your order history at the moment </h2>
      ) : (
        <>
          <button className="delete-history-button" onClick={handleDeleteOrderHistoryOfRestaurant}>
            Delete All
          </button>
          <div className="orders-container">
            {loggedInRestaurant.orderHistory
              .slice()
              .reverse()
              .map((eachOrder) => {
                const date = new Date(eachOrder.date);
                const updateDate = new Date(eachOrder.updatedAt);
                const formattedDate = isNaN(date.getTime())
                  ? "Invalid Date"
                  : date.toLocaleString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      second: "numeric",
                      hour12: true,
                    });
                const formattedUpdatedDate = isNaN(updateDate.getTime())
                  ? "Invalid Date"
                  : updateDate.toLocaleString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      second: "numeric",
                      hour12: true,
                    });
                return (
                  <div className="cards" key={eachOrder._id}>
                    <p>
                      <strong>Order ID:</strong> {eachOrder.order._id}
                    </p>
                    <p>
                      <strong>Date Received:</strong> {formattedDate}
                    </p>
                    <p>
                      <strong>Date Delivered:</strong> {formattedUpdatedDate}
                    </p>
                    <p>
                      <strong>Customer Name:</strong> {eachOrder.customerName}
                    </p>
                    <p>
                      <strong>Customer Address:</strong> {eachOrder.customerAddress}
                    </p>
                    <p className="items-paragraph">
                      <strong>Items:</strong>
                      {/* {eachOrder.order.items?.map((item) => item.name).join(", ")} */}
                    </p>
                    <div className="items-container">
                      {eachOrder.order?.items.map((item) => {
                        return (
                          <div key={item._id} className="item">
                            <p>{item.name}</p>
                            <div className="calculations">
                              <p>€{item.price.toFixed(2)}</p>
                              <p>x{item.quantity}</p>
                              <p>€{(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                          </div>
                        );
                      })}
                      <div className="total-sum">
                        <p>Total Sum</p>
                        <p>€{eachOrder.order?.totalSum.toFixed(2)}</p>
                      </div>
                    </div>
                    <p>
                      <strong>Payment:</strong> Confirmed
                    </p>
                    <p>
                      <strong>Delivery Option:</strong> {eachOrder.order.additionalInfo?.orderType}
                    </p>
                    <button onClick={() => handleDeleteOrder(eachOrder._id)} className="delete-button">
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
}

export default RSOrdersHistory;
