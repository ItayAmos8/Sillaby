import React from "react";
import styles from "../styles/CourseHeader.module.css";
import grayCircle from "../assets/gray_circle.png"
export const CourseHeader = ({ courseCode, courseName, faculty, status }) => {
    return (
        <header className={styles.header}>
            <div className={styles.titleSection}>
                <h1 className={styles.titleText}>הצגה</h1>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/326027b7aa64b32ed10c03d1f8481d4e99582390250ca9ca36e2443dfbf995ee?placeholderIfAbsent=true&apiKey=4a2536c3ba5c4d84b67b8a52983aeb05"
                    className={styles.titleIcon}
                    alt="icon"
                />
            </div>
            <div className={styles.verticalAlign}></div>
            <div className={styles.courseInfo}>
                <div className={styles.courseDetails}>
                    <span className={styles.statusBadge}>{status}</span>
                    {/*TODO:/!*<div className={styles.circularDivider}/>*!/*/}
                    <span >
                    <img className={styles.gray} src = {grayCircle} alt="asdads"></img>
                    </span>
                    <span className={styles.facultyName}>{faculty}</span>
                    <div className={styles.divider}/>
                    <span className={styles.courseName}>{courseName}</span>
                    <div className={styles.divider}/>
                    <span className={styles.courseCode}>{courseCode}</span>
                </div>
            </div>
        </header>
    );
};
