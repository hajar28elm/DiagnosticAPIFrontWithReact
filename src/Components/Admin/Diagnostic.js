import { Dashboard } from "./Dashboard"
import { useState,useEffect } from "react";
//import axios from "axios";
export function Diagnostic(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
   // const [diagnostics,setDiagnostics] = ([]);
  
    useEffect(() => {
      setTimeout(() => {
        const fetchedData = [
          { id: 1 , user:"hajar", description: "Question 1", reponse: 'je suis tout a fait d\'accord'},
          { id:2 , user: "Ahmed",description: "Question 2", reponse: 'je suis d\'accord' },
        ];
  
        setData(fetchedData);
        setLoading(false);
      }, 2000);
      // axios.get('/getAllDiagnostics')
      // .then((response) => {
      //   setDiagnostics(response.data);
      // })
      // .catch((error) => {
      //   console.error('Error fetching diagnostics:', error);
      // });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
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
                <th colSpan="3"style={{color:"white",fontSize:"30px",backgroundColor:"#033C4D"}}>Diagnostic Answers</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th>User</th>
                <th style={{width:"700px"}}>Question Description</th>
                <th>Response Description</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.user}</td>
                  <td>{item.description}</td>
                  <td>
                    {item.reponse}
                  </td>
                </tr>
              ))}
            </tbody>
            {/* <tbody>
              {diagnostics.map((item) => (
                <tr key={item.id}>
                  <td>{item.user}</td>
                  <td>{item.description}</td>
                  <td>
                    {item.reponse}
                  </td>
                </tr>
              ))}
            </tbody> */}
          </table>
        )}
      </div>
      </div>
      </div>
    )
}