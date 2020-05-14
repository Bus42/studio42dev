import React from "react";
import svg404 from "./images/404.svg";
import { useLocation, useHistory } from "react-router-dom";

const NotFound = () => {
  let location = useLocation();
  let history = useHistory();
  console.log(
    "%c404 page not found Icon by Jemis Mali @ https://iconscout.com/contributors/jemismali",
    "color: pink"
  );
  return (
    <div
      id="404"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexFlow: "column",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{fontSize: "18px"}} className="text-center">
        No matching route found for <code>{location.pathname}</code>{" "}
      </p>
      <img
        style={{
          height: "400px",
          maxHeight: "90vh",
          padding: "12px",
        }}
        src={svg404}
        alt="route not found"
      />
      <button
        className="btn waves-effect waves-lignt grey darken-3 white-text text-darken-2"
        style={{
          width: "128px",
        }}
        onClick={(e) => {
          e.preventDefault();
          history.goBack();
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
