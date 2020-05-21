import React, { useEffect } from "react";
import M from "materialize-css";

const Modal = () => {
  useEffect(() => {
    M.AutoInit();
    const abortcontroller = new AbortController();
    return function cleanup() {
      abortcontroller.abort();
    };
  });
  return (
    <div
      ref={(Modal) => Modal}
      id="confirm-modal"
      className="modal confirm-modal"
    >
      <div className="modal-content">
        <h4>Success!</h4>
        <p>Thanks for taking the time to reach out. I'll be in touch soon.</p>
        <div className="modal-footer">
          <button className="modal-close waves-effect waves-light btn-flat">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
