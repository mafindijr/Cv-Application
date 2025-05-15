import { useState } from "react";
import GeneralInfor from "./general-info";
import EduExperience from "./edu-experience";
import PracExperience from "./prac-experience";

export default function CV() {
    const [generalInfo, setGeneralInfo] = useState({});
    const [eduExperience, setEduExperience] = useState({});
    const [pracExperience, setPracExperience] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        // All data is available here
        console.log({ generalInfo, eduExperience, pracExperience });
        // You can keep the state or clear it here as needed
    };

    return (
        <div className="cv">

            <div>

                <div>
                <h1>CV Builder</h1>
                <p>Fill out the form below to create your CV.</p>
            </div>
            

                <form onSubmit={handleSubmit}>
                <GeneralInfor data={generalInfo} setData={setGeneralInfo} />
                <EduExperience data={eduExperience} setData={setEduExperience} />
                <PracExperience data={pracExperience} setData={setPracExperience} />
                <button type="submit">Submit</button>
            </form>
            </div>

            <div>
                <h1>Preview Data</h1>

                <div>
                    <h2>General Information</h2>
                    <p>Name: {generalInfo.name}</p>
                    <p>Email: {generalInfo.email}</p>
                    <p>Phone: {generalInfo.phone}</p>
                </div>

                <div>
                    <h2>Educational Experience</h2>
                    <p>School: {eduExperience.school}</p>
                    <p>Degree: {eduExperience.degree}</p>
                    <p>Year: {eduExperience.year}</p>
                </div>

                <div>
                    <h2>Practical Experience</h2>
                    <p>Company: {pracExperience.company}</p>
                    <p>Position: {pracExperience.position}</p>
                    <p>Description: {pracExperience.jobDescription}</p>
                    <p>Year: {pracExperience.year}</p>
                </div>
            </div>
            
        </div>
    );
}