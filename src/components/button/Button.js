import React from "react";
import './button.css';

export function Button(props) {
  return <button className="button-style" onClick={props.click} >Clear All</button>;
}
