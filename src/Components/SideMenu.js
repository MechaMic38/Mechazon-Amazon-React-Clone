import "../CSS/SideMenu.css";
import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import CloseIcon from "@material-ui/icons/Close";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import $ from "jquery";

function SideMenu() {
  const [menuList, setMenuList] = useState({});
  const [{ basket, user }, dispatch] = useStateValue();

  let itemList;
  let secondaryItemList;

  /*=================================================================
  Some JQuery for the Side Menu interactivity*/
  useEffect(() => {
    let menuBackground = $("#menu__canvasBackground");
    let menuCanvas = $("#menu__canvas");
    let menu_closeIcon = $("#menu__closeIcon");

    let menu_main = $("#sideMenu__mainMenu");
    let menu_links = $("ul[data-menu-id='1'] div[data-menu-id]");
    let menu_backLinks = $("ul div.menu__backButton");

    /*======================================================
    Initializes Close Icon functionality -> Closes Side Menu
    ======================================================*/
    menu_closeIcon.on("click", function () {
      menuBackground.removeClass("opaque");
      menuBackground.addClass("transparent");

      menuCanvas.removeClass("translate-zero");
      menuCanvas.addClass("translate-left");

      menu_closeIcon.removeClass("opaque");
      menu_closeIcon.addClass("transparent");
    });

    /*======================================================
    Initializes all Main Menu Elements (div) leading to a 
    Secondary Menu
    ======================================================*/
    menu_links.on("click", function (e) {
      let target = e.target;
      let menuId = target.getAttribute("data-menu-id");
      let menuToShow = $(`ul[data-menu-id=${menuId}]`);

      menu_main.removeClass("menu--visible translate-zero");
      menu_main.addClass("translate-left");

      menuToShow.removeClass("translate-right");
      menuToShow.addClass("menu--visible translate-zero");
    });

    /*======================================================
    Initializes all Secondary Menu Back Buttons leading to the
    Main Menu
    ======================================================*/
    menu_backLinks.on("click", function (e) {
      let target = e.target;
      let menuId = target.parentElement.parentElement.getAttribute(
        "data-menu-id"
      );
      let menuToHide = $(`ul[data-menu-id=${menuId}]`);

      menu_main.removeClass("translate-left");
      menu_main.addClass("menu--visible translate-zero");

      menuToHide.removeClass("menu--visible translate-zero");
      menuToHide.addClass("translate-right");
    });
  });

  /*=================================================================
  Takes data from local file to generate the side menu*/
  useEffect(() => {
    const getMenuData = async () => {
      await fetch("/sideMenu-list.json")
        .then((response) => response.json())
        .then((data) => {
          setMenuList(data);
        });
    };

    getMenuData();
  }, []);

  /*=================================================================
  Handles the User Authentication*/
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  /*=================================================================
  Displays the name of the User*/
  const showUser = () => {
    if (user) {
      let index = user.email.indexOf("@");
      return user.email.substring(0, index);
    } else return "Guest";
  };

  /*=================================================================
  Builds the main menu of the Side Menu*/
  if (menuList.main) {
    let menuId = 1;
    itemList = menuList?.main.map(function (item) {
      if (item.isSeparator) {
        return <li className="menu__separator"></li>;
      } else if (item.isTitle) {
        return (
          <li>
            <div className="menu__title">
              <span>{item.text}</span>
            </div>
          </li>
        );
      } else if (item.isLink) {
        menuId++;
        return (
          <li>
            <div className="menu__item" data-menu-id={menuId}>
              <span>{item.text}</span>
              {item.isLink && <ChevronRightIcon className="menu__itemArrow" />}
            </div>
          </li>
        );
      } else {
        return (
          <li>
            <div className="menu__item">
              <span>{item.text}</span>
            </div>
          </li>
        );
      }
    });
  }

  /*=================================================================
  Builds all the secondary menus of the Side Menu*/
  if (menuList.secondary) {
    let menuId = 1;
    secondaryItemList = menuList?.secondary.map(function (list) {
      menuId++;
      return (
        <ul className="translate-right" data-menu-id={menuId}>
          <li>
            <div className="menu__backButton">
              <ChevronLeftIcon className="menu__backArrow" />
              <span>MAIN MENU</span>
            </div>
          </li>
          {list[`menu${menuId}`].map(function (item) {
            if (item.isSeparator) {
              return <li className="menu__separator"></li>;
            } else if (item.isTitle) {
              return (
                <li>
                  <div className="menu__title">
                    <span>{item.text}</span>
                  </div>
                </li>
              );
            } else {
              return (
                <li>
                  <div className="menu__item">
                    <span>{item.text}</span>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      );
    });
  }

  return (
    <div className="sideMenu">
      <div
        className="sideMenu__canvasBackground transparent"
        id="menu__canvasBackground"
      />

      <div className="sideMenu__canvas translate-left" id="menu__canvas">
        <CloseIcon
          className="sideMenu__closeIcon transparent"
          id="menu__closeIcon"
        />

        <Link to={!user && "/login"}>
          <div className="sideMenu__userProfile">
            <div className="sideMenu__userProfileLeft">
              <AccountCircleIcon className="sideMenu__avatar" />
            </div>

            <div className="sideMenu__userProfileRight">
              <span>Hello {showUser()}</span>
              <span>{user ? "" : ", Sign In"}</span>
            </div>
          </div>
        </Link>

        <div className="sideMenu__menu">
          <ul
            id="sideMenu__mainMenu"
            className="translate-zero menu--visible"
            data-menu-id="1"
          >
            {itemList}
            <Link to={!user && "/login"}>
              <li>
                <div onClick={handleAuthentication} className="menu__item">
                  <span>{user ? "Sign Out" : "Sign In"}</span>
                </div>
              </li>
            </Link>
          </ul>

          {secondaryItemList}
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
