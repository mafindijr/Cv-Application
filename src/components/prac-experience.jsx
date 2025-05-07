import {useState} from 'react';


export default function PracEperience () {

    const [company, setCompany] = useState("");
    const [jobTitle, setJobTile] = useState("");
    const [dateOfWork, setDateOfWork] = useState ("");
    const [description, setDescription] = useState("");


    function handleCompanyChange(e) {
        setCompany(e.target.value);
    }

    function handleJobTitleChange(e) {
        setJobTile(e.target.value);
    }

    function handleDateOfWorkChange(e) {
        setDateOfWork(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
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


            <label htmlFor='description'>
                Description {" "}
                <input type="text"
                    id="description"
                    value={description}
                    onChange={handleDescriptionChange}
                />  
            </label>


        </div>
    );
}