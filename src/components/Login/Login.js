import React from 'react';
import "./Login.css";
import { useSelector,useDispatch } from 'react-redux';
import {login,logout,
    selectUserRole,selectUserName,
    selectUserAge,selectUserGender,
    selectUserEmail,selectUserNumber,
    selectUserEducationalInformation,
    selectUserSkills,selectUserRolesPreferred,
    selectCompanyName,selectCompanyEmail } from "../../features/userSlice";
import {Link} from 'react-router-dom';

import jobVideo from "../assets/video.mp4";
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';

const Login = (props) => {

    const dispatch = useDispatch();

    const userRole = useSelector(selectUserRole);
    const userName = useSelector(selectUserName);
    const userAge = useSelector(selectUserAge);
    const userGender = useSelector(selectUserGender);
    const userEmail = useSelector(selectUserEmail);
    const userNumber = useSelector(selectUserNumber);
    const userEducationalInformation = useSelector(selectUserEducationalInformation);
    const userSkills = useSelector(selectUserSkills);
    const userRolesPreferred = useSelector(selectUserRolesPreferred);
    const companyName = useSelector(selectCompanyName);
    const companyEmail = useSelector(selectCompanyEmail);

    const registerSeeker = () => {
        console.log("Register Seeker");
        dispatch(login({
            userRole:"Seeker",
            userName:"Aman",
            userAge:"21",
            userGender:"Male",
            userEmail:"aman.kumar@iiitb.org",
            userNumber:"9380480882",
            userEducationalInformation:"IMTech from IIIT-Bangalore",
            userSkills:["C++","Javascript","Python"],
            userRolesPreferred:["SDE-1","Member of Technical Staff","Data Scientist"],
            companyName:"",
            companyEmail:"",
        }))
    }
    const loginSeeker = () => {
        console.log("Login Seeker");
        dispatch(login({
            userRole:"Seeker",
            userName:"Aman",
            userAge:"21",
            userGender:"Male",
            userEmail:"aman.kumar@iiitb.org",
            userNumber:"9380480882",
            userEducationalInformation:"IMTech from IIIT-Bangalore",
            userSkills:["C++","Javascript","Python"],
            userRolesPreferred:["SDE-1","Member of Technical Staff","Data Scientist"],
            companyName:"",
            companyEmail:"",
        }))
    }
    const loginCompany = () => {
        console.log("Login Company");
        dispatch(login({
            userRole:"Company",
            userName:"",
            userAge:"",
            userGender:"",
            userEmail:"",
            userNumber:"",
            userEducationalInformation:"",
            userSkills:[],
            userRolesPreferred:[],
            companyName:"Adobe",
            companyEmail:"www.adobe.com",
        }))
    }
    const loginTrainer = () => {
        console.log("Login Trainer");
        dispatch(login({
            userRole:"Trainer",
            userName:"",
            userAge:"",
            userGender:"",
            userEmail:"",
            userNumber:"",
            userEducationalInformation:"",
            userSkills:[],
            userRolesPreferred:[],
            companyName:"Byjus",
            companyEmail:"www.byjus.com",
        }))
    }
    const loginAdmin = () => {
        console.log("Login Admin");
        dispatch(login({
            userRole:"Admin",
            userName:"",
            userAge:"",
            userGender:"",
            userEmail:"",
            userNumber:"",
            userEducationalInformation:"",
            userSkills:[],
            userRolesPreferred:[],
            companyName:"",
            companyEmail:"",
        }))
    }
    return (
      <div>
        <Navbar />
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={jobVideo} type='video/mp4'/>
            </video>

            <div className='content'>
                <h1>Hire D</h1>
                <p>Semantic Web App</p>
                <div>
                    
                    <Link to='/seekerLoginForm'>
                        <button className='btn btn-light' onClick={registerSeeker}>
                            Register Seeker
                        </button>
                    </Link>
                    <Link to='/seekerDashboard'>
                        <button className='btn btn-light' onClick={loginSeeker}>
                            Login Seeker
                        </button>
                    </Link>
                    <Link to='/companyDashboard'>
                        <button className='btn btn-light' onClick={loginCompany}>
                            Login Company
                        </button>
                    </Link>
                    <Link to='/trainerDashboard'>
                        <button className='btn btn-light' onClick={loginTrainer}>
                            Login Trainer
                        </button>
                    </Link>
                    <Link to="/adminDashboard">
                        <button className='btn btn-light' onClick={loginAdmin}>
                            Login Admin
                        </button>
                    </Link>

                </div>
            </div>
        </div>
        <Footer />
      </div>
    )
}

export default Login