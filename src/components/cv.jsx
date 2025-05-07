import { useState } from "react";
import GeneralInfor from "./general-info";
import EduExperience from "./edu-experience";
import PracExperience from "./prac-experience";

export default function CV() {
    const [generalInfo, setGeneralInfo] = useState({ name: "", email: "", phone: "" });

    const handleGeneralInfoChange = (info) => {
        setGeneralInfo(info);
    };

    return (
        <div className="cv">
            <h1>CV</h1>
            <GeneralInfor onChange={handleGeneralInfoChange} />
            <EduExperience />
            <PracExperience />
            <div>
                <h2>Preview</h2>
                <p>Name: {generalInfo.name}</p>
                <p>Email: {generalInfo.email}</p>
                <p>Phone: {generalInfo.phone}</p>
            </div>
        </div>
    );
}