import { useState } from 'react';

export default function EduExperience ( {onChange} ) {

    const [schoolInfor, setSchoolInfor] = useState({ school: "", levelOfStudy: "", dateOfStudy: "" });
    
    const handleSchoolChange = (e) => {
        const { name, value } = e.target;
        const updateSchoolInfor = { ...schoolInfor, [name]: value};
        setSchoolInfor(updateSchoolInfor);
        onChange(updateSchoolInfor); 
    }

     function handleSubmit (e) {
        e.preventDefault();
     }

    return (

        <div className="edu-experience">
            <form action="" onSubmit={handleSubmit}>

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

            <label htmlFor="level">

                Leve of study {" "}

                <input
                    type="text"
                    name="level of study"
                    placeholder="level of study"
                    value={schoolInfor.levelOfStudy}
                    onChange={handleSchoolChange}
                />
            </label>

            <label htmlFor="date">

                Date {" "}

                <input
                    type="text"
                    name="Date"
                    placeholder="Date"
                    value={schoolInfor.dateOfStudy}
                    onChange={handleSchoolChange}
                />
            </label>
            </form>

        </div>
    );


    
}