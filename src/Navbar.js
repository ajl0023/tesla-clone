import React, { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
const Navbar = () => {
  const closeSideMenu = () => {
    let targetElement = document.querySelector(
      ["input"] + "." + styles["burger-input"]
    );
    if (targetElement.checked) {
      document.body.classList.add(styles["hide-scroll"]);
    } else {
      document.body.classList.remove(styles["hide-scroll"]);
    }

    targetElement.checked = false;
  };
  const handleScroll = (e) => {
    let targetElement = document.querySelector(
      ["input"] + "." + styles["burger-input"]
    );

    if (targetElement.checked) {
      document.body.classList.add(styles["hide-scroll"]);
    } else {
      document.body.classList.remove(styles["hide-scroll"]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleScroll, {
      passive: false,
    });
    window.addEventListener("resize", closeSideMenu);

    return () => {
      document.removeEventListener("click", handleScroll);
      window.removeEventListener("resize", closeSideMenu);
    };
  }, []);
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <div className={styles["logo-container"]}>
          <img className={styles["logo"]} src="/images/logo.svg" alt="" />
        </div>
        <div className={styles["item-container"]}>
          <li>Model 3</li>
          <li>Model X</li>
          <li>Model Y</li>
          <li>Solar Roof</li>
          <li>Solar Panels</li>
        </div>
        <div className={styles["user-options-container"]}>
          <li>Shop</li>
          <li>Tesla Account</li>
        </div>
        <input
          type="checkbox"
          id="burger-trigger"
          className={styles["burger-input"]}
        />{" "}
        <label htmlFor="burger-trigger" className={styles["burger-label"]}>
          <span className={styles["main-trigger-icon-container"]}>
            <i className={styles["main-trigger-icon"]}></i>
          </span>
        </label>
        <div className={styles["side-menu-container"]}>
          <ul className={styles["side-menu-item-container"]}>
            <li>Existing Inventory</li>
            <li>Used Inventory</li>
            <li>Trade-In</li>
            <li>Cybertruck</li>
            <li>Roadster</li>
            <li>Semi</li>
            <li>Charging</li>
            <li>Powerwall</li>
            <li>Commercial Solar</li>
            <li>Test Drive</li>
            <li>Find Us</li>
            <li>Support</li>
            <li>Shop</li>
            <li className={styles["additional-menu-items"]}>Model 3</li>
            <li className={styles["additional-menu-items"]}>Model X</li>
            <li className={styles["additional-menu-items"]}>Model Y</li>
            <li className={styles["additional-menu-items"]}>Solar Roof</li>
            <li className={styles["additional-menu-items"]}>Solar Panels</li>
            <li className={styles["additional-menu-items"]}>Tesla Account</li>
          </ul>
        </div>
        <div onClick={closeSideMenu} className={styles["header-mask"]}></div>
      </div>
    </div>
  );
};

export default Navbar;
