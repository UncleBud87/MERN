import axios from 'axios';
import React, { useState } from 'react';

const CreateNewProduct = (props) => {

    let [title, setTitle] = useState("");
    let [price, setPrice] = useState(undefined);
    let [description, setDescription] = useState("")
    let [formError, setFormError] = useState({})

    const createProduct = (e) => {
        e.preventDefault();
        let formInfo = { title, price, description };

        axios.post("http://localhost:8000/api/products", formInfo)
            .then(res => {
                console.log("got data", res);
                if (res.data.error) {
                    setFormError(res.data.error.errors);
                } else {
                    props.setFormSubmitted(!props.formSubmitted);
                    
                    setTitle("");
                    setPrice(undefined);
                    setDescription("");
                }

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
                    <input type="text" name='' className='form-control' onChange={(e) => { setTitle(e.target.value) }} value={title} />
                    <p className='text-danger'>{formError.title?.message}</p>
                </div>
                <div className='form-group'>
                    <label htmlFor="">Price:</label>
                    <input type="number" name='' className='form-control' onChange={(e) => { setPrice(e.target.value) }} value={price} />
                    <p className='text-danger'>{formError.price?.message}</p>
                </div>
                <div className='form-group'>
                    <label htmlFor="">Description:</label>
                    <input type="text" name='' className='form-control' onChange={(e) => { setDescription(e.target.value) }} value={description} />
                    <p className='text-danger'>{formError.description?.message}</p>
                </div>
                <input type="submit" value="create product" />
            </form>
        </div>
    )
}

export default CreateNewProduct;