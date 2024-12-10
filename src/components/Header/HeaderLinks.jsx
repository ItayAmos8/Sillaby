import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export const HeaderLinks = () => {
  return (
    <div className={styles.userSection}>
      <div className={styles.notificationSection}>
        <div className={styles.divider} role="separator" />
        <Link to="/lecturer-page">Lecturer Page</Link>
        <div className={styles.divider} role="separator" />|
        <Link to="/LecturerDataEntryComplete">LecturePageData</Link>
        <div className={styles.divider} role="separator" />
        <Link to="/Bibliography">Bibi </Link>
        <div className={styles.divider} role="separator" />
        <div className={styles.userInfo}>
          <Link to="/create-syllabi">Create Syllabi</Link>
          {/*TODO להוסיף את הלינקים האלה לHEADER*/}
        </div>
        <div className={styles.divider} role="separator" />
        <Link to={"/examCard"}>Exam Card</Link>
      </div>
    </div>
  );
};
