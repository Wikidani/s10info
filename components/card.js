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
          <Bullet content={packageData[0].evento} isLastItem={true} ></Bullet> {/* Render the <Bullet> component for each item */}

        </li>
        {packageData.slice(1).map((item, index) => {
          //console.log(item);
          if (packageData.length === 1) {
            return
          }
          return (
            <li key={index}>
              <Bullet content={item} isLastItem={false} ></Bullet> {/* Render the <Bullet> component for each item */}
            </li>
          );
        })}
      </ul>
    </>

  );
};

export default Card;
