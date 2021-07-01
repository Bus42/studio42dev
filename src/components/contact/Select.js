import React, { useEffect } from "react";
import M from "materialize-css";
import "./select.scss";

const Select = (props) => {
  useEffect(() => {
    const elem = document.querySelector("select");
    M.FormSelect.init(elem);
    let instance = M.FormSelect.getInstance(elem);
    return instance.destroy();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const reason = e.target.value;
    let newData = { ...props.data };
    newData.reason = reason;
    props.setData(newData);
  };

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

  return (
    <div className="col s6" style={{ paddingLeft: "0" }} >
      <select name="reason_select" id="reason_select" onChange={handleChange}>
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
