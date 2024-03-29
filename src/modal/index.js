import ReactModal from "react-modal";

import "./modal.css";

export const ModalContainer = ({ toggleModal, children }) => {
  return (
    <ReactModal
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          position: "absolute",
          top: "40px",
          left: "40px",
          right: "40px",
          bottom: "40px",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
          width: "300px",
          margin: "0 auto",
        },
      }}
      isOpen={toggleModal}
    >
      {children}
    </ReactModal>
  );
};
