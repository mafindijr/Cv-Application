import {useState} from 'react';

export default function PracExperience ( { onChange } ) {

    const [PExperence, setPExperience] = useState({name: "", jobTitle: "", description: "", dateOfWork: ""});

    function handleChange(e) {
        const { name, value } = e.target;
        const updatedInfo = { ...PExperence, [name]: value };
        setPExperience(updatedInfo);
        onChange(updatedInfo); // to the parent
    }

    

    return (

        <div className="prac-experience">

            <h1>Practical Experience</h1>

            <label htmlFor="company">

                Company {" "}

                <input type='text' id="company"
                    name="name"
                     value={PExperence.name}
                    onChange={handleChange}
                 />

            </label>


            <label htmlFor='jobTitle'>

                Job Title {" "}
                <input type="text"
                    name="jobTitle"
                    id="jobTitle"
                    value={PExperence.jobTitle}
                    onChange={handleChange}

                />
            </label>

            <label htmlFor="">

                Description {" "}

                <input type="text"
                    id="description"
                    name="description"
                    value={PExperence.description}
                    onChange={handleChange}
                />
            </label>


            <label htmlFor='dateOfWork'>

                Date Of Work {" "}
                
                <input type="text"
                    name="dateOfWork"
                    id="dateOfWork"
                    value={PExperence.dateOfWork}
                    onChange={handleChange}
                />  
            </label>


        </div>
    );
}