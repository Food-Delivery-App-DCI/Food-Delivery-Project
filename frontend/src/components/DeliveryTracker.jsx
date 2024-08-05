// import { useNavigate } from "react-router-dom";
// import { useState, useEffect, useContext } from "react";
// import { BasketContext } from "../contexts/BasketContext";

// import "../style/DeliveryTracker.css"

// const deliveryStages = [
//   { status: "Payment confirmed! 🎉", duration: 1000 },
//   { status: "Order received by the restaurant. ✅", duration: 5000 },
//   { status: "Food is being prepared.🧑‍🍳", duration: 10000 },
//   { status: "Food is ready to go! 🍽", duration: 3000 },
//   { status: "Your order is on its way. 🚗", duration: 7000 },
//   { status: "Knock, knock! Your order is at the door. 🛎", duration: 2000 },
// ];

// const pickupStages = [
//   { status: "Payment confirmed! 🎉", duration: 1000 },
//   { status: "Order received by the restaurant. ✅", duration: 5000 },
//   { status: "Food is being prepared. 🧑‍🍳", duration: 10000 },
//   { status: "Food is ready to go! 🍽", duration: 3000 },
//   { status: "Your order is ready for pickup! 🛍️", duration: 3000 },
//   {
//     status: "You can now pick up your order at the counter 🏃",
//     duration: 5000,
//   },
// ];

// function DeliveryTracker() {
//   const { deliveryOption } = useContext(BasketContext);

//   const [currentStage, setCurrentStage] = useState(0);
//   const [completedStages, setCompletedStages] = useState([]);
//   const navigate = useNavigate();

//   const stages = deliveryOption === "delivery" ? deliveryStages : pickupStages;

//   useEffect(() => {
//     if (currentStage < stages.length) {
//       const timer = setTimeout(() => {
//         const currentTime = new Date().toLocaleString("en-US", {
//           hour: "numeric",
//           minute: "numeric",
//           second: "numeric",
//           hour12: true,
//           month: "long",
//           day: "numeric",
//           year: "numeric",
//         });

//         setCompletedStages((prev) => [
//           ...prev,
//           { ...stages[currentStage], timestamp: currentTime },
//         ]);
//         setCurrentStage((prev) => prev + 1);
//       }, stages[currentStage].duration);
//       return () => clearTimeout(timer);
//     } else {
//       navigate("/success");
//     }
//   }, [currentStage, stages]);

//   const handleBackToMainPage = () => {
//     navigate("/");
//   };

//   return (
//     <div className="tracking-container">
//       <h2>Track Your Order</h2>

//       <div className="timeline">
//         {stages.map((stage, index) => (
//           <div
//             key={index}
//             className={`timeline-item ${
//               completedStages.length > index ? "completed" : ""
//             } ${currentStage === index ? "current" : ""}`}
//           >
//             <div className="timeline-icon"></div>
//             <div className="timeline-content">
//               <p className="timeline-status">{stage.status}</p>

//               {completedStages.length > index && (
//                 <p className="timeline-timestamp">
//                   {completedStages[index].timestamp}
//                 </p>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="current-stage">
//         {currentStage >= stages.length && (
//           <div className="completion">
//             <p>Delivery Completed!</p>
//             <button
//               onClick={handleBackToMainPage}
//               className="back-to-main-button"
//             >
//               Back to main page
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default DeliveryTracker;

import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { BasketContext } from "../contexts/BasketContext";
import io from "socket.io-client";
import "../style/DeliveryTracker.css";

// const socket = io.connect("http://localhost:5002");

const socket = io.connect("http://localhost:5002", {
  transports: ["websocket"],
  upgrade: false,
});

socket.on("connect", () => {
  console.log("Connected to the server");
});

socket.on("connect_error", (err) => {
  console.error("Connection error:", err);
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
  const { deliveryOption, orderId } = useContext(BasketContext);
  const [currentStage, setCurrentStage] = useState(0);
  const [completedStages, setCompletedStages] = useState([]);
  const navigate = useNavigate();

  const stages = deliveryOption === "delivery" ? deliveryStages : pickupStages;

  useEffect(() => {
    if (orderId) {
      socket.emit("joinOrderRoom", orderId);
      console.log(`Joined order room: ${orderId}`);

      socket.on("orderStatusUpdated", ({ updatedOrderId: orderIdNew, status }) => {
        console.log(`Received orderStatusUpdated for orderId: ${orderIdNew}, status: ${status}`);
        if (orderIdNew === orderId) {
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
              return newStages;
            });
            setCurrentStage(stageIndex);
          }
        }
      });

      // Clean up event listener on unmount
      return () => {
        socket.off("orderStatusUpdated");
      };
    }
  }, [orderId, stages]);

  const handleBackToMainPage = () => {
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
          <div className="completion">
            {/* <p>Delivery Completed!</p> */}
            <button onClick={handleBackToMainPage} className="back-to-main-button">
              Back to main page
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DeliveryTracker;
