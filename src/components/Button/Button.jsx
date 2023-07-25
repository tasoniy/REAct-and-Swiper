import React from "react";
import css from "./Button.module.css"

const Button = (props) => {
  const {text, className} = props
  return (
    <button className={`${css.button} ${className}`}>{text}</button>
  )
}

export default Button;