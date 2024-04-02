import React, { useState, useRef,useEffect } from 'react';
import '../App.css';
import '../UserInfo.css';

const UserInfo = () => {

    const [updatedDetails, setUpdatedDetails] = useState({name: "", email: ""})

    useEffect(()=>{
        const userDetails = async () => {
        const response = await fetch('https://inotebook-backend-c3zu.onrender.com/auth/getUser', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        let userdetail = await response.json();
        console.log(userdetail)
        setUpdatedDetails({name:userdetail.name,email:userdetail.email})
    }
    userDetails();
    },[])



    const onChange = (e) => {
        setUpdatedDetails({...updatedDetails, [e.target.name]: e.target.value })
      }


    const handleupdate = async() => {
        const response = await fetch('https://inotebook-backend-c3zu.onrender.com/auth/updateUser', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('token')
                },
                body: JSON.stringify({ name: updatedDetails.name, email: updatedDetails.email })
            });
            const json = await response.json();
            console.log(json)
            setUpdatedDetails({name:json.name,email:json.email})
    }

    return (
        <>
        <div>
            <div > 
                <div className='infoContainer'>
                    <h1>USER INFO</h1>
                    <div className='infoMain'>
                    <p>Name:   <span>{updatedDetails.name}</span></p>
                    <p>Email:   <span>{updatedDetails.email}</span></p>
                    </div>
                </div>
            </div>
        </div>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Updates Details
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="name" className="form-control" id="name" aria-describedby="name" name="name" placeholder="Enter name" value={updatedDetails.name} onChange={onChange} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email1">Email address</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="email" value={updatedDetails.email} onChange={onChange} required/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleupdate} data-bs-dismiss="modal">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserInfo
