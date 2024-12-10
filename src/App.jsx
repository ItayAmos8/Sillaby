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

import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import LecturerPage from "./pages/LecturerPage";
import CreateSyllabi from "./pages/CreateSyllabi";
import Bibliography from "./pages/Bibliography";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Headers";
import LecturerDataEntryComplete from "./pages/LecturerDataEntryComplete";
import { ExamCard } from "./pages/ExamCard/ExamCard";
function App() {
  return (
    <Router>
      <nav>
        <Header />
      </nav>
      <Routes>
        {/*<Route path="/" element={<Home />} />*/}
        <Route path="/Bibliography" element={<Bibliography />} />
        <Route path="/create-syllabi" element={<CreateSyllabi />} />
        <Route path="/lecturer-page" element={<LecturerPage />} />
        <Route
          path="/LecturerDataEntryComplete"
          element={<LecturerDataEntryComplete />}
        />
        <Route path="/examCard" element={<ExamCard />} />
      </Routes>
    </Router>
  );
}

export default App;
