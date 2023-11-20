import React, { useEffect } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Container, Nav, NavLink, Navbar } from 'react-bootstrap';
import StoryData from './Data/MoreStoriesData';




const MoreStoryDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const navigate = useNavigate();
    const handleInfo = () => {
        
        navigate('/fashion');
      };

  let {pid} = useParams()
  let data=StoryData.find((a)=>a.id==pid)
  
  return (
  <>
     <button className='bg-secondary text-white px-2 mt-3 rounded-2' style={{marginLeft:'150px'}} onClick={handleInfo}>
        <FaArrowLeft/> &nbsp;back</button>
        <div className='container mt-5'><h2>{data.title}</h2> 
        <p className='writer'>
              {data.writer} <span>{data.date}</span>
            </p> </div>

     <Navbar  collapseOnSelect expand="md"variant='dark'>
      <Container className='navbars mt-2'>
      
        <Navbar.Collapse id="responsive-navbar-nav">
         
        <NavLink to ='' className='text-black me-3'><h4>31.4K </h4>Shares</NavLink>
          
          <Nav className="me-auto gap-2 " style={{fontSize:'20px'}}>
          
            <NavLink to ='' className='bg-primary'><i className='fa fa-facebook '/>&nbsp; Share On Facebook</NavLink>
            <NavLink to ='' className='bg-dark'><i className="fa fa-twitter"/>&nbsp;Tweet it</NavLink>
            
            
            <NavLink to =''className='bg-danger'><i className="fa fa-vimeo-square"/></NavLink>
            <NavLink to =''className='bg-success'><i className="fa fa-google-plus"/></NavLink>
           
            <NavLink to ='' className='bg-danger'><i className="fa fa-instagram"/></NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='container  mb-5  bg-light shadow  ' >
        
        
        <div className='text-center shadow-lg '>
        <img className='w-100' src={data.image} alt={data.title} />
        </div>
        
            <div className='p-5'><p>{data.description}</p></div>
            
            
            

        

      
      
     
      
    </div>
    </>
  );
};

export default MoreStoryDetails;
