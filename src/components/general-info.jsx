

export default function GeneralInfor({ data, setData }) {
    function handleChange(e) {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    }

    return (
        <div className="general-info">
            <h2>General Information</h2>
            <label>
                Name
                <input
                    type="text"
                    name="name"
                    value={data.name || ""}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email
                <input
                    type="email"
                    name="email"
                    value={data.email || ""}
                    onChange={handleChange}
                />
            </label>
            <label>
                Phone
                <input
                    type="tel"
                    name="phone"
                    value={data.phone || ""}
                    onChange={handleChange}
                />
            </label>
        </div>
    );
}