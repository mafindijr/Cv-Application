import { useState } from "react";
import GeneralInfor from "./general-info";
import EduExperience from "./edu-experience";

export default function CV() {
    const [generalInfo, setGeneralInfo] = useState({ name: "", email: "", phone: "" });
    const [eduExperience, setEduExperience] = useState({ school: "", levelOfStudy: "", dateOfStudy: "" });

    const handleGeneralInfoChange = (info) => {
        setGeneralInfo(info);
    };

    const handleEduExperienceChange = (info) => {
        setEduExperience(info);
    }

    return (
        <div className="cv">
            <h1>CV</h1>
            <GeneralInfor onChange={handleGeneralInfoChange} />
            <EduExperience onChange={handleEduExperienceChange}/>
            
            
            <div>
                <h2>Preview</h2>
                <p>Name: {generalInfo.name}</p>
                <p>Email: {generalInfo.email}</p>
                <p>Phone: {generalInfo.phone}</p>
            </div>

            <div>
                <h2>Education Experience</h2>
                <p>School: {eduExperience.school}</p>
                <p>Level of Study: {eduExperience.levelOfStudy}</p>
                <p>Date of Study: {eduExperience.dateOfStudy}</p>
            </div>
            
           
        </div>
    );
}