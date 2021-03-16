import React, { useEffect, useState } from "react";
import styles from "./_homePage.module.scss";
const Container = () => {
  const [currentPage, setCurrentPage] = useState("");

  const handleScroll = (e) => {
    let scrollParent = document.querySelector(
      ["div"] + "." + styles["wrapper"]
    );
    let pages = document.querySelectorAll("[section]");
    let currentPage;
    let nodeListToArray = Array.from(pages);
    let targetElement = document.querySelector("[data-id]");
    let sectionContentElement = document.querySelector("[section-id]");
    let buttonContainer = document.querySelector(
      ["div"] + "." + styles["button-container"]
    );
    setCurrentPage((prevState) => {
      let targetElementParent = document.querySelector("[content-parent]");
      let pagePositions = nodeListToArray.map((page) => {
        return {
          scrollTop: scrollParent.scrollTop - page.getBoundingClientRect().top,
          height: page.getBoundingClientRect().height,
          top: page.getBoundingClientRect().top,
          className: page.className,
          sectionContent: page.getAttribute("section-content"),
          content: page.getAttribute("section"),
          position: page.getBoundingClientRect().top,
        };
      });

      let getAbs = pagePositions.map((a) => {
        a.position = Math.abs(a.position);
        return a;
      });

      var getMin = Math.min.apply(
        Math,
        getAbs.map(function (page) {
          return page.position;
        })
      );

      var obj = getAbs.find(function (page) {
        return page.position === getMin;
      });

      currentPage = obj;
      targetElementParent.style.opacity =
        (currentPage.height - 200 * 2.5 - Math.abs(currentPage.top)) /
        (currentPage.height - 200 * 2.5);

      buttonContainer.style.opacity =
        (currentPage.height - 200 * 2.5 - Math.abs(currentPage.top)) /
        (currentPage.height - 200 * 2.5);
      targetElement.innerHTML = currentPage.content;

      sectionContentElement.innerHTML = currentPage.sectionContent;
      return {
        pages: pagePositions,
        currentPage: currentPage,
      };
    });
  };

  useEffect(() => {
    let parentContainer = document.querySelector(
      ["div"] + "." + styles["wrapper"]
    );
    parentContainer.addEventListener("scroll", handleScroll);
    return () => {
      parentContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div content-parent="" className={styles["page-content"]}>
        <p data-id="" className={styles["page-title"]}>
          Lowest Cost Solar Panels in America
        </p>
        <p section-id="" className={styles["page-text"]}>
          Money-back guarantee
        </p>
      </div>
      <div
        section-1=""
        section-content="Money-back guarantee"
        section="Lowest Cost Solar Panels in America"
        className={styles["landing-page-wrapper"]}
      >
        <div className={styles["button-container"]}>
          <button className={styles["order-button"]}>order now</button>
          <button className={styles["learn-more-button"]}>learn more</button>
        </div>
      </div>
      <div
        section-content="Starting at $69,420"
        section="Model S"
        className={styles["modelS-wrapper"]}
      ></div>
      <div
        section-content="Order Online for Touchless Delivery"
        section="Model 3"
        className={styles["model3-wrapper"]}
      ></div>{" "}
      <div
        section-content="Order Online for Touchless Delivery"
        section="Model X"
        className={styles["modelX-wrapper"]}
      ></div>
      <div
        section-content="Order Online for Touchless Delivery"
        section="Model Y"
        className={styles["modelY-wrapper"]}
      ></div>{" "}
      <div
        section-content="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        section="Solar for New Roofs"
        className={styles["solar-panel-wrapper"]}
      ></div>{" "}
      <div
        section="Accessories"
        className={styles["accessories-wrapper"]}
      ></div>
      ;
    </div>
  );
};

export default Container;
