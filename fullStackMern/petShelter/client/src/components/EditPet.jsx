import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
    Link
} from "react-router-dom";


const EditPet = (props) => {

    let [data, setData] = useState("");
    let [formError, setFormError] = useState({})
    const history = useHistory();
    let { _id } = useParams();



    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${_id}`)
            .then(res => {
                console.log("res", res);
                setData(res.data.results)

            })
            .catch(err => {
                console.log("err", err);
            })
    }, [])

    const changeHandler = (e) => {
        setData({
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value
        })

    }

    const editPet = (e) => {
        e.preventDefault();


        axios.put(`http://localhost:8000/api/pet/${_id}`, data)
            .then(res => {
                console.log("res", res);
                if (res.data.error) {
                    setFormError(res.data.error.errors);
                } else {
                    history.push('/');
                }

            })
            .catch(err => {
                console.log("err", err)
            })
    }

    return (
        <div className='mb-3'>
            <h1 className='m-3'>Edit Pet:</h1>
            <div className='container-sm'>
                <form onSubmit={editPet} className="border border-dark border-3 container-sm">
                    <div className='row'>
                        <div className='col'>
                            <p>
                                <label ><h3>Name</h3></label><br />
                                <input type="text"
                                    name="name"
                                    className='form-control'
                                    value={data.name}
                                    onChange={changeHandler} />
                            </p>
                            <p>
                                <label><h3 className='m-3'>Type</h3></label><br />
                                <input type="text"
                                    name="type"
                                    className='form-control'
                                    value={data.type}
                                    onChange={changeHandler} />
                            </p>
                            <p>
                                <label><h3 className='m-3'>Description</h3></label><br />
                                <input type="text"
                                    name="description"
                                    className='form-control'
                                    value={data.description}
                                    onChange={changeHandler} />
                            </p>
                        </div>
                        <div className='col order-1'>
                            <p>
                                <label><h3 className='m-3'>Skill</h3></label><br />
                                <input type="text"
                                    name="skills1"
                                    className='form-control'
                                    value={data.skills1}
                                    onChange={changeHandler} />
                            </p>
                            <p>
                                <label><h3 className='m-3'>Skill</h3></label><br />
                                <input type="text"
                                    name="skill2"
                                    className='form-control'
                                    value={data.skills2}
                                    onChange={changeHandler} />
                            </p>
                            <p>
                                <label><h3 className='m-3'>Skill</h3></label><br />
                                <input type="skills3"
                                    name="skill3"
                                    className='form-control'
                                    value={data.skills3}
                                    onChange={changeHandler} />
                            </p>
                        </div>
                    </div>
                    <p className='text-danger'>{formError.name?.message}</p>
                    <input type="submit" className='btn btn-danger m-3' />
                </form>
            </div>
        </div>
    );
};




export default EditPet;