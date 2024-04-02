import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
// const jwt = require('jsonwebtoken');
// const jwt_secret = "jwtsecrettest"
const Navbar = () => {
    let location = useLocation;
    useEffect(() => {
    }, [location]);

    var userd;

    useEffect(()=>{
        const name = async () => {
            // api call  to fetch user detail in backend
            const response = await fetch("https://inotebook-backend-c3zu.onrender.com/auth/getUser", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
              },
            });
             userd = await response.json();
            console.log(userd)
            }
            name();
    },[])
    
        

    let navigate = useNavigate();
    const handleLogout = ()=>{
        localStorage.removeItem('token');
        navigate("/login");
    }

    const handleUserinfo = ()=>{
        navigate("/UserInfo");
    }

    return (
        <>
        
            <div >
                <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">INOTEBOOK</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className={`nav-link  ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link light ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link light ${location.pathname === "/contactUs" ? "active" : ""}`} to="/contactUs">ContactUs</Link>
                                </li>
                            </ul>
                            { !localStorage.getItem('token')?<form >
                            <Link className="btn btn-success mx-1" to="/Login" role="button" >Login</Link>
                            <Link className="btn btn-success mx-1" to="/SignUp" role="button">SignUp</Link>
                            </form>:<form ><i className="fa-regular fa-user mx-2" style={{color: "#dcf236"}} onClick={handleUserinfo}></i>
                                <button className="btn btn-success mx-1" onClick={handleLogout}>Logout</button>
                            </form>}
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
