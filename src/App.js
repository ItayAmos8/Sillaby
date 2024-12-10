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
