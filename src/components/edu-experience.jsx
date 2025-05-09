import { useState } from 'react';

export default function EduExperience ( {onChange} ) {

    const [schoolInfor, setSchoolInfor] = useState({school: "", levelOfStudy: "", dateOfStudy: ""});
    
    const handleSchoolChange = (e) => {
        const { name, value } = e.target;
        const updateSchoolInfor = { ...schoolInfor, [name]: value};
        setSchoolInfor(updateSchoolInfor);
        onChange(updateSchoolInfor); 
    }

    return (

        <div className="edu-experience">

            <h1>Education Experience</h1>

            <label htmlFor="school-name">

                School Name {" "}

                <input
                    type="text"
                    name="school"
                    placeholder="school name"
                    value={schoolInfor.school}
                    onChange={handleSchoolChange}
                />
            </label>

        </div>
    );


    
}