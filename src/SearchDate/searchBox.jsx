import React from 'react';
import styles from './SearchDateFilter.modules.css';

export function SearchBox() {
    return (
        <div className={styles.searchContainer} role="search">
            <div className={styles.searchBox}>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2db4923332a2f4af9bbf6990fa413fb19263b40227919a2fa015fd1a8ccbce9?placeholderIfAbsent=true&apiKey=4a2536c3ba5c4d84b67b8a52983aeb05"
                    className={styles.searchIcon}
                    alt=""
                />
                <div className={styles.searchInputWrapper}>
                    <label htmlFor="searchInput" className={styles.visuallyHidden}>חיפוש</label>
                    <input
                        type="search"
                        id="searchInput"
                        placeholder="חיפוש"
                        className={styles.searchInput}
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/10caf55da825cccd80d981f58ea72816f6d7dae6dedaeb615c43613b1f850d9b?placeholderIfAbsent=true&apiKey=4a2536c3ba5c4d84b67b8a52983aeb05"
                        className={styles.searchInputIcon}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}