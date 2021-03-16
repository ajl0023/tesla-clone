import React from "react";
import Container from "./Container";
import Navbar from "./Navbar";
import styles from "./_homePage.module.scss";
const App = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />

      <Container />
    </div>
  );
};

export default App;
