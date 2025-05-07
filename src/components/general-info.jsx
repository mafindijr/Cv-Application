import { useState } from "react";


export default function GeneralInfor() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePhoneChange(e) {
        setPhone(e.target.value);
    }


    return (
        <div className="general-info">

            <h1>General Information</h1>

            <label htmlFor="name">
                Name {" "}
                <input type='text' id="name"
                    value={name}
                    onChange={handleNameChange}
                />
            </label>


            <label htmlFor='email'>
                Email {" "}
                <input type="text"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                />
            </label>


            <label htmlFor='phone'>
                Phone {" "}
                <input type="text"
                    id="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                />

            </label>


        </div>
    );

    
}