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

export const CourseContent = (
  { objectives = [], learningOutcomes = [], subject = [] },
  active = [],
  req = [],
) => {
  const defaultObjectives = [
    "להבין את יסודות התכנות",
    "לשפר כישורי פתרון בעיות",
    "ללמוד כיצד לעבוד בצוותי פיתוח",
  ];

  const defaultLearningOutcomes = [
    "יכולת לכתוב קוד בסיסי",
    "היכרות עם מחזור חיים של פרויקט תוכנה",
    "שיפור חשיבה לוגית",
  ];
  const defaultSubjects = ["saddsa", "asddsa"];
  const activeLearning = ["dsagdg", "uyyuy"];
  const requirment = ["חייב לעבור"];
  return (
    <div className={styles.courseContent}>
      <ContentSection
        title="מטרות הקורס"
        items={objectives.length ? objectives : defaultObjectives}
        onAdd={() => alert("הוספת מטרה חדשה")}
      />
      <ContentSection
        title="תוצרי למידה"
        items={
          learningOutcomes.length ? learningOutcomes : defaultLearningOutcomes
        }
        onAdd={() => alert("הוספת תוצר חדש")}
      />
      <ContentSection
        title="נושאי הקורס"
        items={subject.length ? subject : defaultSubjects}
        onAdd={() => alert("הוספת נושאי הקורס")}
      />
      <ContentSection
        title="למידה פעילה"
        items={active.length ? subject : activeLearning}
        onAdd={() => alert("הוספת נושאי הקורס")}
      />
      <ContentSection
        title="דרישות הקורס"
        items={req.length ? subject : requirment}
        onAdd={() => alert("הוספת נושאי הקורס")}
      />
      <ContentSection
        title="הרכב הציון"
        items={req.length ? subject : requirment}
        onAdd={() => alert("הוספת נושאי הקורס")}
      />
      <ContentSection
        title="מבנה המטלות"
        items={req.length ? subject : requirment}
        onAdd={() => alert("הוספת נושאי הקורס")}
      />
      {/*צריך לעדכן את הרשימות לפי הצורך וגם את העיצוב בהמשך*/}
    </div>
  );
};
