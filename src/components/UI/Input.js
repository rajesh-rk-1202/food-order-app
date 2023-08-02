import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  // console.log("IDs", props.input.id);
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input}></input>
    </div>
  );
});

export default Input;
