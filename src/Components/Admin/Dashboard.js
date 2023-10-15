import { Link,useNavigate } from "react-router-dom"
export function Dashboard(props){

    const navigate = useNavigate();
    const handleSubmit = (e)=>{

          navigate('/login');
          e.preventDefault();
    }
    return(
        <>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
           <div class="container-fluid" style={{backgroundColor:"#404040",color:"white"}}>
             <Link class="navbar-brand" to="/" style={{color:"white"}}>Navbar</Link>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
             </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={`/${props.lien1}`} style={{color:"white"}}>{props.lien1}</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={`/${props.lien2}`} style={{color:"white"}}>{props.lien2}</Link>
         </li>
          </ul>
      <form class="d-flex" role="search" onSubmit={handleSubmit}>
        <button class="btn btn-outline-success" type="submit" style={{color:"white"}}>Logout</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
}