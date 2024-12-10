import React from "react";
import "../styles/create-syllabi.css";
import Path_comment_multi from "../Icons/notifictions_componnent_icons/Path _ comment-multi.png";
import styles from "../styles/CourseHeader.module.css";

function createSyllabi() {
  return (
    <div className="container">
      <div className="top-menu">
        <div className="top-menu-item">
          <div className="inside-menu">
            <button className="top-button">
              {" "}
              הערות
              <img src={Path_comment_multi} className="image" alt="asd"></img>
            </button>
            <button className="top-button">
              פעולות
              <img src={Path_comment_multi} className="image" alt="asd"></img>
            </button>
            <button className="top-button">
              הצגה
              <img src={Path_comment_multi} className="image" alt="asd"></img>
            </button>
            <div className={styles.verticalAlign}></div>
          </div>
        </div>
        <div className="list-divider"></div>
        <div className="bottom-menu">
          <div className="status">טיוטה</div>
        </div>
      </div>
    </div>
  );
}

export default createSyllabi;
