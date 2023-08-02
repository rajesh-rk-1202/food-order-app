import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  // console.log("IDs", props.input.id);
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input}></input>
    </div>
  );
};

export default Input;
