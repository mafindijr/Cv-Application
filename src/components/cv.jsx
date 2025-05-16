import { useState } from "react";
import GeneralInfor from "./general-info";
import EduExperience from "./edu-experience";
import PracExperience from "./prac-experience";
import "../Styles/cv.css";

export default function CV() {
    const [generalInfo, setGeneralInfo] = useState({});
    const [eduExperience, setEduExperience] = useState({});
    const [pracExperience, setPracExperience] = useState({});
    const [isSubmited, setIsSubmited] = useState(false);
    const [text, setText] = useState('Fill out the form below to create your CV.');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmited(true)
        setText('Cv submited! Care to edit?');
        
    };

    const handleEdit = () => {
        setIsSubmited(false);
        setText('Fill out the form below to create your CV.');
    }

    return (
        <div className="cv-grid">

            
          <div className="form-input-box">

             <div>
                <h1>CV Builder</h1>
                <p>{text}</p>
            </div>
            {!isSubmited ? (
            
             <form onSubmit={handleSubmit}>
                <GeneralInfor data={generalInfo} setData={setGeneralInfo} />
                <EduExperience data={eduExperience} setData={setEduExperience} />
                <PracExperience data={pracExperience} setData={setPracExperience} />
                <center><button type="submit">Submit</button></center>
            </form>
            ) : (
            
                <button onClick={handleEdit}>Edit</button>
        
          )}

          </div> 

            <div className="pre-box">
                <h1>Preview Data</h1>

                <div>
                    <h2>General Information</h2>
                    <p>Name: {generalInfo.name}</p>
                    <p>Email: {generalInfo.email}</p>
                    <p>Phone: {generalInfo.phone}</p>
                </div>

                <div>
                    <h2>Educational Experience</h2>
                    <p>School: {eduExperience.school}</p>
                    <p>Degree: {eduExperience.degree}</p>
                    <p>Year: {eduExperience.year}</p>
                </div>

                <div>
                    <h2>Practical Experience</h2>
                    <p>Company: {pracExperience.company}</p>
                    <p>Position: {pracExperience.position}</p>
                    <p>Description: {pracExperience.jobDescription}</p>
                    <p>Year: {pracExperience.year}</p>
                </div>
            </div>
            
        </div>
    );
}