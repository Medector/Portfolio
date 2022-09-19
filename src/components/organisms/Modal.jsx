import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      <div className="ModalContainer">
        <text className="ModalContainer-text">{children}</text>
        <button onClick={onClose}>Exit</button>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
