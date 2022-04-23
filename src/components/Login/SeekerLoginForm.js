import React,{useState,useEffect} from 'react';
import "./SeekerLoginForm.css";
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';
import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {login,logout,
    selectUserRole,selectUserName,
    selectUserAge,selectUserGender,
    selectUserEmail,selectUserNumber,
    selectUserEducationalInformation,
    selectUserSkills,selectUserRolesPreferred,
    selectCompanyName,selectCompanyEmail } from "../../features/userSlice";


const SeekerLoginForm = () => {

    const dispatch = useDispatch();

    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [gender,setGender] = useState('');
    const [email,setEmail] = useState('');
    const [number,setNumber] = useState('');
    const [educationalInformation,setEducationalInformation] = useState('');

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


    const handleFormSubmit = (e) => {
        console.log("CLicked");
        e.preventDefault();
        dispatch(login({
            userRole:"Seeker",
            userName:name,
            userAge:age,
            userGender:gender,
            userEmail:email,
            userNumber:number,
            userEducationalInformation:educationalInformation,
            userSkills:["C++","Javascript","Python"],
            userRolesPreferred:["SDE-1","Member of Technical Staff","Data Scientist"],
            companyName:"",
            companyEmail:"",
        }))
    }

  return (
    <div>
        <Navbar />
        <div className="form">
            <form onSubmit={handleFormSubmit}>
                <h1>Form Details</h1>
                
                <label>Your Name</label>
                <input 
                    type='text' 
                    name="name"
                  
                    onChange = {e => setName(e.target.value)}
                />
                <label>Your Age</label>
                <input 
                    type='text' 
                    name="age"
                  
                    onChange = {e => setAge(e.target.value)}
                />

                <label>Your Gender</label>
                <input 
                    type='text' 
                    name="gender"
                   
                    onChange = {e => setGender(e.target.value)}
                />

                <label>Your Email</label>
                <input 
                    type='text' 
                    name="email"
                    onChange = {e => setEmail(e.target.value)}
                />

                <label>Your Number</label>
                <input 
                    type='text' 
                    name="number"
                   
                    onChange = {e=>setNumber(e.target.value)}
                />

                <label>Your Educational Information</label>
                <textarea 
                    rows='6' 
                    placeholder='Type a short message here' 
                   
                    onChange = { e=>setEducationalInformation(e.target.value) }
                />
                <button className='btn'>Submit</button>
            </form>
            <Link to="/seekerDashboard">
                    <button className='btn'>Go to Seeker Dashboard</button>
            </Link>
        </div>
        <Footer />
    </div>
  )
}

export default SeekerLoginForm