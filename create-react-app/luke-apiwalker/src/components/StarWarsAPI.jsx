import React, { useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


const StarWars = () => {

    let [searchInfo, setSearchInfo] = useState([]);
    const {category, id} = useParams();
    let [it, setIt] = useState(true)

    useEffect(() =>{
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then((data) => {
                console.log("got data");
                console.log(data);
                setSearchInfo(data.data)
                setIt(true);
            })
            .catch((err) => {
                console.log('error when fetching', err)
                setIt(false);
            })
    },[category,id]);


    return (
        <div>
            {
                it === false?
                <div>
                    <h3>These aren't the droids you're looking for</h3>
                    <img src='https://www.giantfreakinrobot.com/wp-content/uploads/2021/02/kevin-costner-1-900x507.jpg' alt="definately Obi-Wan Kenobi"></img>
                </div>:
                category === "planets"?
                <div>
                    <h1>{searchInfo.name}</h1>
                    <h3>Climate-{searchInfo.climate}</h3>
                    <h3>Terrain-{searchInfo.terrain}</h3>
                    <h3>Gravity-{searchInfo.gravity}</h3>
                    <h3>Population-{searchInfo.population}</h3>
                </div>:
                category === "people"?
                <div>
                    <h1>{searchInfo.name}</h1>
                    <h3>Height-{searchInfo.height}</h3>
                    <h3>Mass-{searchInfo.mass}</h3>
                    <h3>Hair Color-{searchInfo.hair_color}</h3>
                    <h3>Birth Year-{searchInfo.birth_year}</h3>
                    <h3>Home World-{searchInfo.homeworld}</h3>
                </div>:
                category === "starships"?
                <div>
                    <h1>{searchInfo.name}</h1>
                    <h3>Model-{searchInfo.climate}</h3>
                    <h3>Manufacturer-{searchInfo.manufacturer}</h3>
                    <h3>Max Speed-{searchInfo.max_atmosphering_speed}</h3>
                    <h3>Cost-{searchInfo.cost_in_credits}</h3>
                    <h3>Cargo Capacity-{searchInfo.cargo_capacity}</h3>
                </div>:
                category === "vehicles"?
                <div>
                    <h1>{searchInfo.name}</h1>
                    <h3>Model-{searchInfo.model}</h3>
                    <h3>Manufactuer-{searchInfo.manufacturer}</h3>
                    <h3>Vehicle CLass-{searchInfo.vehicle_class}</h3>
                    <h3>Cost-{searchInfo.cost_in_credits}</h3>
                </div>:
                category === "species"?
                <div>
                    <h1>{searchInfo.name}</h1>
                    <h3>Classification-{searchInfo.classification}</h3>
                    <h3>Language-{searchInfo.language}</h3>
                    <h3>Average Height-{searchInfo.average_height}</h3>
                    <h3>Average Lifespan-{searchInfo.average_lifespan}</h3>
                </div>:

                <p>POP</p>
            }
        </div>
    )

}

export default StarWars;