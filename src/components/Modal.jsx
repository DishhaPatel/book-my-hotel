import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";
import { Icon } from "@iconify/react";

const Modal = ({ isOpen, handleClose, children, title }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    }
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen &&
        createPortal(
          <div className="modal">
            <div className="modal-wrapper">
              <div className="modal-header">
                <h5>{title}</h5>
                <span className="close-button" onClick={handleClose}>
                  <Icon icon='maki:cross' />
                </span>
              </div>
              <div className="modal-content">{children}</div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Modal;
