import { useState,useEffect } from "react";
import { Dashboard } from "./Dashboard";
import { Link,Outlet, useNavigate,useSearchParams } from "react-router-dom";
import axios from "axios";

export const EditQuestionForm = () =>{
  const [description,setDescription] = useState("");
  const [category,setCategory] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialDescription = searchParams.get("description") || "";
  const initialCategory = searchParams.get("category") || "";
  useEffect(() => {
    setDescription(initialDescription);
    setCategory(initialCategory);
  }, [initialDescription, initialCategory]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const question = {
      description: description,
      category: category,
    };

    try {
      const response = await axios.put('/api/editQuestion', question);
      console.log('Question updated successfully:', response.data);
      setDescription('');
      setCategory('');
      navigate('/questions');

    } catch (error) {
      console.error('Error updating the question:', error);
    }
  };
  return(
       <div>
       <Dashboard lien1="diagnostics" lien2="questions"/>
       <h1>Edit Question</h1>
       <div className="container mt-5">
        <div className="row">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
         <label htmlFor="description" className="form-label">Description</label>
         <textarea value={description} onChange={(e)=>setDescription(e.target.value)}  className="form-control block mt-1 w-full" id="description" aria-describedby="emailHelp"/>
         </div>
         <div className="mb-3">
         <label htmlFor="category" className="form-label">Category</label>
         <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} className="form-control" id="category"/>
       </div>
      <button type="submit" className="btn btn-primary">Submit</button>
       </form>
       </div>
       </div>
   </div>
  );
}
export const NewQuestionForm= () =>{
    const [description,setDescription] = useState("");
    const [category,setCategory] = useState("");
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
      e.preventDefault();
      const question = {
        description: description,
        category: category,
      };
  
      try {
        const response = await axios.post('/api/createQuestion', question);
        console.log('Question created successfully:', response.data);
        setDescription('');
        setCategory('');
        navigate('/questions');

      } catch (error) {
        console.error('Error creating the question:', error);
      }
    };
    return(
         <div>
         <Dashboard lien1="diagnostics" lien2="questions"/>
         <h1>Create a New Question</h1>
         <div className="container mt-5">
          <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
           <label htmlFor="description" className="form-label">Description</label>
           <textarea value={description} onChange={(e)=>setDescription(e.target.value)}  className="form-control block mt-1 w-full" id="description" aria-describedby="emailHelp"/>
           </div>
           <div className="mb-3">
           <label htmlFor="category" className="form-label">Category</label>
           <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} className="form-control" id="category"/>
         </div>
        <button type="submit" className="btn btn-primary">Submit</button>
         </form>
         </div>
         </div>
     </div>
    );
 }
 export const NewResponseForm= () =>{
  const [description,setDescription] = useState("");
  const [points,setPoints] = useState("");
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const reponse = {
      description: description,
      points: points,
    };

    try {
      const response = await axios.post('/api/createResponse', reponse);
      console.log('Response created successfully:', response.data);
      setDescription('');
      setPoints('');
      navigate('/questions');

    } catch (error) {
      console.error('Error creating the response:', error);
    }
  };
  return(
       <div>
       <Dashboard lien1="diagnostics" lien2="questions"/>
       <h1>Create a New Response</h1>
       <div className="container mt-5">
        <div className="row">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
         <label htmlFor="description" className="form-label">Description</label>
         <input value={description} onChange={(e)=>setDescription(e.target.value)}  className="form-control block mt-1 w-full" id="description" aria-describedby="emailHelp"/>
         </div>
         <div className="mb-3">
         <label htmlFor="points" className="form-label">Points</label>
         <input type="text" value={points} onChange={(e)=>setPoints(e.target.value)} className="form-control" id="points"/>
       </div>
      <button type="submit" className="btn btn-primary">Submit</button>
       </form>
       </div>
       </div>
   </div>
  );
}
export function Question(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // eslint-disable-next-line no-unused-vars
    const [questions,setQuestions] = useState([]);
  
    useEffect(() => {
      setTimeout(() => {
        const fetchedData = [
          { id: 1 , description: "Question 1", category: 'service de production'},
          { id:2 , description: "Question 2", category: 'ressource humaine' },
        ];
  
        setData(fetchedData);
        setLoading(false);
      }, 2000);
       // axios.get('/getAllQuestions')
      // .then((response) => {
      //   setQuestions(response.data);
      // })
      // .catch((error) => {
      //   console.error('Error fetching questions:', error);
      // });
    }, []);
    const deleteQuestion = (id) => {
      axios.delete(`/api/deleteQuestion/${id}`)
        .then(() => {
          setQuestions((prevQuestions) => prevQuestions.filter((question) => question.id !== id));
        })
        .catch((error) => {
          console.error('Error deleting question:', error);
        });
    };
  
    return (
  
        <div>
       <Dashboard lien1="diagnostics" lien2="questions"/>
        <div className="container mt-5">
      <div className="row">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="table">
             <thead>
                <tr >
                <th style={{color:"white",fontSize:"30px",backgroundColor:"#033C4D"}}>Manage Questions</th>
                <th style={{backgroundColor:"#033C4D",width:"470px"}}></th>
                <th style={{backgroundColor:"#033C4D"}}>
                     <Link className="btn btn-primary" style={{marginRight:"10px"}} to="createQuestion">Create new question</Link>
                     <Link className="btn btn-primary" style={{marginRight:"10px"}} to="createResponse">Create new response</Link>
                     <Outlet />
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th>Description</th>
                <th >Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.description}</td>
                  <td>{item.category}</td>
                  <td>
                     <div>
                     <Link className="btn btn-success"  to={`edit/${item.id}?description=${item.description}&category=${item.category}`} style={{marginRight:"20px"}}>Edit</Link>
                     <button className="btn btn-danger" onClick={() => deleteQuestion(item.id)}>Delete</button>
                     <Outlet />
                     </div>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* <tbody>
              {questions.map((item) => (
                <tr key={item.id}>
                  <td>{item.description}</td>
                  <td>{item.category}</td>
                  <td>
                     <div>
                     <Link className="btn btn-success"  to={`edit/${item.id}`} style={{marginRight:"20px"}}>Edit</Link>
                     <Link className="btn btn-danger">Delete</Link>
                     <Routes>
                         <Route path="edit:id" element={<Edit/>}></Route>
                     </Routes>
                     </div>
                  </td>
                </tr>
              ))}
            </tbody> */}
          </table>
        )}
      </div>
      </div>
      </div>
    );
}
