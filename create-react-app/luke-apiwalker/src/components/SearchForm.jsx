import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchForm = () => {
    let [category, setCategory] = useState("planets");
    let [id, setId] = useState();
    const history = useHistory();

    const FormInfo = (e) => {
        e.preventDefault();
        console.log(category)
        console.log(id)
        history.push(`/${category}/${id}`);
    }

    return (
        <div>
            <form onSubmit={FormInfo}>
                <label>Search for:</label>
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value="planets">Planets</option>
                    <option value="people">People</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="species">Species</option>
                </select>
                <label>ID: </label>
                <input type="text" onChange={(e) => setId(e.target.value)}></input>
                <input type="submit" />
            </form>
        </div>
    )
}
export default SearchForm