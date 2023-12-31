import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const [credentials, setfirst] = useState({ name: "", email: "", password: "", geolocation: "" });
    const navigate=useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://foodie2.onrender.com/api/createUser", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body:JSON.stringify({
                name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation
            })

        })
        const json = await response.json();
        console.log(json)
        if (!json.success) {
            alert("enter valid credentials")
        }
        else{
            alert("Success Login");
            navigate("/login");
        }
    }
    const onChange = (e) => {
        setfirst({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className='container'>
                <form onSubmit={ handleSubmit }>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
                          <div id="emailHelp" className="form-text">Name atleast of 5 characters</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" onChange={onChange} aria-describedby="emailHelp" name='email' value={credentials.email} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' onChange={onChange} id="exampleInputPassword1" value={credentials.password} />
                         <div id="emailHelp" className="form-text">Password is atleast of 8 characters</div>           
        </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address </label>
                        <input type="text" className="form-control" name='geolocation' onChange={onChange} id="exampleInputPassword1" value={credentials.geolocation} />
                    </div>
                    <button type="submit" className=" m-3 btn btn-success">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'>Already a user </Link>
                </form>
            </div>
        </div>
    )
}

export default Signup
