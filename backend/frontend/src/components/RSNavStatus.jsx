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
        <div className="received" data-tooltip="Received">
          <FontAwesomeIcon icon={faClipboardList} />
          <span className="rs-item-count">{orderCounts.received}</span>
        </div>
        <div className="preparing" data-tooltip="Preparing">
          <FontAwesomeIcon icon={faMortarPestle} />
          <span className="rs-item-count">{orderCounts.preparing}</span>
        </div>
        <div className="ready" data-tooltip="Ready">
          <FontAwesomeIcon icon={faUtensils} />
          <span className="rs-item-count">{orderCounts.ready}</span>
        </div>
        <div className="delivery" data-tooltip="Delivery">
          <FontAwesomeIcon icon={faTruck} />
          <span className="rs-item-count">{orderCounts.delivery}</span>
        </div>
        <div className="completed" data-tooltip="Completed">
          <FontAwesomeIcon icon={faClipboardCheck} />
          <span className="rs-item-count">{orderCounts.completed}</span>
        </div>
      </div>
    </>
  );
}

export default RSNavStatus;
