import React from 'react';
import './Seeker.css';
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';
import HeroImage from '../general/HeroImage';
import DummyData from './DummyData';

const Seeker = () => {
  return (
    <div>
        <Navbar />
            <HeroImage heading="Seeker Dashboard" text="View Seeker Dashboard" />
            <div className="pricing">
                <div className="card-container">
                    <h1>All Jobs Posted by Company</h1>
                    {
                        DummyData.map((data,key)=>{
                            return(
                                <div className='card' key={key}>
                                    <h3>Job Description</h3>
                                    <p className='btc'>JobId : {data.jobId}</p>
                                    <p className='btc'>JobTitle : {data.title}</p>
                                    <p className='btc'>JobRole : {data.roleType}</p>
                                    <p className='btc'>CompanyName : {data.companyName}</p>
                                    <p className='btc'>CompanyUrl : {data.companyUrl}</p>
                                    <p className='btc'>Location : {data.location}</p>
                                    <p className='btc'>Description : {data.description}</p>
                                    <p className='btc'>Link : {data.link}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        <Footer />
    </div>
  )
}

export default Seeker