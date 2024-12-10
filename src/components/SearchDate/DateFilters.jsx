import React from "react";
import styles from "./SearchDateFilter.modules.css";

export function DateFilter() {
  return (
    <div className={styles.dateFilterContainer}>
      <div className={styles.dateRangeWrapper}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3029ed0c787fc08ccee323e58c9757a8d7a3eda981880ad4362a28548ff548b0?placeholderIfAbsent=true&apiKey=4a2536c3ba5c4d84b67b8a52983aeb05"
          className={styles.calendarIcon}
          alt=""
        />
        <div className={styles.dateInputGroup}>
          <div className={styles.dateSeparator} />
          <div>עד תאריך</div>
          <div className={styles.dateSeparator} />
          <div>מתאריך</div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/10f5c7a50e0459fde7617122ba153e3eacc80357d68d63e3a3f60694aef6c055?placeholderIfAbsent=true&apiKey=4a2536c3ba5c4d84b67b8a52983aeb05"
        className={styles.filterIcon}
        alt=""
      />
    </div>
  );
}
