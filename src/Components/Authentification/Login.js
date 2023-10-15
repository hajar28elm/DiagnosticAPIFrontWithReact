import React from "react"
import {useNavigate} from "react-router-dom";
import { useState } from "react";
//import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import axios from "axios";
export function Login({onLogin}){
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const bag={
        width:"500px",
        justifyContent: "center",
        alignItems: "center",
        height: "200 vh",
        marginTop: "150px",
    }

    const handleSubmit = (e)=>{
      onLogin();
      e.preventDefault();
        const userRole = 'admin';

        if (userRole === 'admin') {
          navigate('/dashboard');
        } else {
          navigate('/questionnaire');
        }
    
    }
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   try {
    //     const response = await axios.post("/api/login", {
    //       email,
    //       password,
    //     });
    // 
    //     const userRole = response.data.userRole;
  
    //     if (userRole === "admin") {
    //       navigate("/dashboard");
    //     } else {
    //       navigate("/questionnaire");
    //     }
    //   } catch (error) {
    //     console.error("Login failed:", error);
    //   }
    // };
    // useEffect(() =>{
    //   handleSubmit()
    //  ;},[])
    
   return(
    <div className="container" style={{marginLeft:"400px"}}>
     <div className="row">
    <div className="mb-4" style={bag}> 
      <form onSubmit={handleSubmit}>
       <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control block mt-1 w-full" id="email" aria-describedby="emailHelp"/>
      </div>
     <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="form-control" id="password"/>
  </div>
    <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="Check"/>
    <label className="form-check-label" htmlFor="Check">Remember me</label>
    </div>
  <button type="submit" className="btn btn-primary">Login</button>
</form>
    </div>
    </div>
    </div>
   )

}