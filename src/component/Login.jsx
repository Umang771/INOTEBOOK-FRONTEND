import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Login = () => {

  const [credentials, setCredentials] = useState({ email: "", password: "" })
  let navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await fetch('https://inotebook-backend-c3zu.onrender.com/auth/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success == true) {
       localStorage.setItem("token", json.authtoken);
      console.log(localStorage.getItem("token"));
      navigate("/");
    }
    else alert(json.error)
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })

  }

  return (
    <div className="container my-4">
      <form onSubmit={handleClick}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" value={credentials.email} name='email' onChange={onChange} aria-describedby="emailHelp" minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">Password</label>
          <input type="password" className="form-control" value={credentials.password} name="password" onChange={onChange} id="Password" minLength={5} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login
