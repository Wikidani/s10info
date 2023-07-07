import React, { useEffect } from 'react';
import styles from "./card.module.css";
import Bullet from './bullet';
import Image from 'next/image'
import homeIcon from '../public/home.png'
import Head from 'next/head'
import { useRouter } from 'next/router';

const Card = ({ date, event, location, packageData }) => {
  const router = useRouter();
  function goBack() {
    router.push({
      pathname: '/',
      //packageId: { inputContent },
    });
  }
  return (
    <>
      <Head>
        <title> Trackin your stuff </title>
      </Head>
      <Image
        src={homeIcon}
        width={24}
        height={24}
        alt="Home icon"
        onClick={goBack}
      />

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
