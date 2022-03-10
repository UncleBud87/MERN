import React, { Component } from 'react';

class People extends Component {

    constructor(props) {
        super(props);
        const birthdayButton = ()=>{
            this.props.age+=1
        }
    }



    render() {
        return (
            <div>
                <list>
                    <ul>
                        <h3>{this.props.lastName}, {this.props.firstName}</h3>
                        <li>Age: {this.props.age}</li>
                        <li>Hair Color: {this.props.hairColor}</li>
                    </ul>
                </list>
                <button onClick = {this.birthdayButton}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        )
    }
}


export default People