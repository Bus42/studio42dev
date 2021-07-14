import React, { useEffect, useState } from "react";
import M from "materialize-css";
import "./select.scss";

const reasons = [
  {
    displayText: "How Can I Help?",
    dataIcon: require("./icons/contact_support.svg"),
  },
  {
    displayText: "Update Existing",
    dataIcon: require("./icons/code.svg"),
  },
  {
    displayText: "New Website",
    dataIcon: require("./icons/devices.svg"),
  },
  {
    displayText: "Question",
    dataIcon: require("./icons/help_outline.svg"),
  },
  {
    displayText: "Feedback",
    dataIcon: require("./icons/comment.svg"),
  },
];

const Select = ({ formValues, handleChange }) => {
  const [currentReason, setCurrentReason] = useState(reasons[0]);

  useEffect(() => {
    const elem = document.querySelector("select");
    M.FormSelect.init(elem);
    let instance = M.FormSelect.getInstance(elem);
    return instance.destroy();
  }, []);
  
  useEffect(() => {
    setCurrentReason(formValues.reason);
  }, [formValues])

  return (
    <div className="col s12 m8 l6" style={{ paddingLeft: "0" }}>
      <select
        name="reason"
        id="reason"
        onChange={handleChange}
        value={currentReason}
      >
        {reasons.map((reason, index) => (
          <option
            value={reason.displayText}
            key={`contact_reasons_${index}`}
            data-icon={reason.dataIcon}
          >
            {reason.displayText}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
