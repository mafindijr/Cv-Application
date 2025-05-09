import { useState } from "react";

export default function PracExperience({ onChange }) {
    const [pExperience, setPExperience] = useState({
        name: "",
        jobTitle: "",
        description: "",
        dateOfWork: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        const updatedInfo = { ...pExperience, [name]: value };
        setPExperience(updatedInfo);
        onChange(updatedInfo); // Send updated data to the parent
    }

    return (
        <div className="prac-experience">
            <h1>Practical Experience</h1>

            <label htmlFor="company">
                Company{" "}
                <input
                    type="text"
                    id="company"
                    name="name"
                    value={pExperience.name}
                    onChange={handleChange}
                />
            </label>

            <label htmlFor="jobTitle">
                Job Title{" "}
                <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={pExperience.jobTitle}
                    onChange={handleChange}
                />
            </label>

            <label htmlFor="description">
                Description{" "}
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={pExperience.description}
                    onChange={handleChange}
                />
            </label>

            <label htmlFor="dateOfWork">
                Date Of Work{" "}
                <input
                    type="text"
                    id="dateOfWork"
                    name="dateOfWork"
                    value={pExperience.dateOfWork}
                    onChange={handleChange}
                />
            </label>
        </div>
    );
}