/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import Modal from "react-modal";

// Modal.setAppElement("#root"); // This helps with accessibility

// const CustomModal = ({ isOpen, onClose, children }) => {

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       style={{
//         overlay: {
//           backgroundColor: "rgba(0, 0, 0, 0.5)",
//         },
//         content: {
//           top: "50%",
//           left: "50%",
//           right: "auto",
//           bottom: "auto",
//           marginRight: "-50%",
//           transform: "translate(-50%, -50%)",
//           borderRadius: "5px",
//           padding: "10px",
//           width: "60%",
//           maxHeight: "70vh",
//         },
//       }}
//     >
//       <button onClick={onClose} style={{ float: "right", padding: "5px" }}>
//         x
//       </button>
//       {children}
//     </Modal>
//   );
// };

// export default CustomModal;

// import Modal from "react-modal";
// Modal.setAppElement("#root");

import "../style/CustomModal.css";

function CustomModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} data-aos="fade-down" data-aos-duration="500">
        <button className="modal-close-button" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default CustomModal;
