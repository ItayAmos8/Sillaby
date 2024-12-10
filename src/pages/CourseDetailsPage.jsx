import React from "react";
import { CourseHeader } from "./CourseHeader";
import { InstructorDetails } from "./InstructorDetails";
import { CourseContent } from "./CourseContent";
import Bibliography from "./Bibliography";
import styles from "../styles/CourseDetailsPage.module.css";

export const CourseDetailsPage = () => {
  const courseData = {
    courseCode: "20/05/02",
    courseName: "מבוא לפסיכולוגיה ארגונית",
    faculty: "הפקולטה למדעי החברה והרוח",
    status: "טיוטה",
    instructor: {
      email: "itzkovichyariv@mx.kinneret.ac.il",
      name: 'ד"ר איצקוביץ יריב',
      officeHours: "בתאום מראש",
    },
    objectives: ["פירוט מטרות הקורס"],
    learningOutcomes: ["יכירו הבדלים בין אישיים ואת משמעותיהם לעבודה ולארגון"],
    bibliography: {
      required: [
        {
          citation:
            "מאיירס, ג',ד' (2012). פסיכולוגיה חברתית. תל –אביב: האוניברסיטה הפתוחה",
        },
        {
          citation:
            "Ashleigh, M., & Mansi, A. (2012). The Psychology of people in organizations. London. U.K. Pearson.",
        },
      ],
      optional: [
        {
          citation:
            "להמן,א' וגונט, ר' (2000). פסיכולוגיה חברתית. תל אביב: האוניברסיטה הפתוחה",
        },
      ],
    },
  };

  return (
    <div className={styles.pageContainer}>
      <CourseHeader
        courseCode={courseData.courseCode}
        courseName={courseData.courseName}
        faculty={courseData.faculty}
        status={courseData.status}
      />

      <main className={styles.mainContent}>
        <InstructorDetails
          email={courseData.instructor.email}
          name={courseData.instructor.name}
          officeHours={courseData.instructor.officeHours}
        />

        <CourseContent
          objectives={courseData.objectives}
          learningOutcomes={courseData.learningOutcomes}
        />

        <Bibliography
          requiredReading={courseData.bibliography.required}
          optionalReading={courseData.bibliography.optional}
        />
      </main>

      <button className={styles.submitButton} aria-label="שליחה">
        שליחה
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8a66b861df9b8e8fff77288c657c86ae405b1f9ed0a4b8a0dc1167abfda0220?placeholderIfAbsent=true&apiKey=b4ad405feb554940b2be5fa109144da2"
          alt=""
        />
      </button>
    </div>
  );
};
