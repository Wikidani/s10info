import Head from 'next/head';
import { useState } from 'react';
import utilStyles from '../styles/utils.module.css';
import { S10 } from "../node_modules/s10"

export default function Home() {
  function calculateCheckDigit(firstEightDigits) {
    if (!firstEightDigits) {
      throw new Error('Empty or incorrect first eight digits passed.');
    }

    if (typeof firstEightDigits === 'number') {
      firstEightDigits = firstEightDigits.toString().padStart(8, '0');
    }

    const digits = firstEightDigits.split('');
    const sum = digits[0] * 8
      + digits[1] * 6
      + digits[2] * 4
      + digits[3] * 2
      + digits[4] * 3
      + digits[5] * 5
      + digits[6] * 9
      + digits[7] * 7;

    let checkDigit = 11 - (sum % 11);

    if (checkDigit === 10) {
      return 0;
    }

    if (checkDigit === 11) {
      return 5;
    }

    return checkDigit;
  }

  function trackingNumberIsValid(trackingNumber) {
    if (!trackingNumber) {
      return false;
    }

    if (trackingNumber.length !== 13) {
      return false;
    }

    if (!trackingNumber.match(/[A-Z]{2}\d{9}[A-Z]{2}/)) {
      return false;
    }

    const eightNumbers = trackingNumber.substr(2, 8);
    const checkDigit = parseInt(trackingNumber.substr(10, 1));
    const expectedCheckDigit = calculateCheckDigit(eightNumbers);

    if (checkDigit === expectedCheckDigit) {
      return true;
    }
    return false;
  }
  const [isInputOk, setIsInputOk] = useState(true);
  const [inputContent, setInputContent] = useState('');

  const handleTrackButtonClick = () => {
    if (trackingNumberIsValid(inputContent)) {
      console.log("das rite nigga")
      setIsInputOk(true)
    } else {
      console.log("dat shit wack")
      setIsInputOk(false)
    }
    console.log(trackingNumberIsValid(inputContent)); // You can replace console.log with your desired logic
  };

  const handleInputChange = (event) => {
    setInputContent(event.target.value);
  };
  return (
    <>
      <Head>
        <title> Track your stuff! </title>
      </Head>
      <div className={utilStyles.cardStyle}>
        <div className={utilStyles.searchBarStyle}>
          <div className={utilStyles.titleContainer}>
            <h2 className={utilStyles.title} > Track your stuff here!</h2>
          </div>
          <div className={utilStyles.searchComponents}>
            <input
              className={utilStyles.inputStyle}
              type="text"
              placeholder="Let's see where your package is"
              onChange={handleInputChange}
            />
            <button className={utilStyles.trackButton} onClick={handleTrackButtonClick}>
              Track
            </button>
          </div>
          <div className={utilStyles.validatorContainer}>
            {isInputOk ? (
              ""
            ) : (
              <p className={utilStyles.validatorText} >The tracking code is invalid.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
