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

            <label htmlFor="shool-name">

                School Name {" "}

                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={schoolInfor.school}
                    onChange={handleSchoolChange}
                />
            </label>

            <p> {schoolInfor.school} </p>

        </div>
    );


    
}