import React, { useState, useEffect } from "react";
import M from "materialize-css";
import "./select.scss";

const Select = (props) => {
  const [option, setOption] = useState("How can I help?");
  const [icon, setIcon] = useState("arrow_drop_down");

  useEffect(() => {
    M.AutoInit();
    const abortcontroller = new AbortController();
    return function cleanup() {
      abortcontroller.abort();
    };
  });

  const handleClick = (e, iconText) => {
    const reason = e.target.text;
    const newIcon = iconText;
    setOption(reason);
    setIcon(newIcon);
    let newData = { ...props.data };
    newData.reason = reason;
    props.setData(newData);
  };

  return (
    <div id="select">
      <button
        id="dropdown_trigger"
        className="dropdown-trigger btn grey darken-3 white-text text-darken-2"
        data-target="reason_dropdown"
      >
        <i className="material-icons left">{icon}</i>
        {option}
      </button>
      <ul
        id="reason_dropdown"
        className="dropdown-content grey darken-3 white-text text-darken-2"
      >
        <li>
          <i className="material-icons white-text left">code</i>
          <a
            style={{ display: "inline", color: "whitesmoke" }}
            onClick={(e) => handleClick(e, "code")}
            href="#!"
          >
            Update Existing
          </a>
        </li>
        <li>
          <i className="material-icons white-text left">devices</i>
          <a
            style={{ display: "inline", color: "whitesmoke" }}
            onClick={(e) => handleClick(e, "devices")}
            href="#!"
          >
            New Website
          </a>
        </li>
        <li>
          <i className="material-icons white-text left">help</i>
          <a
            style={{ display: "inline", color: "whitesmoke" }}
            onClick={(e) => handleClick(e, "help")}
            href="#!"
          >
            Question
          </a>
        </li>
        <li>
          <i className="material-icons white-text left">comment</i>
          <a
            style={{ display: "inline", color: "whitesmoke" }}
            onClick={(e) => handleClick(e, "comment")}
            href="#!"
          >
            Feedback
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Select;
