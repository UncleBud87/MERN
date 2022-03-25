import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams} from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
    Link
} from "react-router-dom";


const EditPet = (props) => {
    
    let [name, setName] = useState("");
    let [type, setType] = useState("");
    let [description, setDescription] = useState("");
    let [skill1, setSkill1] = useState("");
    let [skill2, setSkill2] = useState("");
    let [skill3, setSkill3] = useState("");
    let [formError, setFormError] = useState({})
    const history = useHistory();
    let { _id } = useParams();



    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${_id}`)
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
        setType({
            [e.target.type]: e.target.value
        })
        setDescription({
            [e.target.description]: e.target.value
        })
        setSkill1({
            [e.target.skill1]: e.target.value
        })
        setSkill2({
            [e.target.skill2]: e.target.value
        })
        setSkill3({
            [e.target.skill3]: e.target.value
        })

    }


    const editPet = (e) => {
        e.preventDefault();
        let formInfo = { name, type, description, skill1, skill2, skill3 };

        axios.put(`http://localhost:8000/api/pet/${_id}`, formInfo)
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
            <h1>Edit Pet:</h1>
            <form onSubmit={editPet} className="border border-dark border-3 container-sm">
                <p>
                    <label className='m-3'>First Name</label><br />
                    <input type="text"
                        name="name"
                        value={name.name}
                        onChange={changeHandler} />
                </p>
                <p>
                    <label className='m-3'>First Name</label><br />
                    <input type="text"
                        name="type"
                        value={name.name}
                        onChange={changeHandler} />
                </p>
                <p>
                    <label className='m-3'>First Name</label><br />
                    <input type="text"
                        name="name"
                        value={name.name}
                        onChange={changeHandler} />
                </p>
                <p>
                    <label className='m-3'>First Name</label><br />
                    <input type="text"
                        name="name"
                        value={name.name}
                        onChange={changeHandler} />
                </p>
                <p>
                    <label className='m-3'>First Name</label><br />
                    <input type="text"
                        name="name"
                        value={name.name}
                        onChange={changeHandler} />
                </p>
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




export default EditPet;