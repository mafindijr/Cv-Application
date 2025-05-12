import { useState } from 'react';

export default function PracExperience ({ onChange }) {

    const [PracExperience, setPracExperience] = useState({ compnay: '', jobTitle: '', dateOfWork: '', description: '' });

    function handleChange (e) {
        const { name, value } = e.target;
        const updatedInfo = { ...PracExperience, [name]: value }
        setPracExperience(updatedInfo);
        onChange(updatedInfo);
    }

    function handleSubmit (e) {
        e.preventDefault();
    }

    return (
        <div className='prac-experience'>
            <form action="" onSubmit={handleSubmit}>

            <label htmlFor="company">
                company name {' '}

                <input type="text"
                    name='company'
                    placeholder='company name'
                    value={PracExperience.compnay}
                    onChange={handleChange}
                />
            </label>

            <label htmlFor="j0b">
                job title {' '}

                <input type="text"
                    name='job'
                    placeholder='job title'
                    value={PracExperience.jobTitle}
                    onChange={handleChange}
                />
            </label>


            <label htmlFor="date">
                Date of work {' '}

                <input type="text"
                    name='date'
                    placeholder='enter date'
                    value={PracExperience.dateOfWork}
                    onChange={handleChange}
                />
            </label>

            <label htmlFor="description">
                Description {' '}

                <input type="text"
                    name='description'
                    placeholder='description'
                    value={PracExperience.description}
                    onChange={handleChange}
                />
            </label>
            </form>

        </div>
    );

}
