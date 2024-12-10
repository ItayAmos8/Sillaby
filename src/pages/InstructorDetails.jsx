import React from "react";
import styles from "../styles/InstructorDetails.module.css";

export const InstructorDetails = ({ email, name, officeHours, schedule }) => {
  return (
    <section id="instructorDetails" className={styles.instructorSection}>
      <h2 className={styles.sectionTitle}>פרטי המרצה</h2>
      <div className={styles.detailsContainer}>
        <div className={styles.contactInfo}>
          <div className={styles.field}>
            <input
              type="email"
              value={email}
              className={styles.input}
              aria-label="אימייל"
            />
            <label className={styles.label}>אימייל</label>
          </div>
          <div className={styles.field}>
            <input
              type="text"
              value={name}
              className={styles.input}
              aria-label="שם המרצה"
            />
            <label className={styles.label}>שם המרצה</label>
          </div>
        </div>
        <div className={styles.officeHours}>
          <h3 className={styles.subTitle}>שעות קבלה</h3>
          <div className={styles.scheduleInput}>
            <div className={styles.checkbox} role="checkbox" tabIndex="0"/>

            <input
                type="text"
                value={officeHours}
                className={styles.input}
                aria-label="שעות קבלה"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
