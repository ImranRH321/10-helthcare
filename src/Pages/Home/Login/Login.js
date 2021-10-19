import React, { useState } from "react";
import useFirebase from "../../../Hooks/useFirebase";

const Login = () => {
    const {
        handleGoogleLogin,
        user,
        handleUserRegister,
        handleUserLogin,
    } = useFirebase();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const hanldeEmail = (e) => {
        setEmail(e.target.value);
    };
    const hanldePassword = (e) => {
        setPassword(e.target.value);
    };

    // console.log(email, password);

    const handleRegister = () => {
        handleUserRegister(email, password);
    };

    const handleLogin = () => {
        handleUserLogin(email, password);
    };

    return (
        <div className="div d-flex justify-content-center align-items-center bg-primary">
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
                    <div>
                        <div className="form-input mt-5">
                            <input
                                onChange={hanldeEmail}
                                className="mt-2 p-2"
                                type="email"
                                placeholder="Email"
                            />
                            <br />
                            <input
                                onChange={hanldePassword}
                                className="mt-2 p-2"
                                type="password"
                                placeholder="Password"
                            />
                            <br />
                            <div className="login-regiater-btn mt-4">
                                <button
                                    onClick={handleRegister}
                                    className="btn btn-primary me-1"
                                >
                                    Register
                                </button>
                                <button onClick={handleLogin} className="btn btn-success ms-1">
                                    Login
                                </button>
                            </div>
                        </div>
                        <div className="login-btn mt-4">
                            <button
                                onClick={handleGoogleLogin}
                                className="btn btn-warning m-2"
                            >   
                              google sign in
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;