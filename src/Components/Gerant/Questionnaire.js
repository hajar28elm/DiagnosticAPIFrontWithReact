import { Dashboard } from "../Admin/Dashboard";
import { useState, useEffect } from "react";
import axios from 'axios';

export function Questionnaire() {
  const [data, setData] = useState([]);
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userResponses, setUserResponses] = useState({});

  useEffect(() => {
    // Fetch questions and responses from your API
    axios.get("http://127.0.0.1:8000/api/questions")
      .then((questionsResponse) => {
        const fetchedQuestions = questionsResponse.data.data;
        setData(fetchedQuestions);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });

    axios.get("http://127.0.0.1:8000/api/responses")
      .then((responsesResponse) => {
        const fetchedResponses = responsesResponse.data.data;
        setResponse(fetchedResponses);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching responses:", error);
      });
  }, []);

  const handleResponseChange = (questionId, selectedResponse) => {
    setUserResponses((prevUserResponses) => ({
      ...prevUserResponses,
      [questionId]: selectedResponse,
    }));
  };

  const handleSubmitResponses = () => {
    // Prepare user responses for submission in the expected format
    const userResponsesForApi = {};
    for (const questionId in userResponses) {
      userResponsesForApi[questionId] = userResponses[questionId];
    }

    // Send user responses to the server
    axios.post("http://127.0.0.1:8000/api/diagnostics/batchStore", { responses: userResponses })
      .then((response) => {
        console.log("Responses submitted successfully", response);
      })
      .catch((error) => {
        console.error("Error submitting responses:", error);
      });
  };

  return (
    <div>
      <Dashboard lien1="questionnaire" lien2="diagnosticEntreprise" />
      <div className="container mt-5">
        <div className="row">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th colSpan="3" style={{ color: "white", fontSize: "30px", backgroundColor: "#033C4D" }}>
                    Question table
                  </th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th style={{ width: "500px" }}>Category</th>
                  <th style={{ width: "500px" }}>Question</th>
                  <th>Response</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.category}</td>
                    <td>{item.description}</td>
                    <td>
                      <select
                        style={{ width: "500px" }}
                        onChange={(e) => handleResponseChange(item.id, e.target.value)}
                        value={userResponses[item.id] || ""}
                      >
                        <option value="">Select a response</option>
                        {response.map((res) => (
                          <option key={res.id} value={res.id}>
                            {res.description}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <button className="btn btn-primary" style={{ width: "200px" }} onClick={handleSubmitResponses}>
            Submit Responses
          </button>
        </div>
      </div>
    </div>
  );
}
