import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const RegistrationForm = () => {


    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");

    let [formErrors, setFormErrors] = useState({})

    const history = useHistory();

    const registerUser = (e)=>{
        e.preventDefault();
        let formInfo = {firstName,lastName,email,password,confirmPassword};
        axios.post('http://localhost:8000/api/user/register', formInfo, {withCredentials:true})
            .then(res=>{
                console.log('res after registering',res)
                if(res.data.errors){
                    setFormErrors(res.data.errors)
                }else{
                    //redirect to dashboard
                    history.push('/dashboard')
                }
            })
            .catch(err=>{
                console.log('err after register',err)
            })
    }

    return (
        <div className="m-3">
            <h2 className="m-3"> Register </h2>
            <form className="m-3" onSubmit={registerUser}>
                <div className="form-group">
                    <label htmlFor="" className="m-3">First Name:</label>
                    <input type="text" name="firstName" className="form-control" onChange={(e) => setFirstName(e.target.value)} />
                    <p className="text-danger">{formErrors.firstName?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="" className="m-3">Last Name:</label>
                    <input type="text" name="lastName" className="form-control" onChange={(e) => setLastName(e.target.value)} />
                    <p className="text-danger">{formErrors.lastName?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="" className="m-3">Email:</label>
                    <input type="text" name="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                    <p className="text-danger">{formErrors.email?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="" className="m-3">Password:</label>
                    <input type="password" name="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                    <p className="text-danger">{formErrors.password?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="" className="m-3">Confirm Password:</label>
                    <input type="password" name="confirmPassword" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} />
                    <p className="text-danger">{formErrors.confirmPassword?.message}</p>
                </div>
                <input type='submit' value='Register' className='btn btn-primary m-3' />
            </form>

        </div>
    );
};


export default RegistrationForm;