import React, { Component } from 'react';

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };


        this.birthdayButton = () => {
            console.log('i like alot')
            this.setState({age: this.state.age+1})
        }   
    }

    render() {
        return (
            <div>
                    <ul>
                        <h3>{this.props.lastName}, {this.props.firstName}</h3>
                        <li>Age: {this.state.age}</li>
                        <li>Hair Color: {this.props.hairColor}</li>
                    </ul>
                <button onClick = {this.birthdayButton}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div >
        )
    }
}


export default People