import React from "react";
// Use carousel to display cards and flat buttons in card-action to trigger carousel
const AboutCard = (props) => {
  return (
    <div id="aboutCard" className="row">
      <div className="col s1 m2 l3"></div>
      <div className="col s10 m8 l6">
        <div className="card">
          <div className="card-content">
            <div className="card-title">{props.title}</div>
            <p>{props.content}</p>
            <div className="card-action">
              <button className="btn btn-flat right">
                next <i className="material-icons right">arrow_right</i>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col s1 m2 l3"></div>
    </div>
  );
};

export default AboutCard;
