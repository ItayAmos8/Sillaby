import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/lecturer-page.css";
import img from "../assets/img.png";
import {Link} from "react-router-dom";

function App() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);
    return (
        <div className="app-container">
            <div className="container">
                <div className="right-container">
                    <button className="new-syllabus-btn">
                        <Link to="/create-syllabi" className="new-syllabus-btn">
                            סילבוס חדש +
                        </Link>
                    </button>
                    <div className="list-container">
                        <div className="list-item">סילבוסים כלליים</div>
                        <div className="list-divider"></div>
                        <div className="list-item">ארכיון</div>
                        <div className="list-divider"></div>
                        <div className="list-item">שניר פרימוביץ פח אשפה</div>
                    </div>
                </div>
                <div className="left-container">
                    <div className="top-screen">
                        <h3 className="your-syl">הסילבוסים שלך</h3>
                        <div className="list-divider-vert"></div>
                        <h3 className="number-of-syl"> 7 </h3>
                        <div className="list-divider-vert"></div>
                        <h3 className="number-of-syl"> 1 </h3>
                        <h3 className="number-of-syl"> 3 </h3>
                        <h3 className="number-of-syl"> 3 </h3>
                    </div>
                    <div className="filter-container">
                        <span> <input type="text" placeholder="חיפוש" className="search-box"/> </span>
                        <p>מתאריך ____________ עד תאריך __________ </p>
                        <button
                            className="calendar-button"
                            onClick={() => setShowCalendar(!showCalendar)}
                        >
                            📅
                        </button>
                        {showCalendar && (
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => {
                                    setSelectedDate(date);
                                    setShowCalendar(false); // Hide calendar after selecting a date
                                }}
                                inline
                            />
                        )}
                        {selectedDate && (

                            <div className="selected-date">
                                {selectedDate.toLocaleDateString("he-IL")}
                            </div>
                        )}
                    </div>
                    <div className="cards-container">
                        <div className="syllabus-card">
                            <div className="name">
                                <h3>קורס ניתוח מערכות</h3>
                                <p style={{ marginTop: '-10px' }}>15.05.2022</p>
                            </div>
                            <div className="name">ד"ר יריב איצקוביץ</div>
                            <div className="name">מדעי הרוח והחברה</div>
                            <div className="status status-approved">מאושר</div>
                            <img className="image" src={img} alt={" "}/>
                        </div>
                    </div>
                    <div className="cards-container">
                        <div className="syllabus-card">
                            <div className="name">
                                <h3>קורס ניתוח מערכות</h3>
                                <p style={{ marginTop: '-10px' }}>15.05.2022</p>
                            </div>
                            <div className="name">ד"ר יריב איצקוביץ</div>
                            <div className="name">מדעי הרוח והחברה</div>
                            <div className="status status-pending">בהמתנה</div>
                            <img className="image" src={img} alt={" "}/>
                        </div>
                    </div>
                    <div className="cards-container">
                        <div className="syllabus-card">
                            <div className="name">
                                <h3>קורס ניתוח מערכות</h3>
                                <p style={{ marginTop: '-10px' }}>15.05.2022</p>
                            </div>
                            <div className="name">ד"ר יריב איצקוביץ</div>
                            <div className="name">מדעי הרוח והחברה</div>
                            <div className="status status-approved">מאושר</div>
                            <img className="image" src={img} alt={" "}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
