import { useContext, useEffect, useState } from "react";
import "../style/RSOrdersActive.css";
import { DataContext } from "../contexts/DataContext";
import io from "socket.io-client";

//* Remember to change url to VITE_API import during deployment
const socket = io.connect(import.meta.env.VITE_API, {
  transports: ["websocket"],
  upgrade: false,
});

socket.on("connect", () => {
  console.log("Connected to the server");
});

socket.on("connect_error", (err) => {
  console.error("Connection error:", err);
});

function RSOrdersActive() {
  const {
    loggedInRestaurant,
    setLoggedInRestaurant,
    getRestaurantOrderHistory,
    // orderCounts,
    updateOrderCounts,
  } = useContext(DataContext);
  const [orderStatuses, setOrderStatuses] = useState({});
  const [statusTimestamps, setStatusTimestamps] = useState({});

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) {
      console.error("Invalid timestamp:", timestamp);
      return "Invalid Date";
    }
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });
  };

  useEffect(() => {
    if (loggedInRestaurant?._id) {
      socket.emit("joinRestaurantRoom", loggedInRestaurant._id);
      console.log(`Joined restaurant room: ${loggedInRestaurant._id}`);

      socket.on("newOrder", (updatedRestaurant) => {
        setLoggedInRestaurant(updatedRestaurant);
        console.log("Received newOrder update:", updatedRestaurant);
      });

      socket.on("orderStatusUpdated", ({ updatedOrderId, status, timestamp }) => {
        if (updatedOrderId) {
          setOrderStatuses((prev) => ({
            ...prev,
            [updatedOrderId]: status,
          }));
          setStatusTimestamps((prev) => ({
            ...prev,
            [updatedOrderId]: {
              ...prev[updatedOrderId],
              [status]: formatTimestamp(timestamp),
            },
          }));
          setLoggedInRestaurant((prev) => {
            const updatedActiveOrders = prev.activeOrders.map((order) =>
              order.order._id === updatedOrderId
                ? {
                    ...order,
                    orderStatus: status,
                    statusTimestamp: timestamp,
                  }
                : order
            );
            return { ...prev, activeOrders: updatedActiveOrders };
          });

          updateOrderCounts();

          if (status === "Delivery Completed") {
            alert(
              "Order has been delivered successfully and no longer an active order. Order will be moved to order history now!"
            );
            getRestaurantOrderHistory();
          }
        }
      });

      return () => {
        socket.off("newOrder");
        socket.off("orderStatusUpdated");
      };
    }
  }, [loggedInRestaurant?._id, setLoggedInRestaurant, updateOrderCounts]);

  useEffect(() => {
    if (loggedInRestaurant?.activeOrders) {
      const statuses = {};
      const timestamps = {};
      loggedInRestaurant.activeOrders.forEach((eachOrder) => {
        statuses[eachOrder.order._id] = eachOrder.orderStatus;
        timestamps[eachOrder.order._id] = eachOrder.statusTimestamp
          ? {
              [eachOrder.orderStatus]: formatTimestamp(eachOrder.statusTimestamp),
            }
          : {};
      });
      setOrderStatuses(statuses);
      setStatusTimestamps(timestamps);
    }
  }, [loggedInRestaurant]);

  const handleStatusUpdate = async (orderId, status) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API}/restaurants/update-order-status`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderId, status }),
      });

      if (response.ok) {
        const { timestamp } = await response.json();
        setOrderStatuses((prev) => ({
          ...prev,
          [orderId]: status,
        }));
        setStatusTimestamps((prev) => ({
          ...prev,
          [orderId]: {
            ...prev[orderId],
            [status]: formatTimestamp(timestamp),
          },
        }));
        socket.emit("joinOrderRoom", orderId);

        setLoggedInRestaurant((prev) => {
          const updatedActiveOrders = prev.activeOrders.map((order) =>
            order.order._id === orderId ? { ...order, orderStatus: status, statusTimestamp: timestamp } : order
          );
          return { ...prev, activeOrders: updatedActiveOrders };
        });

        updateOrderCounts();

        console.log(`Updated status for orderId: ${orderId} to status: ${status}`);
      } else {
        console.error("Failed to update order status");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getStatusOrder = (status) => {
    const statusOrder = [
      "Order received by the restaurant. ✅",
      "Food is being prepared. 🧑‍🍳",
      "Food is ready to go! 🍽",
      "Your order is on its way. 🚗",
      "Knock, knock! Your order is at the door. 🛎",
      "Your order is ready for pickup! 🛍️",
      "You can now pick up your order at the counter 🏃",
      "Delivery Completed",
    ];
    return statusOrder.indexOf(status);
  };

  // useEffect(() => {
  //   async function getRestaurantOrderHistory() {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:5002/restaurants/get-restaurant-order-history/${loggedInRestaurant._id}`
  //       );

  //       if (response.ok) {
  //         const updatedRestaurant = await response.json();
  //         setLoggedInRestaurant(updatedRestaurant);
  //       } else {
  //         const { error } = await response.json();
  //         throw new Error(error.message);
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }

  //   if (loggedInRestaurant._id) {
  //     getRestaurantOrderHistory();
  //   }
  // }, [loggedInRestaurant]);

  console.log(loggedInRestaurant);

  return (
    <div className="rs-orders-active-container">
      {loggedInRestaurant.activeOrders.length === 0 ? (
        <h2 className="no-active-order-info">You have no active orders at the moment</h2>
      ) : (
        <>
          {loggedInRestaurant.activeOrders.map((eachOrder) => {
            const date = new Date(eachOrder.date);
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
            const currentStatusOrder = getStatusOrder(orderStatuses[eachOrder.order._id]);

            return (
              <div className="cards" key={eachOrder._id}>
                <p>
                  <strong>Order ID:</strong> {eachOrder.order._id}
                </p>
                <p>
                  <strong>Date:</strong> {formattedDate}
                </p>
                <p>
                  <strong>Customer:</strong> {eachOrder.customerName}
                </p>
                <p>
                  <strong>Address:</strong> {eachOrder.customerAddress}
                </p>
                <p>
                  <strong>Items:</strong> {eachOrder.order.items?.map((item) => item.name).join(", ")}
                </p>
                <p>
                  <strong>Payment:</strong> Confirmed
                </p>
                <p>
                  <strong>Delivery Option:</strong> {eachOrder.order.additionalInfo?.orderType}
                </p>

                <div className="progress">
                  <p>
                    <strong>Progress Tracker:</strong>
                  </p>
                  <ul>
                    <li>
                      <button
                        className={
                          orderStatuses[eachOrder.order._id] === "Order received by the restaurant. ✅" ? "active" : ""
                        }
                        onClick={() => handleStatusUpdate(eachOrder.order._id, "Order received by the restaurant. ✅")}
                        disabled={currentStatusOrder >= getStatusOrder("Order received by the restaurant. ✅")}
                      >
                        Order received by the restaurant. ✅
                      </button>
                      {statusTimestamps[eachOrder.order._id] &&
                        statusTimestamps[eachOrder.order._id]["Order received by the restaurant. ✅"] && (
                          <p className="status-timestamp">
                            {statusTimestamps[eachOrder.order._id]["Order received by the restaurant. ✅"]}
                          </p>
                        )}
                    </li>
                    <li>
                      <button
                        className={orderStatuses[eachOrder.order._id] === "Food is being prepared. 🧑‍🍳" ? "active" : ""}
                        onClick={() => handleStatusUpdate(eachOrder.order._id, "Food is being prepared. 🧑‍🍳")}
                        disabled={currentStatusOrder >= getStatusOrder("Food is being prepared. 🧑‍🍳")}
                      >
                        Food is being prepared. 🧑‍🍳
                      </button>
                      {statusTimestamps[eachOrder.order._id] &&
                        statusTimestamps[eachOrder.order._id]["Food is being prepared. 🧑‍🍳"] && (
                          <p className="status-timestamp">
                            {statusTimestamps[eachOrder.order._id]["Food is being prepared. 🧑‍🍳"]}
                          </p>
                        )}
                    </li>
                    <li>
                      <button
                        className={orderStatuses[eachOrder.order._id] === "Food is ready to go! 🍽" ? "active" : ""}
                        onClick={() => handleStatusUpdate(eachOrder.order._id, "Food is ready to go! 🍽")}
                        disabled={currentStatusOrder >= getStatusOrder("Food is ready to go! 🍽")}
                      >
                        Food is ready to go! 🍽
                      </button>
                      {statusTimestamps[eachOrder.order._id] &&
                        statusTimestamps[eachOrder.order._id]["Food is ready to go! 🍽"] && (
                          <p className="status-timestamp">
                            {statusTimestamps[eachOrder.order._id]["Food is ready to go! 🍽"]}
                          </p>
                        )}
                    </li>
                    {eachOrder.order.additionalInfo?.orderType === "delivery" && (
                      <>
                        <li>
                          <button
                            className={
                              orderStatuses[eachOrder.order._id] === "Your order is on its way. 🚗" ? "active" : ""
                            }
                            onClick={() => handleStatusUpdate(eachOrder.order._id, "Your order is on its way. 🚗")}
                            disabled={currentStatusOrder >= getStatusOrder("Your order is on its way. 🚗")}
                          >
                            Your order is on its way. 🚗
                          </button>
                          {statusTimestamps[eachOrder.order._id] &&
                            statusTimestamps[eachOrder.order._id]["Your order is on its way. 🚗"] && (
                              <p className="status-timestamp">
                                {statusTimestamps[eachOrder.order._id]["Your order is on its way. 🚗"]}
                              </p>
                            )}
                        </li>
                        <li>
                          <button
                            className={
                              orderStatuses[eachOrder.order._id] === "Knock, knock! Your order is at the door. 🛎"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              handleStatusUpdate(eachOrder.order._id, "Knock, knock! Your order is at the door. 🛎")
                            }
                            disabled={
                              currentStatusOrder >= getStatusOrder("Knock, knock! Your order is at the door. 🛎")
                            }
                          >
                            Knock, knock! Your order is at the door. 🛎
                          </button>
                          {statusTimestamps[eachOrder.order._id] &&
                            statusTimestamps[eachOrder.order._id]["Knock, knock! Your order is at the door. 🛎"] && (
                              <p className="status-timestamp">
                                {statusTimestamps[eachOrder.order._id]["Knock, knock! Your order is at the door. 🛎"]}
                              </p>
                            )}
                        </li>
                      </>
                    )}
                    {eachOrder.order.additionalInfo?.orderType === "pickup" && (
                      <>
                        <li>
                          <button
                            className={
                              orderStatuses[eachOrder.order._id] === "Your order is ready for pickup! 🛍️"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              handleStatusUpdate(eachOrder.order._id, "Your order is ready for pickup! 🛍️")
                            }
                            disabled={currentStatusOrder >= getStatusOrder("Your order is ready for pickup! 🛍️")}
                          >
                            Your order is ready for pickup! 🛍️
                          </button>
                          {statusTimestamps[eachOrder.order._id] &&
                            statusTimestamps[eachOrder.order._id]["Your order is ready for pickup! 🛍️"] && (
                              <p className="status-timestamp">
                                {statusTimestamps[eachOrder.order._id]["Your order is ready for pickup! 🛍️"]}
                              </p>
                            )}
                        </li>
                        <li>
                          <button
                            className={
                              orderStatuses[eachOrder.order._id] === "You can now pick up your order at the counter 🏃"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              handleStatusUpdate(
                                eachOrder.order._id,
                                "You can now pick up your order at the counter 🏃"
                              )
                            }
                            disabled={
                              currentStatusOrder >= getStatusOrder("You can now pick up your order at the counter 🏃")
                            }
                          >
                            You can now pick up your order at the counter 🏃
                          </button>
                          {statusTimestamps[eachOrder.order._id] &&
                            statusTimestamps[eachOrder.order._id][
                              "You can now pick up your order at the counter 🏃"
                            ] && (
                              <p className="status-timestamp">
                                {
                                  statusTimestamps[eachOrder.order._id][
                                    "You can now pick up your order at the counter 🏃"
                                  ]
                                }
                              </p>
                            )}
                        </li>
                      </>
                    )}
                    <li>
                      <button
                        className={orderStatuses[eachOrder.order._id] === "Delivery Completed" ? "active" : ""}
                        onClick={() => handleStatusUpdate(eachOrder.order._id, "Delivery Completed")}
                        disabled={currentStatusOrder >= getStatusOrder("Delivery Completed")}
                      >
                        Delivery Completed
                      </button>
                      {statusTimestamps[eachOrder.order._id] &&
                        statusTimestamps[eachOrder.order._id]["Delivery Completed"] && (
                          <p className="status-timestamp">
                            {statusTimestamps[eachOrder.order._id]["Delivery Completed"]}
                          </p>
                        )}
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default RSOrdersActive;
