import { Dashboard } from "../Admin/Dashboard";
import { useState,useEffect } from "react";
import axios from 'axios';
export function Questionnaire(){
    const [data, setData] = useState([]);
    const [response,setResponse] = useState([]);
    const [loading, setLoading] = useState(true);
    // eslint-disable-next-line no-unused-vars
    const [userResponses, setUserResponses] = useState([]);
  
    useEffect(() => {
      setTimeout(() => {
        const fetchedData = [
          { id: 1 , category:"category 1", question: "Question 1", reponses:["je suis d'accord","je desaccord"]},
          { id:2 , category: "category 2",question: "Question 2", reponses:["je suis d'accord","je desaccord"]},
        ];
  
        setData(fetchedData);
        setLoading(false);
      }, 2000);
      axios.get("/getQuestions")
      .then((response) => {
        const fetchedData = response.data;
        setData(fetchedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
      axios.get("/getResponses")
      .then((response) => {
        const fetchedResponse = response.data;
        setResponse(fetchedResponse);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching responses:", error);
      });
      
    }, []);
      
       const handleSubmitResponse  = () =>{
        const userResponsesTab = data.map((question) => ({
          questionId: question.id,
          responseId: response.find((res) => res.description === userResponses[question.id]),
          userId: "USER_ID_HERE",
        }));
        axios.post("/submitResponses", userResponsesTab)
          .then((response) => {
            console.log("Responses submitted successfully", response);
          })
          .catch((error) => {
            console.error("Error submitting responses:", error);
          });
       }
    return (
        <div>
        <Dashboard lien1="questionnaire" lien2="diagnosticEntreprise"/>
        <div className="container mt-5">
      <div className="row">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="table">
             <thead>
                <tr >
                <th colSpan="3" style={{color:"white",fontSize:"30px",backgroundColor:"#033C4D"}}>Question table</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th style={{width:"500px"}}>Category</th>
                <th style={{width:"500px"}}>Question</th>
                <th>Response</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.category}</td>
                  <td>{item.question}</td>
                  <td>
                    {/* <select style={{width:"500px"}} onChange={(e) => { setUserResponses({...userResponses,[item.id]: e.target.value,});}} >
                        {
                            response.map((res) =>{
                                return <option key={res.id} value={res.description}>{res.description}</option>;
                            })
                        }
                    </select> */}
                    <select style={{width:"500px"}}>
                    {
                            item.reponses.map((res) =>{
                                return <option key={res} value={res}>{res}</option>;
                            })
                        }
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <button className="btn btn-primary" style={{width:"200px"}} type="submit" onClick={handleSubmitResponse}>Submit Responses</button>
      </div>
      </div>
      </div>
    )
}