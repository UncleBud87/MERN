import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const UpdateAuthor = (props) => {



    let [authorInfo, setAuthorInfo] = useState({})



    let { _id } = useParams();

    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .then(res => {
                console.log("res", res);
                setAuthorInfo(res.data.results)

            })
            .catch(err => {
                console.log("err", err);
            })
    }, [])

    const changeHandler = (e)=>{
        setAuthorInfo({
            ...authorInfo,
            [e.target.name]: e.target.value
        })
        
    }


    const updateAuthor = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/authors/${_id}`, authorInfo)
            .then(res=>{
                console.log("res",res)
                history.push('/')
            })
            .catch(err =>{
                console.log("err",err)
            })


    }

    return (
        <div>
            <h1>Edit this author:</h1>
            <form onSubmit={updateAuthor}>
                <p>
                    <label>First Name</label><br />
                    <input type="text"
                        name="title"
                        value={authorInfo.name}
                        onChange={changeHandler} />
                </p>
                <input type="submit" />
            </form>
        </div>
    );
};

export default UpdateAuthor;