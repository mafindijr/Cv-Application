import { useState } from "react";



export default function GeneralInfor() {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    // const handleNameChange = (e) => {
    //   setName(e.target.value);
    // };

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // }

    // const handlePhoneChange = (e) => {
    //     setPhone(e.target.value);
    // }

    function handleInputChange (e) {

        const { name, value } = e.target;

        if(name === "name") {
            setName(e.target.value);
        }

        if(name === "email") {
            setEmail(e.target.value);
        }
        if(name === "phone") {
            setPhone(e.target.value);
        }
    }

    function handleSubmit (e) {
        e.preventDefault();


    }



const InforData = ({name, email, phone}) => {  

    return (
        <div>

        <h1>General Information</h1>

        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>


        </div>
        
    );

}

    return (
        <div className="general-info">
                <form action="" onSubmit={handleSubmit}>

                <label htmlFor="name">
                    Name {' '}
                    <input type="text"
                        name='name'
                        placeholder='enter your name'
                        value={name}
                        onChange={handleInputChange}
                    />
                </label>

                <label htmlFor="email">
                    Email {' '}
                    <input type="text"
                        name='email'
                        placeholder='enter your email'
                        value={email}
                        onChange={handleInputChange}
                    />
                </label>

                <label htmlFor="phone">
                    Phone {' '}
                    <input type="text"
                        name='phone'
                        placeholder='enter your phone number'
                        value={phone}
                        onChange={handleInputChange}
                    />
                </label>

        </form>

        <InforData name={name} email={email} phone={phone} />
    </div>
    );  

}
