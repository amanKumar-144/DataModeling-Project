import React from 'react';
import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { useSelector } from 'react-redux';
import {selectUserRole} from "./features/userSlice";
import Login from "./components/Login/Login";
import SeekerLoginForm from "./components/Login/SeekerLoginForm";
import Company from './components/Company/Company';
import Seeker from './components/Seeker/Seeker';
import Trainer from './components/Trainer/Trainer';
import Admin from './components/Admin/Admin';

const App = () => {
  const userRole = useSelector(selectUserRole);


  return (
    <div>
      <Router>
        {
          userRole && userRole==="Seeker" && (
            <Routes>
              <Route path="/seekerDashboard" element={<Seeker />}/>
              <Route path="/seekerLoginForm" element={<SeekerLoginForm />} />
            </Routes>
          )
        }
        {
          userRole && userRole==="Company" && (
            <Routes>
              <Route path="/companyDashboard" element={<Company />}/>
            </Routes>
          )
        }
        {
          userRole && userRole==="Trainer" && (
            <Routes>
              <Route path="/trainerDashboard" element={<Trainer />}/>
            </Routes>
          )
        }
        {
          userRole && userRole==="Admin" && (
            <Routes>
              <Route path="/adminDashboard" element={<Admin />}/>
            </Routes>
          )
        }
        {
          !userRole && (
            <Routes>
              <Route path="/" element={<Login />}/>
            </Routes>
          )
        }
      </Router>
    </div>
  )
}

export default App