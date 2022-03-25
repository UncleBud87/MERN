import axios from "axios";
import React, { useState, useEffect } from "react";
import {
    useParams,
    Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";



const AdoptPet = () => {

    const { _id } = useParams();
    const [data, setData] = useState({})
    const history = useHistory();




    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${_id}`)
            .then(res => {
                console.log("res", res)
                setData(res.data.results);
            })
            .catch(err => {
                console.log("err", err)
            })
    }, [])

    const deletePet = () => {
        console.log("i want to delete", _id)
        axios.delete(`http://localhost:8000/api/pet/${_id}`)
            .then(res => {
                console.log(res)
                history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="border border-dark border-3 container-sm">
            <h2 className='m-3'>Details about: {data.name} <button onClick={deletePet} className="btn btn-danger m-3">Adopt {data.name}</button></h2>
            <div className='row'>
                <div className='col'>
                    <label ><h3 className='m-3'>Name</h3></label>
                    <br />
                    <input type="text"
                        name="name"
                        className='form-control'
                        readOnly
                        value={data.name} />
                    <br />
                    <label><h3 className='m-3'>Type</h3></label>
                    <br />
                    <input type="text"
                        name="type"
                        className='form-control'
                        readOnly
                        value={data.type} />
                    <br />
                    <label><h3 className='m-3'>Description</h3></label>
                    <br />
                    <input type="text"
                        name="description"
                        className='form-control'
                        readOnly
                        value={data.description} />
                </div>
                <div className='col order-1'>
                    <label><h3 className='m-3'>Skills</h3></label>
                    <br />
                    <input type="text"
                        name="skills1"
                        className='form-control'
                        readOnly
                        value={data.skills1} />
                    <br />
                    <br />
                    <input type="text"
                        name="skill2"
                        className='form-control'
                        readOnly
                        value={data.skills2} />
                    <br />
                    <br />
                    <input type="skills3"
                        name="skill3"
                        className='form-control'
                        readOnly
                        value={data.skills3} />
                </div>
            </div>
            <Link to={`/pet/${_id}/edit`}>
                Edit
            </Link> <br />
        </div>
    )
}

export default AdoptPet;













