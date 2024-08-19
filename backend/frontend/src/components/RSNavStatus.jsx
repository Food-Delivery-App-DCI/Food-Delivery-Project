import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faMortarPestle,
  faUtensils,
  faTruck,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

import { DataContext } from "../contexts/DataContext";

import "../style/RSNavStatus.css";

function RSNavStatus() {
  const { orderCounts } = useContext(DataContext);

  return (
    <>
      <div className="rs-nav-status">
        <div className="received">
          <FontAwesomeIcon
            icon={faClipboardList}
            style={{ color: "#266241" }}
          />
          <span className="rs-item-count">{orderCounts.received}</span>
        </div>
        <div className="preparing">
          <FontAwesomeIcon icon={faMortarPestle} style={{ color: "#266241" }} />
          <span className="rs-item-count">{orderCounts.preparing}</span>
        </div>
        <div className="ready">
          <FontAwesomeIcon icon={faUtensils} style={{ color: "#266241" }} />
          <span className="rs-item-count">{orderCounts.ready}</span>
        </div>
        <div className="delivery">
          <FontAwesomeIcon icon={faTruck} style={{ color: "#266241" }} />
          <span className="rs-item-count">{orderCounts.delivery}</span>
        </div>
        <div className="completed">
          <FontAwesomeIcon
            icon={faClipboardCheck}
            style={{ color: "#266241" }}
          />
          <span className="rs-item-count">{orderCounts.completed}</span>
        </div>
      </div>
    </>
  );
}

export default RSNavStatus;

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faClipboardList,
//   faMortarPestle,
//   faUtensils,
//   faTruck,
//   faClipboardCheck,
// } from "@fortawesome/free-solid-svg-icons";
// import { useContext } from "react";
// import { DataContext } from "../contexts/DataContext";
// import ReactTooltip from "react-tooltip";  // Import react-tooltip
// import "../style/RSNavStatus.css";

// function RSNavStatus() {
//   const { orderCounts } = useContext(DataContext);

//   return (
//     <>
//       <div className="rs-nav-status">
//         <div className="received" data-tip="Orders Received">
//           <FontAwesomeIcon icon={faClipboardList} style={{ color: "#266241" }} />
//           <span className="rs-item-count">{orderCounts.received}</span>
//         </div>
//         <div className="preparing" data-tip="Orders Preparing">
//           <FontAwesomeIcon icon={faMortarPestle} style={{ color: "#266241" }} />
//           <span className="rs-item-count">{orderCounts.preparing}</span>
//         </div>
//         <div className="ready" data-tip="Orders Ready">
//           <FontAwesomeIcon icon={faUtensils} style={{ color: "#266241" }} />
//           <span className="rs-item-count">{orderCounts.ready}</span>
//         </div>
//         <div className="delivery" data-tip="Orders in Delivery">
//           <FontAwesomeIcon icon={faTruck} style={{ color: "#266241" }} />
//           <span className="rs-item-count">{orderCounts.delivery}</span>
//         </div>
//         <div className="completed" data-tip="Orders Completed">
//           <FontAwesomeIcon icon={faClipboardCheck} style={{ color: "#266241" }} />
//           <span className="rs-item-count">{orderCounts.completed}</span>
//         </div>
//       </div>
//       <ReactTooltip place="top" effect="solid" />  {/* Tooltip Configuration */}
//     </>
//   );
// }

// export default RSNavStatus;
