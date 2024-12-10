import * as React from "react";
import styles from "./ExamCard.module.css";

export const ExamCard = () => {
  return (
    <div className={styles.examCard}>
      <div className={styles.statusIndicator} />
      <div className={styles.courseSection}>
        <div className={styles.courseInfo}>
          <div className={styles.courseTitle}>מבוא לפסיכולוגיה ארגונית</div>
          <div className={styles.examDate}>12.05.2022</div>
        </div>
      </div>
      <div className={styles.professorLabel}>ד״ר יריב איצקוביץ</div>
      <div className={styles.facultyLabel}>מדעי הרוח</div>
      <div className={styles.statusContainer}>
        <div className={styles.statusBar} />
        <div className={styles.statusLabel} role="status" tabIndex="0">
          בבחינה
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/51737691577451d18839b57891fa3760bfc9e44f87190c2ba649bfa09cd59c57?placeholderIfAbsent=true&apiKey=4a2536c3ba5c4d84b67b8a52983aeb05"
          className={styles.statusIcon}
          alt="Status indicator icon"
        />
      </div>
    </div>
  );
};
