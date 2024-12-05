import React, {useState} from "react";
import Bibliography from "./Bibliography";
import {CourseContent} from "./CourseContent";
import {CourseDetailsPage} from "./CourseDetailsPage";
import {CourseHeader} from "./CourseHeader";
import {InstructorDetails} from "./InstructorDetails";

function lecturerDataEntryComplete() {
    return (
        <div>
            <CourseDetailsPage/>
            {/*<CourseHeader/>*/}
            {/*<CourseContent/>*/}
            {/*<InstructorDetails/>*/}
            {/*<Bibliography/>*/}
        </div>
    )
}

export default lecturerDataEntryComplete;