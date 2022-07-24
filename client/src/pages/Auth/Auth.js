import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './auth.css'
import Logo from '../../img/logo1.png'
import { logIn, signUp } from '../../Actions/AuthAction'

const Auth = () => {

    const [isSignUp, setIsSignUp] = useState(true);
    const loading = useSelector((state) => state.authReducer.loading)
    const dispatch = useDispatch();
    console.log(loading)
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmpass: ""
    });
    const [confirmPass, setConfirmPass] = useState(true);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignUp) {
            data.password === data.confirmpass
                ? dispatch(signUp(data))
                : setConfirmPass(false)
        }
        else {
            dispatch(logIn(data));
        }
    }

    const resetForm = () => {
        setConfirmPass(true);
        setData({
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            confirmpass: ""
        });
    }

    return (
        <div className='Auth'>
            {/* Left side */}
            <div className='auth-left'>
                <img src={Logo} alt="" />
                <div className='webname'>
                    <h1>MERN Social</h1>
                    <h4>A social media website to explore the world</h4>
                </div>
            </div>

            {/* Right side  */}
            <div className="a-right">
                <form className="infoForm authForm" onSubmit={handleSubmit}>
                    <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>

                    {isSignUp && (
                        <div>
                            <input
                                type="text"
                                placeholder="First Name"
                                className="infoInput"
                                name="firstname"
                                onChange={handleChange}
                                value={data.firstname}
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="infoInput"
                                name="lastname"
                                onChange={handleChange}
                                value={data.lastname}
                            />
                        </div>
                    )}

                    <div>
                        <input
                            type="text"
                            className="infoInput"
                            name="username"
                            placeholder="Usernames"
                            onChange={handleChange}
                            value={data.username}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            className="infoInput"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            value={data.password}
                        />
                        {isSignUp && (
                            <input
                                type="password"
                                className="infoInput"
                                name="confirmpass"
                                placeholder="Confirm Password"
                                onChange={handleChange}
                                value={data.confirmpass}
                            />
                        )}

                    </div>

                    <span
                        style={{
                            color: "red",
                            fontSize: "12px",
                            alignSelf: "flex-end",
                            marginRight: "5px",
                            display: confirmPass ? "none" : "block",
                        }}
                    >
                        *Confirm password is not same
                    </span>

                    <div>
                        <span style={{ fontSize: '15px', cursor: "pointer", color: "var(--blue)", fontWeight: "bold" }}
                            onClick={() => { setIsSignUp((prev) => !prev); resetForm() }}>
                            {isSignUp ? "Already have an account? Log In!" : "Don't have an account? Sign Up"}
                        </span>
                    </div>
                    <button className="button infoButton" type="submit" disabled={loading}>
                        {loading ? "Loading" : isSignUp ? "Signup" : "Login"}
                    </button>
                </form>
            </div>
        </div >
    )
}

export default Auth