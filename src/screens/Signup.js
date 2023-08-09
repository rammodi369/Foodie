import React, { useState } from 'react'
import { Link } from 'react-router-dom';
function Signup() {
    const [credentials, setfirst] = useState({ name: "", email: "", password: "", geolocation: "" });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://192.168.1.8:5000/api/createUser", {
            method: "POST",
            header: {
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
    }
    const onChange = (e) => {
        setfirst({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className='container'>
                <form onSubmit={ handleSubmit }>
                    <div class="mb-3">
                        <label htmlFor="name" class="form-label">Name</label>
                        <input type="text" class="form-control" name='name' value={credentials.name} onChange={onChange} />

                    </div>
                    <div class="mb-3">
                        <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" onChange={onChange} aria-describedby="emailHelp" name='email' value={credentials.email} />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" name='password' onChange={onChange} id="exampleInputPassword1" value={credentials.password} />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="exampleInputPassword1" class="form-label">Address </label>
                        <input type="password" class="form-control" name='geolocation' onChange={onChange} id="exampleInputPassword1" value={credentials.geolocation} />
                    </div>
                    <button type="submit" class=" m-3 btn btn-success">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'>Already a user </Link>
                </form>
            </div>
        </div>
    )
}

export default Signup
