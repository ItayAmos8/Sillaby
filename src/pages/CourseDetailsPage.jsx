import React, { useEffect, useState } from "react";
import { CourseHeader } from "./CourseHeader";
import { CourseContent } from "./CourseContent";
import styles from "../styles/CourseDetailsPage.module.css";
import menu1 from "../assets/menu1.png";
import menu2 from "../assets/menu2.png";
import menu3 from "../assets/menu3.png";
import menu4 from "../assets/menu4.png";
import menu5 from "../assets/menu5.png";
import menu6 from "../assets/menu6.png";
import menu7 from "../assets/menu7.png";
import menu8 from "../assets/menu8.png";
import menu9 from "../assets/menu9.png";
import Bibliography from "./Bibliography";
import { InstructorDetails } from "./InstructorDetails";

export const CourseDetailsPage = () => {
    const sections = [
        { id: "instructorDetails", label: "פרטי המרצה", image: menu1 },
        { id: "objectives", label: "מטרות הקורס", image: menu2 },
        { id: "learningOutcomes", label: "תוצרי למידה", image: menu3 },
        { id: "subjects", label: "נושאי הקורס", image: menu4 },
        { id: "activeLearning", label: "למידה פעילה", image: menu5 },
        { id: "requirements", label: "דרישות הקורס", image: menu6 },
        { id: "grading", label: "הרכב הציון", image: menu7 },
        { id: "assignments", label: "מבנה המטלות", image: menu8 },
        { id: "bibliography", label: "ביבליוגרפיה", image: menu9 },
    ];

    const [currentMenuImage, setCurrentMenuImage] = useState(menu1);
    const [activeSection, setActiveSection] = useState("instructorDetails");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const section = sections.find((sec) => sec.id === entry.target.id);
                        if (section) {
                            setActiveSection(section.id);
                            setCurrentMenuImage(section.image);
                        }
                    }
                });
            },
            {threshold : 1} // rootMargin מזיז את נקודת ההתראה 100 פיקסלים למעלה
        );

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [sections]);

    return (
        <div className={styles.pageContainer}>
            <CourseHeader
                courseCode="20/05/02"
                courseName="מבוא לפסיכולוגיה ארגונית"
                faculty="הפקולטה למדעי החברה והרוח"
                status="טיוטה"
            />

            <div className={styles.content}>
                {/* תפריט צדדי */}
                <nav className={styles.sideMenu}>
                    <div className={styles.imageContainer}>
                        <img src={currentMenuImage} alt="תפריט ניווט" className={styles.menuImage} />
                        <ul className={styles.linkOverlay}>
                            {sections.map((section) => (
                                <li key={section.id}>
                                    <a href={`#${section.id}`} aria-label={section.label}></a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                {/* תוכן הקורס */}
                <main className={styles.mainContent}>
                    <section id="instructorDetails" className={styles.section}>
                        <InstructorDetails />
                    </section>
                    <section id="objectives" className={styles.section}>
                        <CourseContent />
                    </section>

                    <section id="bibliography" className={styles.section}>
                        <h2>ביבליוגרפיה</h2>
                        <Bibliography />
                    </section>
                </main>
            </div>
        </div>
    );
};
