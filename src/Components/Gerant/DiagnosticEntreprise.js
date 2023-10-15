import { Dashboard } from "../Admin/Dashboard"
import { useState,useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import axios from "axios";
export function DiagnosticEntreprise(){
    // eslint-disable-next-line no-unused-vars
    const [userId, setUserId] = useState(null);
    const [categoryWithScores,setCategoryWithScores] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      //const user = fetchUserId();
    //    const user=1;
    //   if (user) {
    //     setUserId(user.id);
    //     axios.post("/user/diagnostics", { userId: user.id })
    //       .then((response) => {
    //         const data = response.data;
    //         setCategoryWithScores(data);
    //         console.log("retrieved data", data);
    //       })
    //       .catch((error) => {
    //         console.error("Error sending user ID:", error);
    //       });
    //   }
      setTimeout(() => {
        const fetchedData = [
          { pourcentage: "10", category: 'service de production'},
          { pourcentage: "60", category: 'ressource humaine' },
          { pourcentage: "70", category: 'finance' },
        ];
  
        setCategoryWithScores(fetchedData);
        setLoading(false);
      }, 2000);
      
    }, []);
     return (
        <> 
           
            <Dashboard lien1="questionnaire" lien2="diagnosticEntreprise"/>
            <div className="container mt-5" style={{marginLeft:"150px"}}>
             <div className="row">
             {loading ? (
               <p>Loading...</p>
            ) : (
                <>
               {categoryWithScores.map((item) => (
               <div key={item.category} className="card border-primary mb-3" style={{ width: "18rem", marginRight: "20px" }}>
                   <div className="card-header" >{item.category}</div>
                   <div className="card-body text-primary">
                   <h5 className="card-title">Score: {item.pourcentage} %</h5>
                   <p className="card-text">Some additional information about this category.</p>
                  </div>
               </div>
              ))}
              </>
             )}
            </div>
            </div>
        </>
     )
}