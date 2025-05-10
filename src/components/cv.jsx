import { useState } from "react";
import GeneralInfor from "./general-info";
import EduExperience from "./edu-experience";
import PracExperience from "./prac-experience"

export default function CV() {
    const [generalInfo, setGeneralInfo] = useState({ name: "", email: "", phone: "" });
    const [eduExperience, setEduExperience] = useState({ school: "", levelOfStudy: "", dateOfStudy: "" });
    const [pracExperience, setPracExperience] = useState({ compnay: '', jobTitle: '', dateOfWork: '', description: '' });

    const handleGeneralInfoChange = (info) => {
        setGeneralInfo(info);
    };

    const handleEduExperienceChange = (info) => {
        setEduExperience(info);
    }

    const handlePracExperience = (infor) => {
        setPracExperience(infor);
    }

    return (
        <div className="cv">
            <h1>CV</h1>
            <GeneralInfor onChange={handleGeneralInfoChange} />
            <EduExperience onChange={handleEduExperienceChange}/>
            <PracExperience onChange={handlePracExperience} />
            
            
            <div>
                    <h1>Review</h1>

                <h2>General Information</h2>
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

            <div>
                <h2>Practical Experience</h2>
                <p>Compnay name: {pracExperience.compnay}</p>
                <p>Job title: {pracExperience.jobTitle}</p>
                <p>Date: {pracExperience.dateOfWork}</p>
                <p>Job description: {pracExperience.description}</p>
            </div>
            
           
        </div>
    );
}