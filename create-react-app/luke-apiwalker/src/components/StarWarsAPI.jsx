import React, { useState } from "react";
import axios from 'axios';

const StarWars = ()=>{

    let [category, setCategory] = useState()
    let [id, setId] = useState()

    const getStarWarsFromApi = ()=>{
        axios.get(`https:swapi.dev/api/${category}/${id}`)
            .then((response)=>{
                console.log("got data")
                console.log(response)
            })
            .catch((err)=>{
                console.log("error when fetching")
            })
            .catch(()=>{

            }
            )

        console.log("still working")
        
    }


    return(
    <>
    </>
    )

}

export default StarWars;