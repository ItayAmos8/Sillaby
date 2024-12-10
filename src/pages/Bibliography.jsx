import React from "react";
import styles from "../styles/Bibliography.module.css";

const BibliographyItem = ({ citation, number, onEdit, onDelete }) => (
    <div id = "bibi" className={styles.bibliographyItem}>
        <div className={styles.actions}>
            <button onClick={onDelete} className={styles.actionButton} aria-label="מחק">
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbdc30e005efb5f7e5bf98afe3fcb87a7dcef6dfb3818c9dd8ad266396ba1311?placeholderIfAbsent=true&apiKey=b4ad405feb554940b2be5fa109144da2"
                    alt=""
                />
            </button>
            <button onClick={onEdit} className={styles.actionButton} aria-label="ערוך">
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cf57bd1df110045c47e5f3f39f5f7bc83a49707389b21ee51db677ad19ced34?placeholderIfAbsent=true&apiKey=b4ad405feb554940b2be5fa109144da2"
                    alt=""
                />
            </button>
        </div>
        <div className={styles.citation}>
            <div className={styles.citationItem}>
                <span className={styles.number}>{number}.</span>
                <p className={styles.citationText}>{citation}</p>
            </div>
            <div className={styles.divider}>

            </div>

        </div>
    </div>
);

const Bibliography = ({
                          requiredReading = [
                              { citation: "The Great Gatsby by F. Scott Fitzgerald" },
                              { citation: "To Kill a Mockingbird by Harper Lee" },
                          ],
                          optionalReading = [
                              { citation: "1984 by George Orwell" },
                              { citation: "Moby Dick by Herman Melville" },
                          ],
                      }) => {
    console.log("requiredReading:", requiredReading);
    console.log("optionalReading:", optionalReading);

    return (
        <section className={styles.bibliography}>
            <div className={styles.header}>
                <h2 className={styles.title}>ביבליוגרפיה</h2>
                <div className={styles.citationStyle}>MLA</div>
            </div>

            <h3 className={styles.sectionTitle}>קריאת חובה</h3>
            <div className={styles.readingList}>
                {requiredReading && requiredReading.length > 0 ? (
                    requiredReading.map((item, index) => (
                        <BibliographyItem
                            key={index}
                            citation={item.citation}
                            number={index + 1}
                            onEdit={() => console.log("Edit item:", item)}
                            onDelete={() => console.log("Delete item:", item)}

                        />

                    ))

                ) : (
                    <p>אין קריאת חובה זמינה.</p>
                )}
            </div>
            <div className={styles.citationItem}>
                <span className={styles.number}>+</span>
                <p className={styles.citationText}>הוספת מקור לקריאת חובה</p>
            </div>
            <div className={styles.divider}></div>

                <h3 className={styles.sectionTitle}>קריאת רשות</h3>
                <div className={styles.readingList}>
                    {optionalReading && optionalReading.length > 0 ? (
                        optionalReading.map((item, index) => (
                            <BibliographyItem
                                key={index}
                                citation={item.citation}
                                number={index + 1}
                                onEdit={() => console.log("Edit item:", item)}
                                onDelete={() => console.log("Delete item:", item)}
                            />
                        ))
                    ) : (
                        <p>אין קריאת רשות זמינה.</p>
                    )}
                </div>
        </section>
);
};

export default Bibliography;
