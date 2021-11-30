import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useFirebase from "../../../Hooks/useFirebase";


const Login = () => {
  const {
    error, 
    handleEmailChange,
    handlePasswordChange,
    handleFormcontrol,
    signInUsingGoogle,
    processLogin
} = useAuth()

    return (
        <div className="div d-flex justify-content-center align-items-center bg-dark text-light py-5">
            <div className="row ">
                <div className="col-md-6">
                    <div className="right-side-image">
                        <img
                            className="w-100"
                            src="https://static.vecteezy.com/system/resources/previews/002/314/240/non_2x/biometric-access-control-web-design-with-people-characters-vector.jpg"
                            alt=""
                        />
                    </div>
                    ;
                </div>
                <div className="col-md-6"> 
                     <h2>Please Loign</h2>
                    <div>
                        <form onSubmit={handleFormcontrol}>
                        <div className="form-input mt-5">
                            <input
                                onBlur={handleEmailChange}
                                className="mt-2 p-2"
                                type="email"
                                placeholder="Email"
                            />
                            <br />
                            <input
                                onBlur={handlePasswordChange}
                                className="mt-2 p-2"
                                type="password"
                                placeholder="Password"
                            />
                            <br />
                            <div >
                        
                                <button className="bg-warning px-5 rounded mt-3" onClick={processLogin}  type="submit">Login</button> 
                            </div> 
                            <span>{error}</span>
            
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
