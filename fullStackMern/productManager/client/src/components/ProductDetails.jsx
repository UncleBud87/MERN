import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {

    const { _id } = useParams();
    const [details, setDetails] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => {
                console.log("res", res)
                setDetails(res.data.results);
            })
            .catch(err => {
                console.log("err", err)
            })
    }, [])

    return (
        <div>
            <h2>Product Details {details.title}</h2>
            <h3>{details.price}</h3>
            <h3>{details.description}</h3>
        </div>
    )
}

export default ProductDetails;