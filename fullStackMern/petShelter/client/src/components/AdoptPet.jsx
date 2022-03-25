import axios from "axios";
import React, { useState, useEffect } from "react";
import { 
    useParams,
    Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";



const AdoptPet = () => {

    const { _id } = useParams();
    let [name, setName] = useState("");
    let [type, setType] = useState("");
    let [description, setDescription] = useState("");
    let [skill1, setSkill1] = useState("");
    let [skill2, setSkill2] = useState("");
    let [skill3, setSkill3] = useState("");
    const [details, setDetails] = useState({})

    const history = useHistory();




    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${_id}`)
            .then(res => {
                console.log("res", res)
                setDetails(res.data.results);
            })
            .catch(err => {
                console.log("err", err)
            })
    }, [])

    const deletePet = ()=>{
        console.log("i want to delete", _id)
        axios.delete(`http://localhost:8000/api/pet/${_id}`)
            .then(res=>{
                console.log(res)
                history.push('/')
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return (
        <div>
            <h2>Details about {details.name} <button onClick = {deletePet} className="btn btn-danger">Adopt {details.name}</button></h2>
            <h3>{details.type}</h3>
            <h3>{details.description}</h3>
            <h3>{details.skills1}</h3><br/>
            <h3>{details.skills2}</h3><br/>
            <h3>{details.skills3}</h3><br/>
            <Link to={`/products/${_id}/edit`}>
                Edit
            </Link> <br />
            <button onClick = {deletePet} className="btn btn-danger">Adopt {details.name}</button>
        </div>
    )
}

export default AdoptPet;













