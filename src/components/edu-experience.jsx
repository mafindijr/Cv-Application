import {useState} from 'react';

export default function EduExperience () {

    const [school, setSchool] = useState("");
    const [leveOfStudy, setLevelOfStudy] = useState("");
    const [dateOfStudy, setDateOfStudy] = useState("");

    function handleSchoolChange(e) {
        setSchool(e.target.value);
    }

    function handleLevelChange(e) {
        setLevelOfStudy(e.target.value);
    }

    function handleDateChange(e) {
        setDateOfStudy(e.target.value);
    }

    return (
        <div className="edu-experience">

            <h1>Education Experience</h1>

            <label htmlFor="school">
                School {" "}
                <input type='text' id="school"
                 value={school}
                  onChange={handleSchoolChange}

                 />

            </label>

            <p>School: {school}</p>


            <label htmlFor='levelOfStudy'>

                    Level Of Study {" "}

                    <input type="text"

                        id="levelOfStudy"
                        value={leveOfStudy}
                        onChange={handleLevelChange}
                    />
            </label>

            <label htmlFor='dateOfStudy'>
                Date Of Study {" "}

                <input type="text"
                    id="dateOfStudy"
                    value={dateOfStudy}
                    onChange={handleDateChange}
                />  
            </label>


        </div>
    );
}