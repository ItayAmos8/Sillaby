import React from 'react';
import styles from './Header.module.css';

export const LogoGroup = () => {
    return (
        <div className={styles.logoGroup}>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9db2ed83198add601024df066317d1b2159d32960bb35f732fc327916ed25d5a?placeholderIfAbsent=true&apiKey=4a2536c3ba5c4d84b67b8a52983aeb05"
                className={styles.logoImage}
                alt="Company primary logo"
            />
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3cc4696510091317c3750b86ac24e3c476307382f5792b71effa2cb075b5224?placeholderIfAbsent=true&apiKey=4a2536c3ba5c4d84b67b8a52983aeb05"
                className={styles.secondaryLogo}
                alt="Company secondary logo"
            />
        </div>
    );
};