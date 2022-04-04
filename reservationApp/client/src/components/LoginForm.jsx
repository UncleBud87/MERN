import React, {useState} from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const LoginForm = () => {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let [loginFormError, setLoginFormError] = useState("");

    const history= useHistory();

    const login = (e)=>{
        e.preventDefault();
        let formInfo = {email,password};
        axios.post('http://localhost:8000/api/user/login', formInfo, {withCredentials:true})
            .then(res=>{
                console.log("log in response", res)
                if(res.data.error){
                    setLoginFormError(res.data.error)
                }else{
                    history.push('/dashboard')
                }
            })
            .catch(err=>console.log("log in err",err))
    }


    return (
        <div className=" m-3">
            <h2 className="m-3"> Login </h2>
            <form className="m-3" onSubmit={login}>
                <div className="form-group">
                    <label htmlFor="" className="m-3">Email:</label>
                    <input type="text" name="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor=""className="m-3">Password:</label>
                    <input type="password" name="password" className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <p className="text-danger">{loginFormError}</p>
                <input type='submit' value='Login' className='btn btn-primary m-3' />
            </form>
            
        </div>
    );
};


export default LoginForm;