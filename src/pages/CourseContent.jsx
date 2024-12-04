import React from "react";
import styles from "../styles/CourseContent.module.css";

const ContentSection = ({ title, items, onAdd }) => (
  <section className={styles.contentSection}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    {items.map((item, index) => (
      <div key={index} className={styles.contentItem}>
        <span className={styles.itemNumber}>{index + 1}.</span>
        <p className={styles.itemText}>{item}</p>
      </div>
    ))}
    <button
      onClick={onAdd}
      className={styles.addButton}
      aria-label={`הוסף ${title}`}
    >
      <span>+</span>
      <span>הוסף {title}</span>
    </button>
  </section>
);

export const CourseContent = ({ objectives, learningOutcomes }) => {
  return (
    <div className={styles.courseContent}>
      <ContentSection title="מטרות הקורס" items={objectives} onAdd={() => {}} />
      <ContentSection
        title="תוצרי למידה"
        items={learningOutcomes}
        onAdd={() => {}}
      />
    </div>
  );
};
