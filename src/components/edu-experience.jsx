import React from 'react';
import { useState } from 'react';


export default function EduExperience () {
    const [school, setSchool] = useState("");
    const [course, setCourse] = useState("");
    const [date, setDate] = useState("");

    
    function handleChange(e) {

        const { name, value } = e.target;

        if (name === "school") {
            setSchool(e.target.value);
        }

        if (name === "course") {
            setCourse(e.target.value);
        }
        if (name === "date") {
            setDate(e.target.value);
        }

    }

    function handleSubmit(e) {
        e.preventDefault();
    }


    const EduData = ({ school, course, date }) => {
        return (
            <div>
                <p>{school}</p>
                <p>{course}</p>
                <p>{date}</p>
            </div>
        )
    }

    return (
        <div className="edu-experience">
            <form onSubmit={handleSubmit}>

                <h1>Education Experience</h1>

            <label>
                School Name: {' '}

                <input 
                type="text"
                name='school'
                placeholder='enter school'
                value={school}
                onChange={handleChange}
                />
            </label>

            <label>
                Course of Study: {' '}

                <input 
                type="text"
                name='course'
                placeholder='enter course'
                value={course}
                onChange={handleChange}
                />
            </label>

            <label>
                Date of Study: {' '}

                <input 
                type="text"
                name='date'
                placeholder='enter year of study'
                value={date}
                onChange={handleChange}
                />
            </label>

            <button type='submit'>Add details</button>

            </form>

            <EduData school={school} course={course} date={date} />
        </div>
    );
}




//other textfields state isnt changing
// import { useState } from 'react';

// export default function EduExperience ( {onChange} ) {

//     const [schoolInfor, setSchoolInfor] = useState({ school: "", levelOfStudy: "", dateOfStudy: "" });
    
//     const handleSchoolChange = (e) => {
//         const { name, value } = e.target;
//         const updateSchoolInfor = { ...schoolInfor, [name]: value};
//         setSchoolInfor(updateSchoolInfor);
//         onChange(updateSchoolInfor); 
//     }

//      function handleSubmit (e) {
//         e.preventDefault();
//      }

//     return (

//         <div className="edu-experience">
//             <form action="" onSubmit={handleSubmit}>

//             <h1>Education Experience</h1>

//             <label htmlFor="school-name">

//                 School Name {" "}

//                 <input
//                     type="text"
//                     name="school"
//                     placeholder="school name"
//                     value={schoolInfor.school}
//                     onChange={handleSchoolChange}
//                 />
//             </label>

//             <label htmlFor="level">

//                 Leve of study {" "}

//                 <input
//                     type="text"
//                     name="level of study"
//                     placeholder="level of study"
//                     value={schoolInfor.levelOfStudy}
//                     onChange={handleSchoolChange}
//                 />
//             </label>

//             <label htmlFor="date">

//                 Date {" "}

//                 <input
//                     type="text"
//                     name="Date"
//                     placeholder="Date"
//                     value={schoolInfor.dateOfStudy}
//                     onChange={handleSchoolChange}
//                 />
//             </label>
//             </form>

//         </div>
//     );


    
// }