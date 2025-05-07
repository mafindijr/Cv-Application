import {useState} from 'react';

export default function PracExperience () {

    const [PExperence, setPExperience] = useState({name: "", jobTitle: "", description: "", dateOfWork: ""});

    function handleChange(e) {
        const { name, value } = e.target;
        setPExperience();
        const updatedInfo = { ...PExperence, [name]: value };
        setPExperience(updatedInfo); //to the parent
    }

    

    return (
        <div className="prac-experience">

            <h1>Practical Experience</h1>

            <label htmlFor="company">
                Company {" "}
                <input type='text' id="company"
                 value={company}
                  onChange={handleCompanyChange}
                 />
            </label>


            <label htmlFor='jobTitle'>
                Job Title {" "}
                <input type="text"
                    id="jobTitle"
                    value={jobTitle}
                    onChange={handleJobTitleChange}
                />
            </label>


            <label htmlFor='dateOfWork'>
                Date Of Work {" "}
                <input type="text"
                    id="dateOfWork"
                    value={dateOfWork}
                    onChange={handleDateOfWorkChange}
                />  
            </label>


        </div>
    );
}