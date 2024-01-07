import React from 'react'
import logo from './Images/logo.png';
import background from './Images/bac.png';
import './Login.css';
import {useNavigate} from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

export default function Login() {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()


    const handleSubmit= (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/login',{username, password})
        
        .then(result => {
            console.log(result)
            if (result.data==="owner"){
                navigate('/OderDetails')
            }else{
                navigate('/CustomerHome')
            }
        })
        .catch(err=> console.log(err))
    }



    let navigate= useNavigate();


  return (
    <div>
            <section>
                <div className='leftpanel'>
                    <br/>

                    <div>
                        <img className="logo" src={logo} alt="Form" />
                    </div>
                
                    <br/>
                        <p className='topic'>Safe Drive Car Rental</p>
                    <br/>




                    <form onSubmit={handleSubmit}>
                    <div className="inputContainer">
                        <input
                            type="text"
                            id="User_Name"
                            name="User_Name"
                            // value={userCredentials.User_Name}
                            onChange={(e)=> setUsername(e.target.value)}
                            className="inputBx1"
                            placeholder='User Name'
                            required
                        />
                        {/* <label htmlFor="User_Name" className="inputLabel">
                            Username
                        </label> */}
                    </div>

                    <br/>

                    <div className="inputContainer">
                        <input
                            type="password"
                            id="User_Name"
                            name="User_Name"
                            // value={userCredentials.User_Name}
                            onChange={(e)=> setPassword(e.target.value)}
                            className="inputBx1"
                            placeholder='Password'
                            required
                        />
                        {/* <label htmlFor="User_Name" className="inputLabel">
                            password
                        </label> */}
                    </div>

                    
                    <br/>

                    <div>
                        <input
                        type="submit"
                        name="submit-btn"
                        value="Login"
                        className="inputBxL"
                        />
                    </div>
                    </form>
                    
                    <br/>

                    <div className='lastword'>
                        New Customer?
                        <div styles="text-color:blue" onClick={()=>{navigate("/Signup")}} >
                            Sign up
                        </div>

                    </div> 
                    
                    {/* onClick={()=>{navigate("/Signup")}} */}
                </div>


                <div className='right'>
                    <img className="back" src={background} alt="Form" />
                </div>

            </section>      
        </div>
  )
}
