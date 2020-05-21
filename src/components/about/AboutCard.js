import React from "react";
// Use carousel to display cards and flat buttons in card-action to trigger carousel
const AboutCard = (props) => {
  return (
    <div id="aboutCard" className="card grey darken-3 white-text text-darken-2">
      <div className="card-content">
        <div className="card-title">{props.title}</div>
        <p style={{paddingBottom: "1em"}} >{props.content}</p>
        <div className="card-action">
          <button
            onClick={() => props.next()}
            className="btn btn-flat right grey darken-3 white-text text-darken-2 waves-effect waves-light"
          >
            <small>That Way</small><i className="material-icons right">arrow_forward</i>
          </button>
          <button
            onClick={() => props.prev()}
            className="btn btn-flat left grey darken-3 white-text text-darken-2 waves-effect waves-light"
          >
            <i className="material-icons left">arrow_back</i><small>This Way</small>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
