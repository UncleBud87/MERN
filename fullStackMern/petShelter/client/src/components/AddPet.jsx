import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


const AddPet = (props) => {

    let [name, setName] = useState("");
    let [type, setType] = useState("");
    let [description, setDescription] = useState("");
    let [skills1, setSkills1] = useState("");
    let [skills2, setSkills2] = useState("");
    let [skills3, setSkills3] = useState("");
    let [formError, setFormError] = useState({})
    const history = useHistory();


    const addPet = (e) => {
        e.preventDefault();
        let formInfo = { name, type, description, skills1, skills2, skills3 };

        axios.post("http://localhost:8000/api/pet", formInfo)
            .then(res => {
                console.log("got data", res);
                if (res.data.error) {
                    setFormError(res.data.error.errors);
                } else {
                    props.setFormSubmitted(!props.formSubmitted);
                    setName("");
                    setFormError({});
                    history.push("/");
                }

            })
            .catch(err => {
                console.log("error when fetching. something went wrong.", err);
            })
    }

    return (
        <div>
            <h3>Know a pet needing a home?</h3>
            <form onSubmit={addPet}>
                <div className='form-group'>
                    <label htmlFor=""><h3>Name:</h3></label><br />
                    <input type="text" 
                    name='' 
                    onChange={(e) => { setName(e.target.value) }} 
                    value={name} />
                    <p className='text-danger'>{formError.name?.message}</p>
                    <label htmlFor=""><h3>Type:</h3></label><br />
                    <input type="text" 
                    name='' 
                    onChange={(e) => { setType(e.target.value) }} 
                    value={type} />
                    <p className='text-danger'>{formError.type?.message}</p>
                    <label htmlFor=""><h3>Description:</h3></label><br />
                    <input type="text" 
                    name='' 
                    onChange={(e) => { setDescription(e.target.value) }} 
                    value={description} />
                    <p className='text-danger'>{formError.description?.message}</p>
                    <label htmlFor=""><h3>Skill 1:</h3></label><br />
                    <input type="text" 
                    name='' 
                    onChange={(e) => { setSkills1(e.target.value) }} 
                    value={skills1} />
                    <p className='text-danger'>{formError.skills1?.message}</p>
                    <label htmlFor=""><h3>Skill 2:</h3></label><br />
                    <input type="text" 
                    name='' 
                    onChange={(e) => { setSkills2(e.target.value) }} 
                    value={skills2} />
                    <p className='text-danger'>{formError.skills2?.message}</p>
                    <label htmlFor=""><h3>Skill 3:</h3></label><br />
                    <input type="text" 
                    name='' 
                    onChange={(e) => { setSkills3(e.target.value) }} 
                    value={skills3} />
                    <p className='text-danger'>{formError.skills3?.message}</p>
                </div>
                <input type="submit" value="Add Pet" className='btn btn-primary'/>
            </form>
        </div>
    )
}

export default AddPet;