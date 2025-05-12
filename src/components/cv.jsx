import { useState } from "react";
import GeneralInfor from "./general-info";
import EduExperience from "./edu-experience";
import PracExperience from "./prac-experience"

export default function CV() {

    return (
        <div className="cv">

            <h1>Write Up Your CV</h1>

            <GeneralInfor />
            <EduExperience />
            <PracExperience />
            

            {/* <div>
                <h2>Education Experience</h2>
                <p>School: {eduExperience.school}</p>
                <p>Level of Study: {eduExperience.levelOfStudy}</p>
                <p>Date of Study: {eduExperience.dateOfStudy}</p>
            </div> */}
        </div>
    );
}