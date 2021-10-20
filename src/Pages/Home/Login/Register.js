import Button from "@restart/ui/esm/Button";
import React, { useContext, useState } from "react";
import useFirebase from "../../../Hooks/useFirebase";
import useAuth from "../../../Hooks/useAuth";
import AuthContext from '../../../Contexts/AuthProvider'

const Register = () => {
    const {
        error,
        handleEmailChange,
        handlePasswordChange,
        handleFormcontrol,
        signInUsingGoogle
    } = useAuth()
    
 

    return (
        <div className="div d-flex justify-content-center align-items-center bg-dark me-auto">
            <div className="row ">
                <div className="col-md-6">
                    <div className="right-side-image">
                        <img
                            className="w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV1fX50dOgMEXzj2B-2Z1tHyfEvmlkdkMkVBTUQCuemKeSeylwRJfix_gh-7pYD33StHc&usqp=CAU"
                            alt=""
                        />
                    </div>
                    ;
                </div>
                <div className="col-md-6"> 
                <h2 className="text-white mt-5">Please Login</h2>
                    <div>
                        <form onSubmit={handleFormcontrol}>
                        <div className="form-input mt-5">
                            <input
                                onBlur={handleEmailChange}
                                className="mt-2 p-2"
                                type="email"
                                placeholder="Enter Your Email"
                            />
                            <br />
                            <input
                                onBlur={handlePasswordChange}
                                className="mt-2 p-2"
                                type="password"
                                placeholder="Enter Your Password"
                            />
                          

                            <br /> 
                            <div className="login-regiater-btn mt-4">
                            
                                <button className="bg-primary text-light px-4 mt-3 rounded"  type="submit">Register</button> 
                            </div> 
                            <span className="text-light"> {error}</span>
            
                        </div>
                        </form>
                        <div className="login-btn mt-4">
                           <button className="bg-warning  rounded px-4 mb-5"  onClick={signInUsingGoogle}>Google signIn</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
