import { useState } from "react";



export default function GeneralInfor({ onChange }) {
    
    const [info, setInfo] = useState({ name: "", email: "", phone: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedInfo = { ...info, [name]: value };
        setInfo(updatedInfo);
        onChange(updatedInfo); // Send data to the parent
    };

    return (
        <div className="general-info">

            <h1>General Information</h1>
            <label htmlFor="name">

                Name {" "}

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={info.name}
                    onChange={handleChange}
                />

            </label>    

            <label htmlFor="email">
                Email {" "}

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={info.email}
                    onChange={handleChange}
                />
                </label>
            <label htmlFor="phone">

                Phone {" "}

                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={info.phone}
                    onChange={handleChange}
                />

                </label>
         
        </div>
    );
}