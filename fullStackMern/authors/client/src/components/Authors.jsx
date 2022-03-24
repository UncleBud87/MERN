import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const AllAuthors = (props) => {

    const [allAuthorsList, setAllAuthorsList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log("got data", res.data.results)
                setAllAuthorsList(res.data.results);
            })
            .catch(err => {
                console.log("error when fetching. something went wrong.", err)
            })
    }, [props.formSubmitted])

    const deleteAuthor = (author_id) => {
        axios.delete(`http://localhost:8000/api/authors/${author_id}`)
        .then(res=>{
            console.log("successful delete res", res)
            setAllAuthorsList(allAuthorsList.filter(authorObj => authorObj._id != author_id
            ))
        })
        .catch(err=>{
            console.log(err)
        })
    }


    return (
        <div>
            <h1>Favorite authors</h1>
            <p><Link to="">Add an author</Link></p> <br/>
            <p>We have quotes by:</p>
            {
                allAuthorsList.map((authorObj) => {
                    return (
                        <div key={authorObj._id}>
                            <table class="table table-striped table-hover">
                            <thead>
                                <th scope="col">Author</th>
                                <th scope="col">Actions </th>
                            </thead>
                            <tbody>
                                <td><h2>{authorObj.name}</h2></td>
                                <td><Link to={`/authors/${authorObj._id}`} className="btn btn-primary m-3">Edit</Link><button onClick={() => { deleteAuthor(authorObj._id) }} className="btn btn-danger m-3">Delete</button> </td>
                            </tbody>
                            </table>
                        </div>
                    )
                })
            }
        </div>
    );
};


export default AllAuthors;