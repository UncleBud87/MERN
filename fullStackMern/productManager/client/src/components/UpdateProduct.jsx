import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const UpdateProduct = (props) => {



    let [productInfo, setProductInfo] = useState({})



    let { _id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => {
                console.log("res", res);
                setProductInfo(res.data.results)

            })
            .catch(err => {
                console.log("err", err);
            })
    }, [])

    const changeHandler = (e)=>{
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
        
    }


    const updateProduct = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/products/${_id}`, productInfo)
            .then(res=>{
                console.log("res",res)
            })
            .catch(err =>{
                console.log("err",err)
            })


    }

    return (
        <div>
            <h1>Update a Product:</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>First Name</label><br />
                    <input type="text"
                        name="title"
                        value={productInfo.title}
                        onChange={changeHandler} />
                </p>
                <p>
                    <label>Price:</label><br />
                    <input type="number"
                        name="price"
                        value={productInfo.price}
                        onChange={changeHandler} />
                </p>
                <p>
                    <label>Price:</label><br />
                    <input type="text"
                        name="description"
                        value={productInfo.description}
                        onChange={changeHandler} />
                </p>
                <input type="submit" />
            </form>
        </div>
    );
};

export default UpdateProduct;