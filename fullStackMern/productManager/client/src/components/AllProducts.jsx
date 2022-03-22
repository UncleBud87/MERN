import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const AllProducts = (props) => {

    const [allProductsList, setAllProductsList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log("got data", res.data.results)
                setAllProductsList(res.data.results);
            })
            .catch(err => {
                console.log("error when fetching. something went wrong.", err)
            })
    },[props.formSubmitted])

    return (
        <div>
            <h2>All the Products</h2>
            {
                allProductsList.map((productObj) => {
                    return (
                        <div key={productObj._id}>
                            <h2><Link to={`/products/${productObj._id}`}>{productObj.title}</Link></h2>
                            <h3>{productObj.price}</h3>
                            <h3>{productObj.description}</h3>
                        </div>
                    )
                })
            }
        </div>
    );
};


export default AllProducts;