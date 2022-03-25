import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
    Link
} from "react-router-dom";


const AllPets = (props) => {

    const [allPetsList, setAllPetsList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pet")
            .then(res => {
                console.log("got data", res.data.results)
                setAllPetsList(res.data.results);
            })
            .catch(err => {
                console.log("error when fetching. something went wrong.", err)
            })
    }, [props.formSubmitted])



    return (
        <div>
            <p><Link to="/pet">Add a pet to the shelter</Link></p> <br />
            <p>These pets are looking for a good home:</p>
            {
                allPetsList.map((petObj) => {
                    return (
                        <div className="container-sm" key={petObj._id}>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Pet</th>
                                        <th>Type </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                        <td><h2>{petObj.name}</h2></td>
                                        <td><h2>{petObj.type}</h2></td>
                                        <td><Link to={`/pet/${petObj._id}`} className="btn btn-primary m-3">Details</Link><Link to={`/pet/${petObj._id}/edit`} className="btn btn-primary m-3">Edit</Link></td>
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


export default AllPets;