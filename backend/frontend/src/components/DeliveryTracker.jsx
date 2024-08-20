import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { BasketContext } from "../contexts/BasketContext";
import io from "socket.io-client";
import "../style/DeliveryTracker.css";
import { DataContext } from "../contexts/DataContext";

const socket = io.connect(import.meta.env.VITE_API, {
  transports: ["websocket"],
  upgrade: false,
});

const deliveryStages = [
  "Payment confirmed! 🎉",
  "Order received by the restaurant. ✅",
  "Food is being prepared. 🧑‍🍳",
  "Food is ready to go! 🍽",
  "Your order is on its way. 🚗",
  "Knock, knock! Your order is at the door. 🛎",
  "Delivery Completed",
];

const pickupStages = [
  "Payment confirmed! 🎉",
  "Order received by the restaurant. ✅",
  "Food is being prepared. 🧑‍🍳",
  "Food is ready to go! 🍽",
  "Your order is ready for pickup! 🛍️",
  "You can now pick up your order at the counter 🏃",
  "Delivery Completed",
];

function DeliveryTracker() {
  const { deliveryOption, orderId: contextOrderId } = useContext(BasketContext);
  const { currentStage, setCurrentStage, completedStages, setCompletedStages } = useContext(DataContext);
  // const [currentStage, setCurrentStage] = useState(() => {
  //   const savedStage = localStorage.getItem("currentStage");
  //   return savedStage ? JSON.parse(savedStage) : 0;
  // });
  // const [completedStages, setCompletedStages] = useState(() => {
  //   const savedStages = localStorage.getItem("completedStages");
  //   return savedStages ? JSON.parse(savedStages) : [];
  // });
  const [orderId, setOrderId] = useState(() => {
    const savedOrderId = localStorage.getItem("orderId");
    return savedOrderId || contextOrderId;
  });
  const navigate = useNavigate();

  const stages = deliveryOption === "Delivery" ? deliveryStages : pickupStages;

  useEffect(() => {
    if (orderId) {
      socket.emit("joinOrderRoom", orderId);
      console.log(`Rejoined order room: ${orderId}`);

      socket.on("orderStatusUpdated", ({ updatedOrderId, status }) => {
        console.log(`Received orderStatusUpdated for orderId: ${updatedOrderId}, status: ${status}`);
        if (updatedOrderId === orderId) {
          const stageIndex = stages.indexOf(status);
          if (stageIndex !== -1) {
            const currentTime = new Date().toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: true,
              month: "long",
              day: "numeric",
              year: "numeric",
            });

            setCompletedStages((prev) => {
              const newStages = [...prev];
              newStages[stageIndex] = { status, timestamp: currentTime };
              localStorage.setItem("completedStages", JSON.stringify(newStages)); // Save to localStorage
              return newStages;
            });
            setCurrentStage(stageIndex);
            localStorage.setItem("currentStage", stageIndex); // Save to localStorage
          }
        }
      });

      return () => {
        socket.off("orderStatusUpdated");
      };
    }
  }, [orderId, stages]);

  useEffect(() => {
    if (contextOrderId) {
      setOrderId(contextOrderId);
      localStorage.setItem("orderId", contextOrderId);
    } else if (!contextOrderId && !orderId) {
      // Reset everything when there is no active order
      setCurrentStage(0);
      setCompletedStages([]);
      localStorage.removeItem("currentStage");
      localStorage.removeItem("completedStages");
    }
  }, [contextOrderId]);

  const handleBackToMainPage = () => {
    // Clear local storage and reset state before navigating
    localStorage.removeItem("currentStage");
    localStorage.removeItem("completedStages");
    localStorage.removeItem("orderId");
    localStorage.removeItem("purchasedItems");
    localStorage.removeItem("sessionId");
    localStorage.removeItem("restaurantAddress");
    localStorage.removeItem("restaurantId");
    localStorage.removeItem("restaurantName");
    localStorage.removeItem("searchedRestaurantsResults");
    setCurrentStage(0);
    setCompletedStages([]);
    setOrderId(null);

    // Navigate back to the main page
    navigate("/");
  };

  return (
    <div className="tracking-container">
      <h2>Track Your Order</h2>

      <div className="timeline">
        {stages.map((stage, index) => (
          <div
            key={index}
            className={`timeline-item ${completedStages[index + 1] ? "completed" : ""} ${
              currentStage === index ? "current" : ""
            }`}
          >
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <p className="timeline-status">{stage}</p>

              {completedStages[index] && <p className="timeline-timestamp">{completedStages[index].timestamp}</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="current-stage">
        {currentStage === stages.length - 1 && (
          <>
            <div className="completion">
              <button onClick={handleBackToMainPage} className="back-to-main-button">
                Back to main page
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DeliveryTracker;
