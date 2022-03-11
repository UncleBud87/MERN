import React, { useState } from 'react';


const UserForm = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    return (
        <>
        <form onSubmit={createUser}>
            <h3>{formMessage()}</h3>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
                {
                    firstname.length<2 && firstname.length>0? <p>Name must be at least 2 characters</p> : null
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
                {
                    lastname.length<2 && lastname.length>0? <p>Name must be at least 2 characters</p> : null
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                {
                    email.length<2 && email.length>0? <p>Email must be at least 2 characters</p> : null
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                {
                    password.length<2 && password.length>0? <p>Password must be at least 2 characters</p> : null
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } />
                {
                    confirmpassword.length>0 && password!==confirmpassword? <p>Passwords do not match</p> : null
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
        <p>First Name: {firstname} </p>
        <p>Last Name: {lastname} </p>
        <p>Email Address: {email} </p>
        <p>Password: {password} </p>
        <p>Confirm Password: {confirmpassword} </p>
        </>
    );
};

export default UserForm;