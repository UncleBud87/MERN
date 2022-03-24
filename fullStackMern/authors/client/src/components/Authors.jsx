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
            setAllAuthorsList(allAuthorsList.filter(authorObj => authorObj._id !== author_id
            ))
        })
        .catch(err=>{
            console.log(err)
        })
    }

    async function fetchData(){
        const { data } = await axios.get(url);
        let newArr = []
        data.forEach((e,i) => {
            let index = newArr.findIndex(el => el.name === e.name);
            if(index !== -1 ) newArr[index].value += parseFloat(e.value); //add to the value if an element is not unique
            if(index === -1 ) newArr.push({...e, value: parseFloat(e.value)}); //push to the array if the element is unique and convert value to float
        });
        return newArr.sort((a,b) => a.value - b.value);//returns an array of 20 elements after sorting
    }


    
    return (
        <div>
            <p><Link to="/authors">Add an author</Link></p> <br/>
            <p>We have quotes by:</p>
            {
                allAuthorsList.map((authorObj) => {
                    return (
                        <div className="container-sm" key={authorObj._id}>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Author</th>
                                        <th>Actions </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                    <td><h2>{authorObj.name}</h2></td>
                                <td><Link to={`/authors/${authorObj._id}/edit`} className="btn btn-primary m-3">Edit</Link><button onClick={() => { deleteAuthor(authorObj._id) }} className="btn btn-danger m-3">Delete</button> </td>
                                    </tr>
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