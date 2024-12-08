import React from 'react';
import styles from './Header.module.css';
import home_icon from '../Icons/top_icons/home_icon.png';

export const UserSection = () => {
    return (
            <div className={styles.userSection}>
                <div className={styles.userInfo}>
                    <div className={styles.userName}>שלום, שרית מנהלה</div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cb246cbb48c2dadd8e3562035d2a8a2612e8e085ba90b4f29dac95f052ab8e0?placeholderIfAbsent=true&apiKey=4a2536c3ba5c4d84b67b8a52983aeb05"
                        className={styles.userIcon}
                        alt="User profile icon"
                    />
                </div>
                <div className={styles.notificationSection}>
                        <div className={styles.divider} role="separator"/>
                    <button className={styles.homeButton} tabIndex={0} aria-label="Home">
                        <img
                            loading="lazy"
                            src={home_icon}
                            className={styles.notificationIcon}
                            alt="Home icon"
                        />
                    </button>
                </div>
        </div>
    );
};


