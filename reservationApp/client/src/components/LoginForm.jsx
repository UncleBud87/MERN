import React from "react";

const LoginForm = () => {
    return (
        <div className="border border-dark m-3">
            <h2 className="m-3"> Login </h2>
            <form className="m-3">
                <div className="form-group">
                    <label htmlFor="" className="m-3">Email:</label>
                    <input type="text" name="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor=""className="m-3">Password:</label>
                    <input type="password" name="password" className="form-control" />
                </div>
                <input type='submit' value='Login' className='btn btn-primary m-3' />
            </form>
            
        </div>
    );
};


export default LoginForm;