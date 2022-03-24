import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams} from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
    Link
} from "react-router-dom";


const EditAuthor = (props) => {
    
    let [name, setName] = useState("");
    let [formError, setFormError] = useState({})
    const history = useHistory();
    let { _id } = useParams();



    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .then(res => {
                console.log("res", res);
                setName(res.data.results)

            })
            .catch(err => {
                console.log("err", err);
            })
    }, [])

    const changeHandler = (e) => {
        setName({
            [e.target.name]: e.target.value
        })

    }


    const updateAuthor = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/authors/${_id}`, name)
            .then(res => {
                console.log("res", res);
                if (res.data.error) {
                    setFormError(res.data.error.errors);
                }else{
                    history.push('/');
                }

            })
            .catch(err => {
                console.log("err", err)
            })
    }

    return (
        <div>
            <h1>Update Author:</h1>
            <form onSubmit={updateAuthor} className="border border-dark border-3 container-sm">
                <p>
                    <label className='m-3'>First Name</label><br />
                    <input type="text"
                        name="name"
                        value={name.name}
                        onChange={changeHandler} />
                </p>
                <p className='text-danger'>{formError.name?.message}</p>
                <input type="submit" className='btn btn-danger m-3'/>
                <Link to="/" className='btn btn-primary m-3'>Cancel</Link>
            </form>
        </div>
    );
};




export default EditAuthor;