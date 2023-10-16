import { Dashboard } from "./Dashboard";
import { useState, useEffect } from "react";
import axios from "axios";

export function Diagnostic() {
  const [loading, setLoading] = useState(true);
  const [diagnostics, setDiagnostics] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/diagnostics')
      .then((response) => {
        setDiagnostics(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching diagnostics:', error);
      });
  }, []);

  return (
    <div>
      <Dashboard lien1="diagnostics" lien2="questions" />
      <div className="container mt-5">
        <div className="row">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th colSpan="3" style={{ color: "white", fontSize: "30px", backgroundColor: "#033C4D" }}>
                    Diagnostic Answers
                  </th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>User</th>
                  <th style={{ width: "700px" }}>Question Description</th>
                  <th>Response Description</th>
                </tr>
              </thead>
              <tbody>
                {diagnostics.map((item) => (
                  <tr key={item.id}>
                    <td>{item.user.name}</td>
                    <td>{item.question.description}</td>
                    <td>{item.response.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
