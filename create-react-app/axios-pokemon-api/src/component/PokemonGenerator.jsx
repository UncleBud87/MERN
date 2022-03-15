import React, { useState } from "react";
import axios from 'axios';

const Pokemon = ()=>{

    //state veriable that we will save the array of pokemon onto
    let[pokemonList, setPokemonList] = useState([])



    const getPokemonFromApi = ()=>{
        console.log("making an api call")

        //use fetch() to make an api call. fatch returns to us a "promise". A promis is something where we dont know the response time.
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
            .then((response)=>{
                console.log("got data")
                console.log(response)
                setPokemonList(response.data.results) //.results
            })
            .catch((err)=>{
                console.log("error when fetching. something went wrong.")
            })
            .catch(()=>{

            }
            )

        console.log("still working")
    
    }


    return (
    <>
        <button onClick={getPokemonFromApi}>Click for Pokemon</button>
        {
            pokemonList.map((pokeObj, index)=>{
                return <div>
                    <h1>{pokeObj.name}</h1>
                    <hr />
                </div>
            })
        }

    </>
    )
}


export default Pokemon;