import { useState } from "react";



export default function GeneralInfor({name, email, phone}) {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleNameChange = (e) => {
      setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }

    function handleSubmit (e) {
        e.preventDefault();


    }

    return (

        <form action="" onSubmit={handleSubmit}>

        <div className="general-info">

            <h1>General Information</h1>
            <label htmlFor="name">

                Name {" "}

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={handleNameChange}
                />

            </label>    

            <label htmlFor="email">
                Email {" "}

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                />
                </label>
            <label htmlFor="phone">

                Phone {" "}

                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={phone}
                    onChange={handlePhoneChange}
                />

                </label>

                <button type="submit" >add info</button>
            <p>{name}, {email}, {phone}</p>
        </div>
        </form>

    
    );
}


const Preview = () => {

    return (
        <div className="grid-gen-info">
            <h2>Preview</h2>

            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
}