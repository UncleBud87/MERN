import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import Routing from './Routes';

const StarWarsSearchForm = () => {

    let [people, setPeople] = useState("")
    let [planets, setPlanets] = useState("")
    let [id, setId] = useState(null)

    //axios.get(`https://swapi.dev/api/${category}/${id}`)
    //initialize useHIstory into a variable
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault(); // prevents form from reloading window

        if(planets.length>0){
        //if the form has infor for color filled out. redirect to redirect to /starwars/selectedPlanet/id
        history.push(`/${planets}/${id}`)
        }
        else{
            //else redirect to /${num}
            history.push(`/${people}/${id}`)

        }
        
    }

    return (
        <div>
            <form onSubmit={submitHandler} className="d-flex">
                <div className="form-group d-flex" >
                    <label htmlFor="">Planets:</label>
                    <select name="" id="" className="form-select" onChange={(e)=>setPlanets(e.target.value)}>
                        <option value={planets}>{id}</option>
                    </select>
                </div>
                
                <div className="form-group d-flex">
                    <label htmlFor="">ID:</label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=>setId(e.target.value)} />
                </div>
                <input type="submit" value="search" />
            </form>
        </div>
    );
};

export default StarWarsSearchForm;