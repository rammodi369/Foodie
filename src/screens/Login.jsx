import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";

function Login() {
  const [credentials, setfirst] = useState({ email: "", password: "" });
 const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://foodie2.onrender.com/api/loginUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
   
    if (!json.success) {
      alert("enter valid credentials or you have to signup");
    }
    if(json.success){
      localStorage.setItem('userEmail', credentials.email)
       console.dir(localStorage.getItem("userEmail"))
      localStorage.setItem("authToken",json.authToken);
      
      navigate("/")
    }
  };
  const onChange = (e) => {
    setfirst({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              onChange={onChange}
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
{/*                <div className="input-group" id="show_hide_password">
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={onChange}
           
              value={credentials.password}
            /> */}
       <input name="password" type="password" value={credentials.password}  onChange={onChange} className="input form-control" id="password" placeholder="password" required="true" aria-label="password" aria-describedby="basic-addon1" />
              <div className="input-group-append">
                <span className="input-group-text" onclick="password_show_hide();">
                  <i className="fas fa-eye" id="show_eye"></i>
                  <i className="fas fa-eye-slash d-none" id="hide_eye"></i>
                </span>
              </div>
  
          </div>

          <button  type="submit" className=" m-3 btn btn-success">
            Submit
          </button>
          <Link to="/createUser" className="m-3 btn btn-danger">
          I'm a new User
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
