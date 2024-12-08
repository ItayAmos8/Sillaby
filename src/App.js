// import React from 'react';
// import './App.css';
//
// function App() {
//     return (
//
//         <div className="app">
//             {/* סרגל עליון */}
//             <nav className="navbar">
//                 <div className="navbar-title">התראות</div>
//             </nav>
//
//             {/* כותרת ראשית */}
//             <header className="header">
//                 <h1>הסילבוסים שלך</h1>
//                 <button className="new-syllabus-btn">
//                     סילבוס חדש +
//                 </button>
//             </header>
//
//             {/* אזור חיפוש וסינון */}
//             <div className="filters">
//                 <input type="text" placeholder="חיפוש" className="search-box" />
//                 <div className="date-filters">
//                     {/*<input type="date" className="date-input" />*/}
//                     {/*<input type="date" className="date-input" />*/}
//                 </div>
//             </div>
//
//             {/* רשימת כרטיסים */}
//             <section className="syllabus-list">
//                 <h2 className="date-header">מאי 2022</h2>
//                 <div className="syllabus-card">
//                     <div className="status status-pending">בהמתנה</div>
//                     <div className="details">
//                         <h3>קורס פסיכולוגיה ארגונית</h3>
//                         <p>12.05.2022</p>
//                     </div>
//                 </div>
//
//                 <div className="syllabus-card">
//                     <div className="status status-approved">מאושר</div>
//                     <div className="details">
//                         <h3>קורס ניתוח מערכות</h3>
//                         <p>15.05.2022</p>
//                     </div>
//                 </div>
//                 <div className="syllabus-card">
//                     <div className="status status-approved">מאושר</div>
//                     <div className="details">
//                         <h3>מערכות מבוזרות</h3>
//                         <p>15.05.2022</p>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }
//
// export default App;

import React, {useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import LecturerPage from "./pages/lecturer-page";
import CreateSylabi from "./pages/create-syllabi";
import Bibliography from "./pages/Bibliography";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./header/Headers";
import home_icon from "./Icons/top_icons/home_icon.png";
import person_icon from "./Icons/top_icons/account_circle_FILL0.png";
import notification_icon from "./Icons/top_icons/notifications_FILL0_.png";
import LecturerDataEntryComplete from "./pages/lecturerDataEntryComplete";
import {ExamCard} from "./ExemCard/ExamCard";
function App() {
    return (

        <Router>
            <nav>
                <Header></Header>
            </nav>
            <Routes>
                {/*<Route path="/" element={<Home />} />*/}
                <Route path="/Bibliography" element={<Bibliography />} />
                <Route path="/create-syllabi" element={<CreateSylabi />} />
                <Route path="/lecturer-page" element={<LecturerPage />} />
                <Route path="/LecturerDataEntryComplete" element={<LecturerDataEntryComplete/>}/>
                <Route path="/examCard" element={<ExamCard/>}/>
            </Routes>
        </Router>

    );
}

export default App;
