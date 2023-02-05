import React from "react";
import "./Card.css";

function Card({ children }) {
  return <div className="Container">{children}</div>;
}

export default Card;
