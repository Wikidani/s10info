import React, { useEffect } from 'react';
import styles from "./styles.module.css";
import utilStyles from '../styles/utils.module.css';

const Card = ({ date, event, location, packageData }) => {
  function showArray() {
    console.log(packageData);
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.step} ${styles.completed}`}>
        <div className={styles["v-stepper"]}>
          <div className={styles.circle}></div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.content}>
          blah blah blah
        </div>
      </div>
       <div className={`${styles.step}`}>
        <div className={styles["v-stepper"]}>
          <div className={styles.circle}></div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.content}>
          blah blah blah
        </div>
      </div>
    </div>
  );
};

export default Card;
