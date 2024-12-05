import React from "react";
import styles from "../styles/CourseHeader.module.css";

export const CourseHeader = ({ courseCode, courseName, faculty, status }) => {
  return (
    <header className={styles.header}>
      <div className={styles.courseInfo}>
        <div className={styles.statusBadge}>{status}</div>
        <div className={styles.courseDetails}>
          <span className={styles.courseName}>{courseName}</span>
          <div className={styles.divider} />
        <div className={styles.facultyInfo}>
          <span className={styles.facultyName}>{faculty}</span>
          <div className={styles.statusIndicator} />
          <div className={styles.divider} />
          <span className={styles.courseCode}>{courseCode}</span>
        </div>
        </div>
      </div>
    </header>
  );
};
