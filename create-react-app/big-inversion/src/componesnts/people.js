import React from 'react';

const People = props => {

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


export default People