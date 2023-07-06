import React from 'react';
import styles from "./bullet.module.css";

const Bullet = ({ content, isLastItem }) => {
    console.log(content.evento)
    //content = "aaa"
    if (isLastItem) {
        return (
            <>
                <div className={`${styles.bullet} ${styles.big}`}>
                    <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false">
                        <path d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16 9.4 4 16 4zm0-4C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0z"></path>
                        <circle cx="16" cy="16" r="6"></circle>
                    </svg>
                </div>
                {content}
            </>
        )
    } else {
        return (
            <>
                <div className={`${styles.bullet}`}>
                    <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false"><circle stroke="none" cx="16" cy="16" r="10"></circle></svg>
                </div>
                {content.evento}
            </>
        );
    }
};

export default Bullet;
