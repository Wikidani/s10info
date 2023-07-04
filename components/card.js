import React, { useEffect } from 'react';
import styles from "./card.module.css";
import utilStyles from '../styles/utils.module.css';
import Bullet from './bullet';

const Card = ({ date, event, location, packageData }) => {
  var a = packageData[0].eventos
  function showArray() {
    console.log(packageData[0].evento);
  }
  return (
    <>
      <ul className={styles.list}>
        <li>
          <div className={`${styles.bullet} ${styles.big}`}>
            <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false">
              <path d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16 9.4 4 16 4zm0-4C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0z"></path>
              <circle cx="16" cy="16" r="6"></circle>
            </svg>
          </div>
          {packageData[0].evento}
        </li>
        {packageData.slice(1).map((item, index) => {
          //console.log(item);
          if(packageData.length === 1 ){
            return 
          }
          return (
            <li key={index}>
              <Bullet content={item}></Bullet> {/* Render the <Bullet> component for each item */}
            </li>
          );
        })}
      </ul>
    </>

  );
};

export default Card;
