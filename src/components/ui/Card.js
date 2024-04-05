import React from "react";
import classes from "./Card.module.css";

function Card(props) {
  // props.children is a special prop that allows us to output content between the opening and closing tags of our custom component
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
