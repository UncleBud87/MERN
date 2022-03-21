import axios from 'axios';
import React, { useState } from 'react';

const CreateNewProduct = () => {

    let [title, setTitle] = useState("");
    let [price, setPrice] = useState(null);
    let [description, setDescription] = useState("")

    const createProduct = (e) => {
        e.preventDefault();
        let formInfo = { title, price, description };

        axios.post("http://localhost:8000/api/products", formInfo)
            .then(res => {
                console.log("got data", res);
            })
            .catch(err => {
                console.log("error when fetching. something went wrong.", err);
            })
    }

    return (
        <div>
            <form onSubmit={createProduct}>
                <div className='form-group'>
                    <label htmlFor="">Title:</label>
                    <input type="text" name='' className='form-control' onChange={(e) => { setTitle(e.target.value) }} />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Price:</label>
                    <input type="number" name='' className='form-control' onChange={(e) => { setPrice(e.target.value) }} />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Description:</label>
                    <input type="text" name='' className='form-control' onChange={(e) => { setDescription(e.target.value) }} />
                </div>
                <input type="submit" value="create product" />
            </form>
        </div>
    )
}

export default CreateNewProduct;