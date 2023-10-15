import { useEffect, useState } from 'react';
import './App.css';
import {Routes , Route, Link} from 'react-router-dom';
import { Login } from './Components/Authentification/Login';
import { Register } from './Components/Authentification/Register';
import { Dashboard } from './Components/Admin/Dashboard';
import { Question } from './Components/Admin/Question';
import { Diagnostic } from './Components/Admin/Diagnostic';
import { Questionnaire } from './Components/Gerant/Questionnaire';
import { DiagnosticEntreprise } from './Components/Gerant/DiagnosticEntreprise';
import { NewQuestionForm } from './Components/Admin/Question';
import { NewResponseForm } from './Components/Admin/Question';
import { EditQuestionForm } from './Components/Admin/Question';
function App() {
  useEffect(()=>{
    document.title = "Diagnostic API"
  },[]);
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  return (
    <div className="App">
           {!isLoggedIn && (
           <div>
             <Link to="/login" className="btn btn-primary"> Go to login </Link>
            <Link to="/register" className="btn btn-secondary ml-2"> Go to register</Link>
        </div>
      )}
           <Routes>
           <Route path='/login' element={<Login onLogin={() => setIsLoggedIn(true)}/>}/>
           <Route path='/register' element={<Register onRegister={() => setIsLoggedIn(true)}/>} />
           <Route path='/dashboard' element={<Dashboard lien1="diagnostics" lien2="questions"/>} />
           <Route path='/questions' element={<Question/>} />
           <Route path="questions/createQuestion" element={<NewQuestionForm />} />
           <Route path="questions/createResponse" element={<NewResponseForm />} />
           <Route path="questions/edit/:id" element={<EditQuestionForm />} />
           <Route path='/diagnostics' element={<Diagnostic/>} />
           <Route path='/questionnaire' element={<Questionnaire/>} />
           <Route path='/diagnosticEntreprise' element={<DiagnosticEntreprise/>} />
           </Routes>

       
    </div>
  );
}

export default App;
