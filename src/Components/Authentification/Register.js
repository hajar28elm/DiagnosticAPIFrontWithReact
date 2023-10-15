import { Link,useNavigate } from "react-router-dom"
import { useState, } from "react"
//import { useEffect } from "react";
export function Register({onRegister}){
    const navigate = useNavigate()
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const bag={
        width: "500px",
        justifyContent: "center",
        alignItems: "center",
        height: "200 vh",
        marginTop: "150px",
    }
    const handleSubmit = (e) =>{
        onRegister();
       navigate("/questionnaire");
       e.preventDefault();
    }
      // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   try {
    //     const response = await axios.post("/api/register", {
    //       name,
    //       email,
    //       password,
    //       confirmPassword,
    //     });
    //       navigate("/questionnaire");
    //     }
    //   } catch (error) {
    //     console.error("Register failed:", error);
    //   }
    // };
    // useEffect(() =>{
    //     handleSubmit()
    //    ;},[])
    
   return(
    <div className="container" style={{marginLeft:"400px"}}>
     <div className="row">
    <div className="mb-4" style={bag}> 
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control block mt-1 w-full" id="name"/>
      </div>
       <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control block mt-1 w-full" id="email" aria-describedby="emailHelp"/>
      </div>
     <div className="mb-3">
     <label htmlFor="password" className="form-label">Password</label>
     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password"/>
     </div>
     <div className="mb-3">
     <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
     <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" id="confirm-password"/>
     </div>
     <div className="col-md-6">
      <Link to="/login" style={{marginRight:"10px"}}>Already registered</Link>
     <button type="submit" className="btn btn-primary" style={{marginRight:"10px"}}>Register</button>
     </div>
</form>
    </div>
    </div>
    </div>
   )

}