import React from 'react';

const Peoples = (props)=> {

    return <>
    <div>
        <ul>
            <h3>{props.lastName}, {props.firstName}</h3>
            <li>Age: {props.age}</li>
            <li>Hair Color: {props.hairColor}</li>
        </ul>

    </div>
    </>
}

export default Peoples;
