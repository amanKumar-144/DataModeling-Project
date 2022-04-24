import React,{useState,useEffect} from 'react';
import "./CompanyLoginForm.css";
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';
import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {login,selectUrl,selectCname,selectDesc } from "../../features/userSlice";


const CompanyLoginForm = () => {

    const dispatch = useDispatch();

    const [url,setUrl] = useState('');
    const [cname,setCname] = useState('');
    const [desc,setDesc] = useState('');
   


    const handleFormSubmit = (e) => {
        console.log("Clicked");
        e.preventDefault();
        dispatch(login({
            role:"Company",
            url:url,
            cname:cname,
            desc:desc
        }))
    }

  return (
    <div>
        <Navbar />
        <div className="form">
            <form onSubmit={handleFormSubmit}>
                <h1>Form Details</h1>
                
                <label>Company Name</label>
                <input 
                    type='text' 
                    name="name"
                  
                    onChange = {e => setCname(e.target.value)}
                />
                <label>Company Url</label>
                <input 
                    type='text' 
                    name="age"
                  
                    onChange = {e => setUrl(e.target.value)}
                />

                <label>Company Description</label>
                <textarea           
                    rows='6' 
                    placeholder='Type a short message here' 
                   
                    onChange = { e=>setDesc(e.target.value) }
                />

               
                <button className='btn'>Submit</button>
            </form>
            <Link to="/companyDashboard">
                    <button className='btn'>Go to Company Dashboard</button>
            </Link>
        </div>
        <Footer />
    </div>
  )
}

export default CompanyLoginForm