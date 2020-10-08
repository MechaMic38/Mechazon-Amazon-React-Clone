import React, { useEffect } from "react";
import "../CSS/Header.css";

import logo from "../Images/amazon-logo-white.png";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";
import { useStateValue } from "../Context API/StateProvider";
import { auth } from "../firebase";
import $ from "jquery";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  /*=================================================================
  Some JQuery for the Side Menu interactivity*/
  useEffect(() => {
    let menuBackground = $("#menu__canvasBackground");
    let menuCanvas = $("#menu__canvas");
    let menu_closeIcon = $("#menu__closeIcon");

    /*======================================================
    Initializes Menu Icon functionality -> Opens Side Menu
    ======================================================*/
    $("#menuIcon").on("click", function () {
      menuBackground.removeClass("transparent");
      menuBackground.addClass("opaque");

      menuCanvas.removeClass("translate-left");
      menuCanvas.addClass("translate-zero");

      menu_closeIcon.removeClass("transparent");
      menu_closeIcon.addClass("opaque");
    });
  });

  /*=================================================
  Calculates total items in basket*/
  const getTotalItems = () => {
    return basket.reduce(
      (total, currentItem) => (total += currentItem.count),
      0
    );
  };

  /*=================================================
  Signs out the user*/
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  /*=================================================
  Displays the username*/
  const showUser = () => {
    if (user) {
      let index = user.email.indexOf("@");
      return user.email.substring(0, index);
    } else return "Guest";
  };

  return (
    <div className="header">
      <div className="header__container">
        <MenuIcon className="header__menuIcon" id="menuIcon" />

        <Link to="/">
          <img className="header__logo" src={logo} alt="" />
        </Link>
      </div>

      <div className="header__container extend">
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>
      </div>

      <div className="header__container">
        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">Hello {showUser()}</span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          <Link to="/orders">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <Link to="/">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>

          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon className="header__basket" />
              <span className="header__optionLineTwo header__basketCount">
                {getTotalItems()}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
