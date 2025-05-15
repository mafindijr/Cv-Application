

export default function EduExperience({ data, setData }) {
    function handleChange(e) {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    }

    return (
        <div className="edu-experience">
            <h2>Educational Experience</h2>
            <label>
                School Name
                <input
                    type="text"
                    name="school"
                    value={data.school || ""}
                    onChange={handleChange}
                />
            </label>
            <label>
                Degree
                <input
                    type="text"
                    name="degree"
                    value={data.degree || ""}
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