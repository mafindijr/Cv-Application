import { useState } from 'react';


export default function PracExperience () {

    const [company, setComany] = useState('');
    const [position, setPosition] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [year, setYear] = useState('');

    function handleChange (e) {

        const { name, value} = e.target;

        if(name === 'company') {
            setComany(e.target.value);
        }

        if(name === 'position') {
            setPosition(e.target.value);
        }

        if(name === 'job-description') {
            setJobDescription(e.target.value);
        }

        if(name === 'year') {
            setYear(value);
        }
    }

    const handleSubmit = () => {
        e.preventDefault();
    }


    // A nested component to get the input values
    const PracData = ({company, position, jobDescription, year}) => {
        return (

            <div>

            <p>{company}</p>
            <p>{position}</p>
            <p>{jobDescription}</p>
            <p>{year}</p>


            </div>
        );
    }


    return (
        <div className="prac-experience">
            <form onSubmit={handleSubmit}>

                <h1>Practical Experience</h1>

                <label>
                    Company Name {' '}

                    <input 
                    
                    type="text"
                    placeholder='company work before'
                    name='company'
                    value={company}
                    onChange={handleChange} 
                    
                    />
                </label>

                <label>
                    Position {' '}

                    <input 
                    
                    type="text"
                    placeholder='Position'
                    name='position'
                    value={position}
                    onChange={handleChange} 
                    
                    />
                </label>

                <label>
                    Description {' '}

                    <input 
                    
                    type="text"
                    placeholder='Role description'
                    name='job-description'
                    value={jobDescription}
                    onChange={handleChange} 
                    
                    />
                </label>

                <label>
                    Date {' '}

                    <input 
                    
                    type="text"
                    placeholder='company work before'
                    name='year'
                    value={year}
                    onChange={handleChange} 
                    
                    />
                </label>

                <button type='submit'>Add details</button>

            </form>

            <PracData company={company} position={position} jobDescription={jobDescription} year={year} />
        </div>
    );
}