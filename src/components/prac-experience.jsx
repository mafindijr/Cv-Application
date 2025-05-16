import "../Styles/prac-experience.css";

export default function PracExperience({ data, setData }) {
    function handleChange(e) {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    }

    return (
        <div className="prac-experience">
            <h2>Practical Experience</h2>
            <label>
                Company Name
                <input
                    type="text"
                    name="company"
                    value={data.company || ""}
                    onChange={handleChange}
                />
            </label>
            <label>
                Position
                <input
                    type="text"
                    name="position"
                    value={data.position || ""}
                    onChange={handleChange}
                />
            </label>
            <label>
                Description
                <input
                    type="text"
                    name="jobDescription"
                    value={data.jobDescription || ""}
                    onChange={handleChange}
                />
            </label>
            <label>
                Year
                <input
                    type="text"
                    name="year"
                    value={data.year || ""}
                    onChange={handleChange}
                />
            </label>
        </div>
    );
}