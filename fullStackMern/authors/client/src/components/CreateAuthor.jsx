import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


const CreateNewAuthor = (props) => {

    let [name, setName] = useState("");
    let [formError, setFormError] = useState({})
    const history = useHistory();


    const createAuthor = (e) => {
        e.preventDefault();
        let formInfo = { name };

        axios.post("http://localhost:8000/api/authors", formInfo)
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
            <form onSubmit={createAuthor}>
                <div className='form-group'>
                    <label htmlFor="">Name:</label><br />
                    <input type="text" 
                    name='' 
                    onChange={(e) => { setName(e.target.value) }} 
                    value={name} />
                    <p className='text-danger'>{formError.name?.message}</p>
                </div>
                <input type="submit" value="create name"/>
            </form>
        </div>
    )
}

export default CreateNewAuthor;