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
}