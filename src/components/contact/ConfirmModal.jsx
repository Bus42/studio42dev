import React, { useEffect } from "react";
import M from "materialize-css";

const ConfirmModal = (props) => {
  const { setFormValues, initialFormValues } = props;
  useEffect(() => {
    const elems = document.querySelectorAll(".modal");
    M.Modal.init(elems);
    const abortcontroller = new AbortController();
    return function cleanup() {
      abortcontroller.abort();
    };
  });
  const handleDismiss = () => {
    setFormValues(initialFormValues);
  };
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
          <button
            onClick={handleDismiss}
            className="modal-close waves-effect waves-light btn-flat"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
