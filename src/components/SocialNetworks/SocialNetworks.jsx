import React from "react";
import css from "./SocialNetworks.module.css"

const SocialNetworks = () => {
  return (
    <ul className={css.list}>
      <li><a className={css.item} href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer">TWITCH</a></li>
      <li><a className={css.item} href="https://www.instagram" target="_blank" rel="noopener noreferrer">INSTAGRAM</a></li>
      <li><a className={css.item} href="https://www.facebook" target="_blank" rel="noopener noreferrer">FACEBOOK</a></li>
    </ul>
  )
}

export default SocialNetworks