import axios from "axios";
import React, { useState, useEffect } from "react";
import { 
    useParams,
    Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";



const ProductDetails = () => {

    const { _id } = useParams();
    const [details, setDetails] = useState({})

    const history = useHistory();

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

    const deleteProduct = ()=>{
        console.log("i want to delete", _id)
        axios.delete(`http://localhost:8000/api/products/${_id}`)
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
            <h2>Product Details {details.title}</h2>
            <h3>{details.price}</h3>
            <h3>{details.description}</h3>
            <Link to={`/products/${_id}/edit`}>
                Edit
            </Link> <br />
            <button onClick = {deleteProduct} className="btn btn-danger">Delete {details.title}</button>
        </div>
    )
}

export default ProductDetails;
