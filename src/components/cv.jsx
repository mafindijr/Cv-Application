import { useState } from "react";
import GeneralInfor from "./general-info";
import EduExperience from "./edu-experience";
import PracExperience from "./prac-experience";


export default function CV() {

    const [generalInfo, setGeneralInfo] = useState({ name: "", email: "", phone: "" });
    const [pracExperience, setPracExperience] = useState({ name: "", jobTitle: "", description: "", dateOfWork: "" });


    const handleGeneralInfoChange = (info) => {
        setGeneralInfo(info);
    };

    const handlePracExperienceChange = (experience) => {
        setPracExperience(experience);
    }

    return (
        <div className="cv">
            <h1>CV</h1>
            <GeneralInfor onChange={handleGeneralInfoChange} />
            <EduExperience />
            <PracExperience onChange={handlePracExperienceChange} />
            <div>
                <h2>Preview</h2>
                <p>Name: {generalInfo.name}</p>
                <p>Email: {generalInfo.email}</p>
                <p>Phone: {generalInfo.phone}</p>
            </div>
            
            <div>
                <h2>Practical Experience</h2>
                <p>Company: {pracExperience.name}</p>
                <p>Job Title: {pracExperience.jobTitle}</p>
                <p>Description: {pracExperience.description}</p>
                <p>Date Of Work: {pracExperience.dateOfWork}</p>
        </div>

        </div>
    );
}