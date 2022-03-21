import React, { useState, useEffect} from "react";
import axios from 'axios';

const AllProducts = ()=>{

    const [allProducts, setAllProducts] = useState([]);

        useEffect(()=>{
            axios.get("http://localhost:8000/api/products")
            .then((res)=>{
                console.log("got data",res.data.results)
                setAllProducts(res.data.results);
            })
            .catch((err)=>{
                console.log("error when fetching. something went wrong.")
            })
        },[])
        



    return (
        <div>
            <h2>All the Products</h2>
            {
                allProducts.map((productObj)=>{
                    return(
                        <div>
                            <h3>{productObj.title}</h3>
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