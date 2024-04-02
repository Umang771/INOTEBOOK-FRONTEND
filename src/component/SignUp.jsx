import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Background from '../wallpaperflare.com_wallpaper.jpg';

const SignUp = () => {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        let goodpassword = (credentials.password === credentials.cpassword)
        if (goodpassword) {
            const response = await fetch('https://inotebook-backend-c3zu.onrender.com/auth/createUser', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
            });
            const json = await response.json();
            console.log(json);
            if (json.authtoken) {
                localStorage.setItem('token', json.authtoken);
                navigate("/");
            }
            else {
                console.log(json)
                alert(json)
            }
        }
        else {
            alert("confirm Password and Password didnot match")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })

    }

    return (
        <div className="container " style={{marginTop:"1.5rem", backgroundImage: `url(${Background})`,backgroundPosition: "center"}}>
            <form onSubmit={handleClick}>
                <div className="container mb-3" style={{marginLeft:".5rem",marginRight:"1.5rem"}}>
                    <div className="mb-3 mx-9">
                        <label htmlFor="name" className="form-label"><b>Name</b></label>
                        <input type="text" className="form-control" value={credentials.name} name='name' onChange={onChange} id="name" aria-describedby="name" minLength={3} required />
                    </div>
                    <div className="mb-3 mx-9">
                        <label htmlFor="email" className="form-label"><b>Email address</b></label>
                        <input type="email" className="form-control" value={credentials.email} name='email' onChange={onChange} id="email" aria-describedby="email" minLength={5} required />
                    </div>
                    <div className="mb-3 mx-9">
                        <label htmlFor="password" className="form-label"><b>Password</b></label>
                        <input type="password" className="form-control" value={credentials.password} name='password' onChange={onChange} id="password" minLength={5} required />
                    </div>
                    <div className="mb-3 mx-9">
                        <label htmlFor="cpassword" className="form-label"><b>Confirm Password</b></label>
                        <input type="password" className="form-control" value={credentials.cpassword} name='cpassword' onChange={onChange} id="cpassword" minLength={5} required />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" >SignUp</button>
            </form>
        </div>
    )
}

export default SignUp
