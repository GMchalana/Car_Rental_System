import React from 'react'
import logo from './Images/logo.png';
import background from './Images/bac.png';
import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

export default function Signup() {

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [number, setNumber] = useState()
    const [address, setAddress] = useState()
    const [password, setPassword] = useState()

    const handleSubmit= (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/register',{username, email, number, address, password})
        .then(res=>alert("Successfully Registered"))
        .then(res=>navigate('/'))
        .then(result => console.log(result))
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
                            id="username"
                            name="username"
                            // value={userCredentials.User_Name}
                            onChange={(e)=> setUsername(e.target.value)}
                            className="inputBx1"
                            placeholder='User Name'
                            required
                        />
                       
                    </div>

                  

                    <div className="inputContainer">
                        <input
                            type="text"
                            id="text"
                            name="email"
                            // value={userCredentials.User_Name}
                            onChange={(e)=> setEmail(e.target.value)}
                            className="inputBx1"
                            placeholder='email'
                            required
                        />
                       
                    </div>
                    <div className="inputContainer">
                        <input
                            type="text"
                            id="number"
                            name="number"
                            // value={userCredentials.User_Name}
                            onChange={(e)=> setNumber(e.target.value)}
                            className="inputBx1"
                            placeholder='number'
                            required
                        />
                       
                    </div>
                    <div className="inputContainer">
                        <input
                            type="text"
                            id="address"
                            name="address"
                            // value={userCredentials.User_Name}
                            onChange={(e)=> setAddress(e.target.value)}
                            className="inputBx1"
                            placeholder='address'
                            required
                        />
                       
                    </div>
                    <div className="inputContainer">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            // value={userCredentials.User_Name}
                            onChange={(e)=> setPassword(e.target.value)}
                            className="inputBx1"
                            placeholder='Password'
                            required
                        />
                       
                    </div>
                    <div className="inputContainer">
                        <input
                            type="password"
                            id="conform_password"
                            name="conform_password"
                            // value={userCredentials.User_Name}
                            // onChange={handleInput}
                            className="inputBx1"
                            placeholder='conform password'
                            required
                        />
                       
                    </div>

                    
                    <br/>

                    <div>
                        <input
                        type="submit"
                        name="submit-btn"
                        value="Signup"
                        className="inputBxL"
                        />
                    </div>
                    </form>
                    
                    <br/>

                </div>


                <div className='right'>
                    <img className="back" src={background} alt="Form" />
                </div>

            </section>      
        </div>
  )
}
