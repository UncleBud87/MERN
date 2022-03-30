import axios from "axios";
import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";

const Dashboard = () => {

    const history = useHistory();

    let[loggedInUser, setLoggedInUser] = useState({})

    useEffect(()=>{
        axios.get('http://localhost:8000/api/user/logged_in_user',{withCredentials:true})
            .then(res=>{
                console.log('res when logging in', res)
                if(res.data.results){
                    setLoggedInUser(res.data.results)
                }
                    
            })
            .catch(err=>{

                console.log('err when logging in', err)
                history.push('/')

            })
    }, [])

    const logout = ()=>{
        axios.get('http://localhost:8000/api/user/logout', {withCredentials:true})
        .then(res=>{
            history.push('/')
        })
        .catch(err=>{
            console.log('err logging out', err)
        })
    }

    return (
        <div>
            <h1>Welcome {loggedInUser.firstName} to the Dashboard</h1>
            <button className="btn btn-info" onClick={logout}>Log Out</button>
        </div>
    );
};


export default Dashboard;