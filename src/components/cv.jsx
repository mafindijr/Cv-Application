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
            <h1>Write Up Your CV</h1>
            <form onSubmit={handleSubmit}>
                <GeneralInfor data={generalInfo} setData={setGeneralInfo} />
                <EduExperience data={eduExperience} setData={setEduExperience} />
                <PracExperience data={pracExperience} setData={setPracExperience} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}