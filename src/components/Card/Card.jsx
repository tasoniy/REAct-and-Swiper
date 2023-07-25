import React from "react";

import "../../App.css"; 
import css from "./Card.module.css";

const Card = (props) => {
  const {poster, date, title, className } = props;

  return (
      <a className={`${css.card} ${className}`} href="#">
        <picture className={css.poster}>
          <img src={poster} alt="poster" />
        </picture>
        <p className={css.date}>{date}</p>
        <h3 className={css.title}>{title}</h3>
      </a>
  )
}

export default Card;