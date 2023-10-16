import { Dashboard } from "../Admin/Dashboard";
import { useState, useEffect } from "react";
import axios from "axios";

export function DiagnosticEntreprise() {
  const [categoryWithScores, setCategoryWithScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user diagnostics and scores from your API
    const user = 1; // Replace with the actual user or fetch it as needed

    if (user) {
      axios
        .get("http://127.0.0.1:8000/api/user/diagnostics", { userId: user.id })
        .then((response) => {
          const data = response.data.data;
          setCategoryWithScores(data);
          setLoading(false);
          console.log("Retrieved data", data);
        })
        .catch((error) => {
          console.error("Error fetching user diagnostics:", error);
        });
    }
  }, []);

  return (
    <>
      <Dashboard lien1="questionnaire" lien2="diagnosticEntreprise" />
      <div className="container mt-5" style={{ marginLeft: "150px" }}>
        <div className="row">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {Object.keys(categoryWithScores).map((categoryId) => {
                const category = categoryWithScores[categoryId];

                return (
                  <div
                    key={categoryId}
                    className="card border-primary mb-3"
                    style={{ width: "18rem", marginRight: "20px" }}
                  >
                    <div className="card-header">{category.category}</div>
                    <div className="card-body text-primary">
                      <h5 className="card-title">Score: {category.percentage} %</h5>
                      <p className="card-text">Some additional information about this category.</p>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}
