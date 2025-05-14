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
            
        </div>
    );
}