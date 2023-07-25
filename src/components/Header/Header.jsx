import React from "react";
import "../../App.css";
import css from "./Header.module.css"
import Logo from "../../assets/images/logo.png";
import Cart from "../../assets/images/cart.png"

const Header = () => {
  return (
    <header className={`${css.header} background main-wrapper`}>
      <div className="container flexbox">
        <picture className={`${css.header__logo} logo`} >
          <img src={Logo} alt="logotype" />
        </picture>
        <nav>
          <ul className={css.list}>
            <li className={css.item}><a className={css.link} href="#Home">Home</a></li>
            <li className={css.item}><a className={css.link} href="#About">About</a></li>
            <li className={css.item}><a className={css.link} href="#Team">Team</a></li>
            <li className={css.item}><a className={css.link} href="#Shop">Shop</a></li>
            <li className={css.item}><a className={css.link} href="#Pages">Pages</a></li>
          </ul>
        </nav>
        <div className={css.wrapper}>
          <div className={css.cart}>
            <img src={Cart} alt="cart" />
            <div className={css.count}>0</div>
          </div>
          <button className={css.contact}>Contact Us</button>
        </div>
      </div> 
    </header>
  )
}

export default Header