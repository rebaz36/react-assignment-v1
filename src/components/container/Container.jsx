import React from "react";
import classes from "./Container.module.css";
function Container({ children, style }) {
  return (
    <div className={classes.container} style={style}>
      {children}
    </div>
  );
}

export default Container;
