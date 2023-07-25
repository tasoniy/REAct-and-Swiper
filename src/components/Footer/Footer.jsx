import React from "react";
import "../../App.css";
import Logo from "../../assets/images/logo.png"
import css from "./Footer.module.css"

const Footer = () => {

  return (
    <footer className={`${css.footer} main-wrapper`}>
      <div className={`${css.footer__content} container`}>
        <div>
          <picture className={css.footer__logo}>
            <img className="logo" src={Logo} alt="logotype" />
          </picture>
          
          <p className={css.text}>
            Lorem ipsum dolor amet, <br />
            consectetur adipiscing elit. Eget <br />
            nisl nunc quam ac sed turpis <br />
            volutpat. Cursus sed massa non .
          </p>
        </div>
        <div>
          <p className={css.subtitle}>Menu Items</p>
          <ul className={css.list}>
            <li className={css.item}><a className={css.text} href="#About">About</a></li>
            <li className={css.item}><a className={css.text} href="#Blog">Blog</a></li>
            <li className={css.item}><a className={css.text} href="#Shop">Shop</a></li>
            <li className={css.item}><a className={css.text} href="#Contact">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <p className={css.subtitle}>Other Pages</p>
          <ul className={css.list}>
            <li className={css.item}><a className={css.text} href="#">Styleguide</a></li>
            <li className={css.item}><a className={css.text} href="#">Changelog</a></li>
            <li className={css.item}><a className={css.text} href="#">License</a></li>
            <li className={css.item}><a className={css.text} href="#">Team</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer