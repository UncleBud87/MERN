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
    }, [props.formSubmitted])

    const deleteProduct = (product_id) => {
        axios.delete(`http://localhost:8000/api/products/${product_id}`)
        .then(res=>{
            console.log("successful delete res", res)
            setAllProductsList(allProductsList.filter(productObj => productObj._id != product_id
            //let filteredList = allProductsList.filter((productObj)=>{
            //    return productObj._id != product_id
            //})
            //setAllProductsList(filteredList)
            ))
        })
        .catch(err=>{
            console.log(err)
        })


    }

        

    return (
        <div>
            <h2>All the Products</h2>
            {
                allProductsList.map((productObj) => {
                    return (
                        <div key={productObj._id}>
                            <h2>{productObj.title}</h2>
                            <h3>{productObj.price}</h3>
                            <h3>{productObj.description}</h3>
                            <br />
                            <Link to={`/products/${productObj._id}`} className="btn btn-primary m-3">Edit: {productObj.title}</Link>
                            <button onClick={() => { deleteProduct(productObj._id) }} className="btn btn-danger m-3">Delete</button>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    );
};


export default AllProducts;